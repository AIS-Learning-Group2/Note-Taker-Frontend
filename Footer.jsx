// Footer.js
import React from "react";
import questionMarkIcon from  "../../../assets/questionMark.png";



const Footer = () => {
  return (
    <div>
      <style>
        {`
          .buttonFixed {
              position: fixed;
              width: 35px;
              height: 55px; /* Ensures the button is round */
              font-weight: bold;
              font-size: 25px;
              color: #fff;
              border: none;
              border-radius: 50%;
              cursor: pointer;
          }

          #homeButton {
              background-color: black; 
              bottom: 20px;
              left: 25px; /* Positioned on the left side */
          }

          #helpButton {
              background-color: black;
              bottom: 20px;
              right: 25px; /* Positioned on the right side */
          }

          .buttonFixed:hover {
              background-color: gray;
          }
        `}

      </style>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow fixed-bottom text-center">
        <div className="container-fluid text-center">
         
          
          
          {/* Help Button */}
          <a href="http://localhost/forum/index.php" style={{textDecoration: 'none'}}>
          <button 
                style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '1000', 
                backgroundColor: 'transparent', 
                border: 'none' 
            }}
        >
            <img src={questionMarkIcon} />
            </button>

          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
