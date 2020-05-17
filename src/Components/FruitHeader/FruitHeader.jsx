import React from "react";

import "./FruitHeader.css";

const fruitHeader = (props) => {
  return (
    <div className="FruitHeader">
      <img className="Photo" src={props.photoSrc} alt="Fruit" />
      <div className="NoPhoto">
        <div className="FruitName">Fruit Name:</div>
        <h3>
          {props.fruitName}
          <button className="FavStar" onClick={props.clicked}>
            <i className={props.favBtnStyle}></i>
          </button>
        </h3>
        <button className="WikiButton">Show in wiki</button>
      </div>
    </div>
  );
};

export default fruitHeader;
