import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import TextArea from "../UI/TextArea";
import CustomRadioGroup from "../UI/CustomRadioGroup";

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = {
      title: React.createRef(),
      content: React.createRef(),
      status: React.createRef(),
    };
  }

  submitHandler(event) {
    event.preventDefault();
    const postData = {
      title: this.inputRef.title.current.value,
      content: this.inputRef.content.current.value,
      status: this.inputRef.status.current.state.selected,
    };
    this.props.onSubmitPost(postData);
    this.inputRef.title.current.value = "";
    this.inputRef.content.current.value = "";
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <Input
          defaultValue={this.props.post ? this.props.post.title : ""}
          type="text"
          className="my-2"
          name="title"
          title="Title"
          placeholder="title"
          onChange={() => {}}
          forwardRef={this.inputRef.title}
        />
        <TextArea
          value={this.props.post ? this.props.post.content : ""}
          className="my-2"
          name="content"
          title="Content"
          placeholder="input content here"
          onChange={() => {}}
          forwardRef={this.inputRef.content}
        />
        <CustomRadioGroup
          radios={["Draft", "Published"]}
          ref={this.inputRef.status}
        />
        <br />
        <br />
        {this.props.post && (
          <Button className="btn btn-primary" type="submit" title="Edit Post" />
        )}
        {!this.props.post && (
          <Button
            className="btn btn-primary"
            type="submit"
            title="Add New Post"
          />
        )}
      </form>
    );
  }
}

export default NewPostForm;
