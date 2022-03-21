import React from "react"
import Card from "../UI/Card";
import { Link } from "react-router-dom";

import defaultImage from '../../images/crowdbackground.png'

import "../UI/Card.scss"


class PostPreviewItem extends React.Component{
    render(){  
        return (
            <Card className={`m-2 ${this.props.className}`} >
                <img alt="preview" src={defaultImage}/>
                <div className="card_body">
                    <p>Wednesday, 12 March 2022 </p>
                    <h2>{this.props.isPreview === "true" && <Link to={`/post/${this.props.id}`}>{this.props.title}</Link>}</h2>
                    <p>{this.props.content}</p>
                </div>
            </Card>
        )
    }
}

export default PostPreviewItem;