import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";

const AllTheBooks = function () {
  return (
    <>
      {horror.map((book) => (
        <Card key={book.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
            <Card.Text>{book.category}</Card.Text>
            <Button variant="primary">Aggiungi al carrello</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AllTheBooks;
