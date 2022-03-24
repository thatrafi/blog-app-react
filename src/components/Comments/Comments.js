import React from "react";
import CommentItem from "./CommentItem";

import "./Comment.scss";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";
import {
  postCommentData,
  getCommentsByPostId,
} from "../../actions/commentAction";
import { commentActions } from "../../reducers/commentReducer";

const mapStateToProps = (state) => {
  return {
    CommentsByPostId: state.comment.CommentsDataByPostId,
    CommentsData: state.comment.CommentsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (data) => dispatch(commentActions.addComment({ data: data })),
    postComment: (data) => dispatch(postCommentData(data)),
    initComment: (postId) => dispatch(getCommentsByPostId(postId)),
  };
};

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      theComment: {
        id: "",
        username: "",
        comment: "",
        date: "",
      },
    };
  }

  componentDidMount() {
    this.props.initComment(this.props.postId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.CommentsData !== this.props.CommentsData) {
      this.props.postComment(this.state.theComment);
    }
  }

  SubmitCommentHandler(data) {
    const newComment = Object.assign(data, { postId: this.props.postId });
    this.setState((prevState) => {
      return { ...prevState, theComment: newComment };
    });
    this.props.addComment(data);
  }

  render() {
    return (
      <div className="container px-3 pb-5">
        <h1>Comments</h1>
        {(this.props.CommentsByPostId.length > 0) ? (
          this.props.CommentsByPostId.map((comment, index) => (
            <CommentItem
              key={index}
              username={comment.username}
              comment={comment.comment}
              date={comment.date}
            />
          ))
        ) : (
          <div className="py-5">
            <p>No Comments</p>
          </div>
        )}
        <CommentForm onSubmitComment={this.SubmitCommentHandler.bind(this)} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
