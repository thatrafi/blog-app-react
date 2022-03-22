import React from "react";

import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import Posts from "../components/Posts/Posts";
import Card from "../components/UI/Card";

const mapStateToProps = state => {
    return {
        isAuth : state.auth.isAuthenticated
    }
}

class AdminDashboard extends React.Component{

    render(){
        return (
            <div className="container">
            <Card className="p-5">
                <h1>All Posts</h1>
                <Posts/>
            </Card>
        </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(AdminDashboard));