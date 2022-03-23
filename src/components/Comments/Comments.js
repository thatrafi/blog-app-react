import React from "react";
import CommentItem from "./CommentItem";

import "./Comment.scss";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";
import { postCommentData,getCommentsByPostId } from "../../actions/commentAction";

const mapStateToProps = (state) => {
  return {
    CommentsByPostId: state.comment.CommentsDataByPostId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (data) => dispatch(postCommentData(data)),
    initComment: (postId) => dispatch(getCommentsByPostId(postId))
  };
};

class Comments extends React.Component {
  componentDidMount() {
    this.props.initComment(this.props.postId)
  }

  componentDidUpdate() {

  }

  SubmitCommentHandler(data) {
    const postData = Object.assign(data, { postId: this.props.postId });
    this.props.postComment(postData);
  }

  render() {
    return (
      <div className="container px-3 pb-5">
        <h1>Comments</h1>
        <CommentItem />
        <CommentForm onSubmitComment={this.SubmitCommentHandler.bind(this)} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
