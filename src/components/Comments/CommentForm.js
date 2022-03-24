import React from "react";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = {
      username: React.createRef(),
      comment: React.createRef(),
    };
  }

  submitForm(e) {
    e.preventDefault();
    var todayDate = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    const newComment = {
      username: this.inputRef.username.current.value,
      comment: this.inputRef.comment.current.value,
      date: todayDate,
    };
    this.inputRef.username.current.value = "";
    this.inputRef.comment.current.value = "";
    this.props.onSubmitComment(newComment);
  }

  render() {
    return (
      <div className="comment_form my-2">
        <h2>Add New Comment</h2>
        <form onSubmit={this.submitForm.bind(this)}>
          <Input
            type="text"
            className="my-2"
            name="username"
            title="Username"
            placeholder="Type your name here...."
            onChange={() => {}}
            forwardRef={this.inputRef.username}
          />
          <TextArea
            className="my-2"
            name="comment"
            title="Comment"
            placeholder="Type your comment here...."
            onChange={() => {}}
            forwardRef={this.inputRef.comment}
          />
          <Button
            className="btn btn-primary"
            type="submit"
            title="Add New Comment"
          />
        </form>
      </div>
    );
  }
}

export default CommentForm;
