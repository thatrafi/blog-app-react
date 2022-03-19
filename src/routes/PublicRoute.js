import React from "react";
//import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth-context";

class PublicRoute extends React.Component {
    // show component only when the user is logged in
    // Otherwise, redirect the user to /login
    static contextType = AuthContext;
    
}

export default PublicRoute;