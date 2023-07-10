import React from "react";
import "./card.css";

const Card = ({ title, description, image }) => {
  return (
    <div>
      <div className="px-6 py-6 ml-24 lg:backdrop-blur-none backdrop-blur-lg rounded">
        <div className="font-bold text-xl mb-4 ">{title}</div>
        <p className="text-gray-700 text-base ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
