import React from 'react'
import {Switch,Route} from 'react-router-dom'

import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css'

import LoginPage from './containers/LoginPage';
import Homepage from './containers/Homepage';
import Navigation from './components/Layout/Navigation';
import AdminDashboard from './containers/AdminDashboard';
import NotFoundPage from './containers/NotFoundPage';
import PostActionPage from './containers/PostActionPage';
import PostDetail from './containers/PostDetail';
import AuthContext from './context/auth-context';

const mapStateToProps = state => {
  return {
    isWhiteBkg : state.ui.isWhiteBackground
  }
}



class App extends React.Component{
  static contextType = AuthContext;
  
  render(){

    return (
      <div className={this.props.isWhiteBkg ? 'container' : 'container_blue'}>
        <Navigation/>
        <Switch>
          <Route path='/' exact>
            <Homepage/>
          </Route>
          <Route path='/login' >
            <LoginPage/>
          </Route>
          <Route path='/new-post' >{this.context.isLoggedIn && <PostActionPage/>}</Route>
          <Route path='/edit-post/:postId' exact>{this.context.isLoggedIn && <PostActionPage/>}</Route> 
          <Route path='/dashboard'>{this.context.isLoggedIn &&  <AdminDashboard />}</Route>  
          <Route path='/post/:postId' exact render={(props) => <PostDetail {...props}/> } ></Route>
          <Route path="*" exact>
            <NotFoundPage/>
          </Route>
        </Switch>
      </div>
    )
  }
}


export default connect(mapStateToProps)(App);
