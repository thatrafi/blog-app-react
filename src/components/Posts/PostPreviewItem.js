import React, { Fragment } from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

import defaultImage from "../../images/crowdbackground.png";

import "../UI/Card.scss";

class PostPreviewItem extends React.Component {
  render() {
    return (
      <Fragment>
        <Card className={`m-2 ${this.props.className}`} customStyle={this.props.style}>
          <img alt="preview" src={defaultImage} />
          <div className="card_body">
            <p>Wednesday, 12 March 2022 </p>
            <h2>
              {this.props.isPreview === "true" && (
                <Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
              )}
            </h2>
            <p>{this.props.content}</p>
          </div>
        </Card>
      </Fragment>
    );
  }
}

export default PostPreviewItem;
