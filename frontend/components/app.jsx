import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
// <ProtectedRoute path='/posts' />  for the bottom
const App = () => {
    return (
        <div className="main-div">
            <Route path ="/" component={NavBarContainer}/>
            <Route exact path='/' component={HomepageContainer}/>
            <AuthRoute path='/signup' component={SignupContainer}/>
            <AuthRoute path='/login' component={LoginContainer}/>
        </div>
    )
}

export default App;