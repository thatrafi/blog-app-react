import React from "react";
import Card from "../UI/Card";

import defaultImage from "../../images/crowdbackground.png";

class CommentItem extends React.Component {
  render() {
    return (
        <Card className="comment_card">
            <div className="comment_body">
                <img className="comment_photo" src={defaultImage} alt="default_img" />
                <div className="comment_content">
                    <div className="content_1">
                        <h2>{this.props.username}</h2>
                        <p>{this.props.date}</p>
                    </div>
                    <p>{this.props.comment}</p>
                </div>
            </div>
        </Card>
    );
  }
}

export default CommentItem;
