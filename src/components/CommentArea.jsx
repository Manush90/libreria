import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTFmZTRjNTllYzAwMTk5MGQ3MTYiLCJpYXQiOjE3MDkyODU4ODYsImV4cCI6MTcxMDQ5NTQ4Nn0.J9V-sXleTIQjLmW95Xr8Yw4skeZ7aEqUogE8vmt5pmQ`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const comments = await response.json();
      this.setState({ comments });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { comments, error } = this.state;

    return (
      <div>
        <CommentsList comments={comments} />
        <AddComment fetchComments={this.fetchComments} />
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}

export default CommentArea;
