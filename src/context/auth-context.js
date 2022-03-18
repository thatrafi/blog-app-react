import React from 'react'

import { connect } from 'react-redux'

const AuthContext = React.createContext({
    checkAuth : (()=>{})
})

const mapStateToProps = state => {
    return{
        isAuth : state.auth.isAuthenticated
    }
}

class AuthContextProvider extends React.Component{

    checkAuth(){
        if(!this.props.isAuth){
            this.props.history.push('/login')
        }
    }

    componentDidMount(){
        this.checkAuth()
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.isAuth !== this.props.isAuth){
            this.checkAuth()
        }
    }

    render(){
        return <AuthContext.Provider value={this.checkAuth}>
            {this.props.children}
        </AuthContext.Provider>
    }
}

export const AuthProvider = connect(mapStateToProps)(AuthContextProvider)
export default AuthContext