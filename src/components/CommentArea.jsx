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

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWEwN2FiYWQyODAwMTliZDUyYzYiLCJpYXQiOjE3MTA3NzQ3OTEsImV4cCI6MTcxMTk4NDM5MX0.Ep10PX0FPUvNBnxJvcpmSDWkw4_TjxesDsOvBTZW0_4`,
          },
        }
      );
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
      <div className="d-flex flex-column">
        <CommentsList comments={comments} />
        <AddComment fetchComments={this.fetchComments} />
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}

export default CommentArea;
