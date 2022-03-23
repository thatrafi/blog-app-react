import React from "react";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";

class CommentForm extends React.Component {

    constructor(props){
        super(props)
        this.inputRef = {
            username : React.createRef(),
            comment : React.createRef()
        }
    }

  render() {
    return (
      <div className="comment_form my-2">
        <h2>Add New Comment</h2>
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
      </div>
    );
  }
}

export default CommentForm;
