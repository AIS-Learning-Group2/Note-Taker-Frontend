import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import "./style.css";
import notebg from "../../../assets/note_bg.png";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function NoteCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure();
  const toast = useToast();
  const cancelRef = useRef(null);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote = () => {
    if (tempTitle !== title || tempBody !== body) {
      onConfirmOpen(); // Open confirmation dialog if there are changes
    } else {
      onClose(); // Close modal if no changes were made
    }
  };

  const confirmUpdate = () => {
    dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
    onConfirmClose();
    onClose();
    toast({
      title: "Note updated.",
      description: "Your changes have been saved.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      dispatch(deleteNotes(_id));
      toast({
        title: "Note deleted.",
        description: "The note has been deleted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Card backgroundImage={`url(${notebg})`}>
      <CardBody>
        <VStack>
          <Heading>{title}</Heading>
          <br/>
          <Text>{body}</Text>
          <br/><br/><br/>

          <Flex gap={2}>
            <>
              <Button onClick={onOpen}>Update</Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      ref={initialRef}
                      value={tempTitle}
                      placeholder="Please enter title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                      mt={4}
                      value={tempBody}
                      placeholder="Please enter description"
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={updateNote}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <AlertDialog
                isOpen={isConfirmOpen}
                leastDestructiveRef={cancelRef}
                onClose={onConfirmClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Confirm Update
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure you want to save these changes?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onConfirmClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="blue" onClick={confirmUpdate} ml={3}>
                        Update
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>
            <Button onClick={handleDelete}>Delete</Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}
