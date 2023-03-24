import React, { useState } from 'react';

const Card = ({ title, origin, picture, instructions }) => {
  const [cardPopup, setCardPopup] = useState(false);

  const handlePopup = () => {
    setCardPopup(!cardPopup);
  };

  return (
    <div className="card-container" onClick={() => handlePopup()}>
      <h3>{title}</h3>
      <p>Origin: {origin}</p>
      <div className="img-container">
        <img src={picture} alt={title} />
      </div>
      <p className="description">{instructions}</p>

      {cardPopup && (
        <div className="popup-container">
          <div className="container" onClick={() => handlePopup()}>
            <h3>{title}</h3>
            <p>Origin: {origin}</p>
            <div className="img-container">
              <img src={picture} alt={title} />
            </div>
            <p className="description">{instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
