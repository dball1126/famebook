import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
const App = () => {
    return (
        <div>
            <Route exact path='/' component={HomepageContainer}/>
            <Route path='/signup' component={SignupContainer}/>
        </div>
    )
}

export default App;