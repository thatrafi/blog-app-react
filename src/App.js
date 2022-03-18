import React,{Fragment} from 'react'
import {Switch,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import LoginPage from './containers/LoginPage';
import Homepage from './containers/Homepage';
import Navigation from './components/Layout/Navigation';
import AdminDashboard from './containers/AdminDashboard';
import NotFoundPage from './containers/NotFoundPage';
import PostActionPage from './containers/PostActionPage';
import PostDetail from './containers/PostDetail';


class App extends React.Component{
  render(){
    return (
      <Fragment>
        <Navigation/>
        <Switch>
          <Route path='/' exact>
            <Homepage/>
          </Route>
          <Route path='/login' >
            <LoginPage/>
          </Route>
          <Route path='/new-post' >
            <PostActionPage/>
          </Route>
          <Route path='/edit-post/:postId' exact render={(props) => <PostActionPage {...props}/>}></Route>
          <Route path='/post/:postId' exact render={(props) => <PostDetail {...props}/> } ></Route>
          <Route path='/dashboard' > 
            <AdminDashboard/>
          </Route>
          <Route path="*" exact>
            <NotFoundPage/>
          </Route>
        </Switch>
      </Fragment>
    )
  }
}


export default App;
