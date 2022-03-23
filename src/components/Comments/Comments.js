import React from "react";
import CommentItem from "./CommentItem";

import './Comment.scss'
import CommentForm from "./CommentForm";

class Comments extends React.Component {
  render() {
    return <div className="container px-3 pb-5">
            <h1>Comments</h1>
            <CommentItem />
            <CommentForm/>
        </div>;
  }
}

export default Comments;
