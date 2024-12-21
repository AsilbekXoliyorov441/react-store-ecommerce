import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ id, title, image, price }) => {
  return (
    <div className="border p-4 rounded">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />
      </Link>
      <h2 className="font-bold">{title}</h2>
      <p>${price}</p>
    </div>
  );
};

export default BookCard;
