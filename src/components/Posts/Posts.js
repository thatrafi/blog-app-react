import React, { Fragment } from "react";
import PostItem from "./PostItem";

import { connect } from "react-redux"
import { getAllPosts,deletePostData } from "../../actions/postAction";

const mapStateToProps = state =>{
    return {
        postsData : state.posts.postsData,
        deletedId : state.posts.deletedId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        initPost : () => dispatch(getAllPosts()),
        removePost : (id) => dispatch(deletePostData(id))
    }
}

class Posts extends React.Component{

    componentDidMount(){
        this.props.initPost()
    }

    componentDidUpdate(prevProps,prevState){
        // if the data length is decrease then delete the data on api
        if(prevProps.postsData.length > this.props.postsData.length){
            this.props.removePost(this.props.deletedId)
        }
    }

    render(){
        return (
            <Fragment>
                {this.props.postsData.map((item,index)=>(
                    <PostItem title={item.title} id={item.id} key={index} content={item.content} status={item.status}/>
                ))}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);