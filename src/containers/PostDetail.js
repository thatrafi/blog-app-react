import React from "react";
import { getPostById } from "../actions/postAction";
import { connect } from "react-redux";
import PostPreviewItem from "../components/Posts/PostPreviewItem";

const mapStateToProps = state => {
    return {
        postData : state.posts.postDataById
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initPostById : (id) => dispatch(getPostById(id))
    }
}

class PostDetail extends React.Component{
    
    componentDidMount(){
        this.props.initPostById(this.props.match.params.postId)
    }

    render(){
        return <PostPreviewItem isPreview="false" title={this.props.postData.data.title} content={this.props.postData.data.content} />
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);