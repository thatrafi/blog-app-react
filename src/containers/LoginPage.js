import React,{Fragment,Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import Card from "../components/UI/Card";
import { getAuthentication} from "../actions/authAction"

const mapStateToProps = (state) => {
    return{
        isAuth : state.auth.isAuthenticated,
        AuthMessage : state.auth.authMessage
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAuthentication : (userData) =>  dispatch(getAuthentication(userData))
    }
}

class LoginPage extends Component{


    componentDidUpdate(prevProps,prevState){
        if(prevProps.AuthMessage !== this.props.AuthMessage){
            if(this.props.isAuth){
                this.props.history.push("/dashboard");
            }
        }
    }

    submitLoginHandler(data){
        this.props.getAuthentication(data);
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LoginPage));