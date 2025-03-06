import React from "react";

const Card = ({ title, text }) => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Title of card : {title}</h1>
      <p>Description of card : {text}</p>
    </div>
  );
};

export default Card;
