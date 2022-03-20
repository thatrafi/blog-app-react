import React from "react";
import PostsPreview from "../components/Posts/PostsPreview";
import { connect } from "react-redux";

import { uiActions } from '../reducers/uiReducer';


const mapDispatchToProps = dispatch => {
    return {
      setBlueBackground : () => dispatch(uiActions.setBlueBackground()),
      setWhiteBackground : () => dispatch(uiActions.setWhiteBackground())
    }
  }

class Homepage extends React.Component{

    componentDidMount(){
        this.props.setBlueBackground()
      }

    componentwillde(){
        this.props.setWhiteBackground()
    }

    render(){
        return (
        <div className="container_blue p-5">
            <PostsPreview/>
        </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(Homepage);