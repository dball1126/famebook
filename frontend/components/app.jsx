import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PostsContainer from './posts/posts_index_container';


const App = () => {
    return (
        <div className="main-div">
            <Route path ="/" component={NavBarContainer}/>
            <AuthRoute exact path='/' component={HomepageContainer}/>
            <ProtectedRoute path='/' component={PostsContainer}/>
            
        </div>
    )
}

export default App;