import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth-context";

class PrivateRoute extends React.Component {
    static contextType = AuthContext;
    // show component only when the user is logged in
    // Otherwise, redirect the user to /login

    render(){
        console.log(this.context.isLoggedIn);
        const { component: Component, ...rest } = this.props;
        return  <Route {...rest} render={props => (this.context.isLoggedIn ? <Component {...props}/>: <Redirect to={{  pathname: "/login", state: { from: props.location }}}/>)} />
    }
    
}

export default PrivateRoute;