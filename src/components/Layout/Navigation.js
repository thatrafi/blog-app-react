import React,{Fragment} from 'react'
import { NavLink,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authAction } from '../../reducers/authReducer';

import classes from './Navigation.module.css'

const mapStateToProps = state =>{
    return {
        isAuth : state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        logout : () => dispatch(authAction.authenticate({message:'', isAuthenticated : false}))
    }
}

class Navigation extends React.Component{

    logoutHandler(){
        this.props.logout()
    }

    render(){
        return (
            <Fragment>
            <header className={classes.header}>
            <nav className={`navbar navbar-expand-lg navbar-light bg-transparent ${classes.nav}`}>
                <Link to="/" className={`${classes.logo} navbar-brand`}>Blog App</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav mr-auto'>
                        {!this.props.isAuth && <li className='nav-item'><NavLink to='/' activeClassName={classes.active}>Home</NavLink></li>}
                        {this.props.isAuth && <li className='nav-item'><NavLink to='/dashboard' activeClassName={classes.active}>Dashboard</NavLink></li> }
                        {this.props.isAuth && <li className='nav-item'><NavLink to='/new-post' activeClassName={classes.active} >New Post</NavLink></li>}
                        {!this.props.isAuth && <li className='nav-item'><NavLink to='/login' activeClassName={classes.active} >Login</NavLink></li>}
                        {this.props.isAuth && <li className='nav-item' onClick={this.logoutHandler.bind(this)}>Logout</li>}
                    </ul>
                </div>
                </nav>
            </header>
            </Fragment>
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);

