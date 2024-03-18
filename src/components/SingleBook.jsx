import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";

class SingleBook extends Component {
  render() {
    const { index } = this.props;
    const book = fantasy[index];

    return (
      <div>
        <Card className="p-0 mx-2 my-3" style={{ width: "12rem", height: "22rem" }}>
          <span
            className="badge redspan"
            style={{ position: "absolute", top: "-10px", right: "-15px", zIndex: "0" }}
          >
            Novità
          </span>
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
            <Button variant="warning">Compra ora</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
