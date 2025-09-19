import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({ image }) => {
  return (
    <div>
      {/* Card Icons   */}
      <div>
        <span>
          <FaHeart />
        </span>
        <button>
          <FaPlus />
        </button>
      </div>

      {/* Card Image  */}
      <div>
        <img src={image} />
      </div>

      {/* Card Content  */}
      <div>
        <h3>Title</h3>
        <p>3.00</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
