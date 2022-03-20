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
            <header className={`header header_white`}>
            <Link to="/" className={`nav-logo ${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`}>Blog App</Link>
            <nav>
                <ul className="navigation">
                    {!this.context.isLoggedIn && <li className='nav-item'><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/'  >Home</NavLink></li>}
                    {this.context.isLoggedIn && <li className='nav-item'><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/dashboard'  >Dashboard</NavLink></li> }
                    {this.context.isLoggedIn && <li className='nav-item'><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/new-post'   >New Post</NavLink></li>}
                    {!this.context.isLoggedIn && <li className='nav-item'><NavLink className={`${this.props.isWhiteBkg ? 'nav-blue' : 'nav-white'}`} to='/login'   >Login</NavLink></li>}
                    {this.context.isLoggedIn && <li className='nav-item' onClick={this.logoutHandler.bind(this)}>Logout</li>}
                </ul>
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

