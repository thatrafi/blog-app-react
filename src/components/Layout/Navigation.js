import React,{Fragment} from 'react'
import { NavLink,Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import classes from './Navigation.module.css'
import AuthContext from '../../context/auth-context';

class Navigation extends React.Component{
    static contextType = AuthContext;

    logoutHandler(){
        this.context.logoutHandler();
    }

    render(){
        return (
            <Fragment>
            <header className={classes.header}>
            <nav className={`navbar navbar-expand-lg navbar-light bg-transparent ${classes.nav}`}>
                <Link to="/" className={`${classes.logo} navbar-brand`}>Blog App</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav mr-auto'>
                        {!this.context.isLoggedIn && <li className='nav-item'><NavLink to='/' activeClassName={classes.active}>Home</NavLink></li>}
                        {this.context.isLoggedIn && <li className='nav-item'><NavLink to='/dashboard' activeClassName={classes.active}>Dashboard</NavLink></li> }
                        {this.context.isLoggedIn && <li className='nav-item'><NavLink to='/new-post' activeClassName={classes.active} >New Post</NavLink></li>}
                        {!this.context.isLoggedIn && <li className='nav-item'><NavLink to='/login' activeClassName={classes.active} >Login</NavLink></li>}
                        {this.context.isLoggedIn && <li className='nav-item' onClick={this.logoutHandler.bind(this)}>Logout</li>}
                    </ul>
                </div>
                </nav>
            </header>
            </Fragment>
        )
        
    }
}

export default connect()(withRouter(Navigation));

