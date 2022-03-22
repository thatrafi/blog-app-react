import React from "react";
import { getPostById } from "../actions/postAction";
import { connect } from "react-redux";
import PostPreviewItem from "../components/Posts/PostPreviewItem";
import Loading from "../components/UI/Loading";

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

    constructor(props){
        super(props)
        this.state = {
            isLoading : true
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.postData !== this.props.postData){
            this.setState({isLoading : false})
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.postId);
        this.props.initPostById(this.props.match.params.postId)
    }
    

    render(){
        return this.state.isLoading ? <Loading/> : <PostPreviewItem isPreview="false" title={this.props.postData.data.title} content={this.props.postData.data.content} />
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);