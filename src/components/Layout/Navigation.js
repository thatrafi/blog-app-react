import React,{Fragment} from 'react'
import { NavLink,Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import './Navigation.css'
import AuthContext from '../../context/auth-context';

class Navigation extends React.Component{
    static contextType = AuthContext;

    logoutHandler(){
        this.context.logoutHandler();
    }

    render(){
        return (
            <Fragment>
            <header>
                <nav>
                    <Link to="/" className={`logo ${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`}>Blog App</Link>
                    <ul>
                        {!this.context.isLoggedIn && <li><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/'  >Home</NavLink></li>}
                        {this.context.isLoggedIn && <li><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/dashboard'  >Dashboard</NavLink></li> }
                        {this.context.isLoggedIn && <li><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/new-post'   >New Post</NavLink></li>}
                        {!this.context.isLoggedIn && <li><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/login'   >Login</NavLink></li>}
                        {this.context.isLoggedIn && <li onClick={this.logoutHandler.bind(this)}><a>Logout</a></li>}
                    </ul>
                    <div className='menu-toggle'>
                        <input type="checkbox"/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>
            </Fragment>
        )
        
    }
}

const mapStateToProps = state => {
    return {
      isWhiteBkg : state.ui.isWhiteBackground
    }
  }
  

export default connect(mapStateToProps)(withRouter(Navigation));

