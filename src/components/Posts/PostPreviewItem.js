import React from "react"
import Card from "../UI/Card";
import { Link } from "react-router-dom";

import defaultImage from '../../images/crowdbackground.png'
import Button from "../UI/Button";

const cardStyle = {
    width : "50rem",
    margin : "auto"
}

class PostPreviewItem extends React.Component{
    render(){  
        return (<Card className="my-2" customStyle={cardStyle}>
                <img className="card-img-top" alt="preview" src={defaultImage}/>
                <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2>
                    <p>
                        {this.props.content}
                    </p>
                    {this.props.isPreview === "true" && <Link to={`/post/${this.props.id}`}><Button title="See Detail" className="btn-primary"/></Link>}
                </div>
        </Card>)
    }
}

export default PostPreviewItem;