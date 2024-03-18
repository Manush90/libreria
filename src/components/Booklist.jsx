import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";

const BookList = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const selectedIndices = [1, 2, 3, 9, 14, 18];
  const selectedBooks = fantasy.filter((book, index) => selectedIndices.includes(index));

  return (
    <>
      {selectedBooks.map((book, index) => (
        <Card
          className={`p-0 mx-2 my-3 ${activeCard === index ? "active" : ""}`}
          key={index}
          style={{ width: "12rem", height: "22rem", cursor: "pointer" }}
          onClick={() => handleCardClick(index)}
        >
          <Card.Img
            variant="top"
            src={book.img}
            style={{ width: "100%", height: "50%", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <Card.Title
              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {book.title}
            </Card.Title>
            <Card.Text>{book.price} €</Card.Text>
            <Card.Text>{book.category}</Card.Text>
            <Button variant="primary">Compra ora</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default BookList;
