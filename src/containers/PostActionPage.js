import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPostForm from '../components/Posts/NewPostForm';
import Card from '../components/UI/Card';

import { postPostData,putPostData } from '../actions/postAction';
import { postActions } from '../reducers/postReducer';

const mapStateToProps = state => {
    return{
        isAuth : state.auth.isAuthenticated,
        postsData : state.posts.postsData,
        postDataById : state.posts.postDataById
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        updateData : (postData,id) => dispatch(putPostData(postData,id)),
        postData : (postData) => dispatch(postPostData(postData)),
        addNewPost : (postData) => dispatch(postActions.addPost({data : postData})),
        replacePost : (postData) => dispatch(postActions.replacePost({data: postData}))
    }
}

class PostActionPage extends React.Component{

    constructor(){
        super()
        this.state = {
            thePost : {
                title : '',
                content : '',
            }
        }
    }

    componentDidUpdate(prevProps,prevState){
        // if data post changed
        if(prevProps.postsData !== this.props.postsData){
            // if there is post data
            if(this.props.match.params.postId){
                // update
                this.props.updateData(this.state.thePost,this.props.match.params.postId)
            }else{
                // add
                this.props.postData(this.state.thePost)
            }
        }

        if(prevProps.postDataById !== this.props.postDataById){
            this.setState((prevState)=>{
                return {...prevState, thePost : this.props.postDataById.data}
            })
         }
        
    }

    submitPostHandler(data){
        this.setState((prevState)=>{
            return {...prevState, thePost : data}
        })
        if(this.props.match.params.postId){
            this.props.replacePost(Object.assign(data, {id: this.props.match.params.postId}))
        }else{
            this.props.addNewPost(data)
        }
        
    }

    render(){
        return (
            <div className="container">
            <Card className="p-5">
                <h1>New Post</h1>
                {this.props.match.params.postId ? 
                (<NewPostForm onSubmitPost={this.submitPostHandler.bind(this)} post={this.state.thePost} />) : 
                (<NewPostForm onSubmitPost={this.submitPostHandler.bind(this)}/>)}
            </Card>
        </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PostActionPage));