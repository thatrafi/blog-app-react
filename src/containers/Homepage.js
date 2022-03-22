import React from "react";
import PostsPreview from "../components/Posts/PostsPreview";
import { connect } from "react-redux";

import { uiActions } from '../reducers/uiReducer';


const mapDispatchToProps = dispatch => {
  return {
    setBlueBackground: () => dispatch(uiActions.setBlueBackground()),
    setWhiteBackground: () => dispatch(uiActions.setWhiteBackground())
  }
}

class Homepage extends React.Component {

  componentDidMount() {
    this.props.setBlueBackground()
  }

  componentwillde() {
    this.props.setWhiteBackground()
  }

  render() {
    return (
      <PostsPreview />
    )
  }
}

export default connect(null, mapDispatchToProps)(Homepage);