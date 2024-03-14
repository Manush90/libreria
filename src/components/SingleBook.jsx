import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { index } = this.props;
    const book = fantasy[index];
    const { selected } = this.state;

    return (
      <div>
        <Card
          onClick={() => this.setState({ selected: !selected })}
          className={`p-0 mx-2 my-3 ${selected ? "selected" : ""}`}
          style={{
            width: "12rem",
            height: "22rem",
            border: this.state.selected ? "2px solid red" : "none",
          }}
        >
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
        {selected && <CommentArea />} {/* Mostra CommentArea solo se selected è true */}
      </div>
    );
  }
}

export default SingleBook;
