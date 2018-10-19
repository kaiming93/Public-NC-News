import React from "react";
import CommentVotes from "./CommentVotes";
// import Article from "./Article";

function ListComment({ comments, deleteComment }) {
  return (
    <div>
      {comments.map(comment => {
        return (
          <div key={comment._id} className="card">
            {comment.created_by ? (
              <div className="titre">
                <h2>{comment.created_by.username}</h2>
              </div>
            ) : (
              <h2>unknown</h2>
            )}
            <div className="content">
              <p>{comment.body}</p>
            </div>
            <div>
              <CommentVotes comment={comment} deleteComment={deleteComment} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListComment;