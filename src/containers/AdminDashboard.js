import React from "react";

import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import Posts from "../components/Posts/Posts";
import { uiActions } from "../reducers/uiReducer";

const mapStateToProps = state => {
    return {
        isAuth : state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setWhiteBackground : () => dispatch(uiActions.setWhiteBackground())
    }
}

class AdminDashboard extends React.Component{

    componentDidMount(){
        this.props.setWhiteBackground()
    }

    render(){
        return (
            <div className="container">
                <Posts/>
           </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AdminDashboard));