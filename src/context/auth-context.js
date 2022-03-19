import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAuthentication,validateByToken} from "../actions/authAction"
import { authAction } from '../reducers/authReducer'

const AuthContext = React.createContext({
    isLoggedIn : false,
    loginHandler : ((userData)=>{}),
    logoutHandler : (()=>{})
})

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
        authMessage : state.auth.authMessage,
        token : state.auth.token
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getAuthentication : (userData) =>  dispatch(getAuthentication(userData)),
        validateToken : (token) => dispatch(validateByToken(token)),
        logout : () => dispatch(authAction.logout())
    }
}

class AuthContextProvider extends React.Component{

    constructor(){
        super()
        this.state = {
            isLoggedIn : false,
            isLogin : false
        }
    }

    componentDidMount(){
        this.validateToken();
    }
    

    componentDidUpdate(prevProps,prevState){
        if((prevProps.token !== this.props.token) && (prevProps.isAuthenticated !== this.props.isAuthenticated)){
            if(this.props.token && this.props.isAuthenticated){
                localStorage.setItem('token',this.props.token)
                this.setState({isLoggedIn : true}) 
            }else{
                localStorage.removeItem('token')
                this.setState({isLoggedIn : false})
                this.props.history.push('/')
            }    
        }

        if(prevState.isLogin !== this.state.isLogin){
            console.log('login');
            if(this.state.isLogin){
                this.props.history.push('/dashboard')
            }  
        }  


    }

    // LOGIN
    loginHandler = (userData) => {
        // async get auth from http & dispatch state auth
        this.props.getAuthentication(userData)
        this.setState({isLoggedIn : true,isLogin : true})
    }

    // LOGOUT
    logoutHandler = () => {
        this.props.logout() 
    } 

    validateToken = () => {
        const token = localStorage.getItem('token')
        // validate token
        // if the token from the state (https) != with local
        this.props.validateToken(token)
    }


    render(){
        return <AuthContext.Provider value={{
            isLoggedIn : this.state.isLoggedIn, 
            validateToken : this.validateToken.bind(this) ,
            logoutHandler: this.logoutHandler.bind(this), 
            loginHandler: this.loginHandler.bind(this)}}>

            {this.props.children}
        </AuthContext.Provider>
    }
}

export const AuthProvider = connect(mapStateToProps,mapDispatchToProps)(withRouter(AuthContextProvider));
export default AuthContext