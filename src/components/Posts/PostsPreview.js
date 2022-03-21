import React from "react";
import PostPreviewItem from "./PostPreviewItem";

import {connect} from 'react-redux'
import { getAllPosts } from "../../actions/postAction";

import "./PostPreview.scss"

const mapStateToProps = state => {
    return {
        postsData : state.posts.postsData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initPosts : () => dispatch(getAllPosts())
    }
}

class PostsPreview extends React.Component{

    componentDidMount(){
        this.props.initPosts()
    }

    render(){
        return (
           <div className="post_wrapper">
                {this.props.postsData.map((post,index) => (
                    <PostPreviewItem key={index} id={post.id} className={(index===0) ? 'post_big' : 'post_small'} title={post.title} content={post.content} isPreview="true" />
                ))}
            </div>
            
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsPreview);