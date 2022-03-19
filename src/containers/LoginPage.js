import React,{Fragment,Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import Card from "../components/UI/Card";

import AuthContext from "../context/auth-context";


const mapStateToProps = (state) => {
    return{
        isAuth : state.auth.isAuthenticated,
        AuthMessage : state.auth.authMessage
    };
}


class LoginPage extends Component{

    static contextType = AuthContext;

    submitLoginHandler(data){
        this.context.loginHandler(data);
    }

    render(){
        return (
            <Fragment>
                <div className="container">
                    <Card>
                        <h1>Login As Admin</h1>
                        <LoginForm onSubmitLogin={this.submitLoginHandler.bind(this)}/>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(withRouter(LoginPage));