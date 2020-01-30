import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PostsContainer from './posts/posts_index_container';


const App = () => {
    return (
        <div className="main-div">
            {/* <NavBarContainer /> */}
            <AuthRoute path ="/" component={HomepageContainer}/>
            <ProtectedRoute path='/posts' component={PostsContainer}/>
            
        </div>
    )
}

export default App;