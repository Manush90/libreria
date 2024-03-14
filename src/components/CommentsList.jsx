import React from "react";

const CommentsList = ({ comments }) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  const commentsToShow = comments.slice(randomIndex, randomIndex + 3);

  return (
    <div>
      <h4>Commenti</h4>
      <ul>
        {commentsToShow.map((comment, index) => (
          <li key={index}>
            <strong>Commento:</strong> {comment.comment}, <strong>Voto:</strong> {comment.rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
