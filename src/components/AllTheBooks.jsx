import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";

const AllTheBooks = function () {
  return (
    <>
      {horror.map((book) => (
        <Card className="p-0 mx-2 my-3" key={book.id} style={{ width: "12rem", height: "22rem" }}>
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

export default AllTheBooks;
