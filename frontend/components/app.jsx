import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={HomepageContainer}/>
        </div>
    )
}

export default App;