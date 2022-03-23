import React from "react";
import PostsPreview from "../components/Posts/PostsPreview";

import { uiActions } from "../reducers/uiReducer";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    setBlueBackground: () => dispatch(uiActions.setBlueBackground()),
    setWhiteBackground: () => dispatch(uiActions.setWhiteBackground()),
  };
};

class Homepage extends React.Component {
  render() {
    return <PostsPreview />;
  }
}

export default connect(null, mapDispatchToProps)(Homepage);
