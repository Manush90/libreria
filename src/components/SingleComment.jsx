import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4YzIyNTA0NTg5ZjAwMTk0OGU1MTIiLCJpYXQiOjE3MTA4MDE0NDUsImV4cCI6MTcxMjAxMTA0NX0.fV3XmkM7Tgl1pSXgajcRtt1ziZ7dEf6Stog0uNUqkpo",
        },
      });
      if (response.ok) {
        alert("Recensione Cancellata");
      } else {
        throw new Error("ATTENZIONE!!! Recensione non cancellata!!!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
