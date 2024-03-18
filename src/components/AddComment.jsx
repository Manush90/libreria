import React, { Component } from "react";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment: "",
      rate: 1,
      showMessage: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { author, comment, rate } = this.state;
    const { asin, elementId } = this.props;

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWEwN2FiYWQyODAwMTliZDUyYzYiLCJpYXQiOjE3MTA3NzQ3OTEsImV4cCI6MTcxMTk4NDM5MX0.Ep10PX0FPUvNBnxJvcpmSDWkw4_TjxesDsOvBTZW0_4`,
        },
        body: JSON.stringify({ author, comment, rate, asin, elementId }),
      });
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
      this.props.fetchComments();
      this.setState({ author: "", comment: "", rate: 1, showMessage: true });
      setTimeout(() => {
        this.setState({ showMessage: false });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const { author, comment, rate, showMessage } = this.state;

    return (
      <div>
        <h4>Aggiungi un commento</h4>
        {showMessage && <p>Recensione inserita!</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="author">Autore:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="comment">Commento:</label>
            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="rate">Rate:</label>
            <input
              type="number"
              id="rate"
              name="rate"
              min="1"
              max="5"
              value={rate}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
