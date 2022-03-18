import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { getPostById } from "../../actions/postAction";
import { connect } from "react-redux";
import { postActions } from "../../reducers/postReducer";

// initPostById : (id) => dispatch(getPostById(id))

const mapDispatchToProps = dispatch =>{
    return{
        initPostById : (id) => dispatch(getPostById(id)),
        removePostById : (id) => dispatch(postActions.removePost({id : id}))
    }
}

class PostItem extends React.Component{

    onClickEditHandler(){
        this.props.initPostById(this.props.id)
    }

    onClickDeleteHandler(){
        this.props.removePostById(this.props.id)
    }

    render(){
        return (
            <Card className="w-100 my-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.status}</h6>
                    <p className="card-text">{this.props.content}</p>
                    <Link to={`/edit-post/${this.props.id}`}><Button className="btn-primary" title="edit" onClick={this.onClickEditHandler.bind(this)} /></Link>
                    <Button className="btn-danger mx-2" title="delete" onClick={this.onClickDeleteHandler.bind(this)} />
                </div>
            </Card>
        )
    }
}

export default connect(null,mapDispatchToProps)(PostItem);