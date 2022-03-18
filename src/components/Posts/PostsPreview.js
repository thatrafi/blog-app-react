import React, { Fragment } from "react";
import PostPreviewItem from "./PostPreviewItem";

import {connect} from 'react-redux'
import { getAllPosts } from "../../actions/postAction";

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
            <Fragment>
                {this.props.postsData.map((post,index) => (
                    <PostPreviewItem key={index} id={post.id}  title={post.title} content={post.content} isPreview="true" />
                ))}
            </Fragment>
            
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsPreview);