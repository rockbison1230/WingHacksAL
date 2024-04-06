import React, { useState} from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; //import map pin emoji
import './Pin.css'; 

const Pin = ({ text, coordinates }) => {
  const [showTextBox, setShowTextBox] = useState(false); 


// when clicked, pin shows text
const handlePinClick = () => {
  setShowTextBox(!showTextBox);
};

// want to generate a text box w a background, not just text when click event
return ( //had to edit z-index bc pins were on top of the msges.
  <div className="pin-container" style={{ position: 'absolute', left: coordinates[1], top: coordinates[0], zIndex:-1}}>
    <FaMapMarkerAlt className="pin-icon" onClick={handlePinClick} />
    {showTextBox && (
      <div className = "textbox-container" style={{position:'absolute', zIndex:0}}>
        <div className = "textbox-background">
          <div className = "textbox-content">{text}
          <button className='exitButton' onClick={handlePinClick}>X
            </button></div>
        </div>
      </div>
    )}
  </div>
);
};

export default Pin;

// shelter information taken from https://www.google.com/maps/search/women+only+shelters+in+florida/@26.4302482,-86.5440194,5.75z?entry=ttu