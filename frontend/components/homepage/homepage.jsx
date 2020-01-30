import React from 'react';
import SignupContainer from '../session/signup_container';

class Homepage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <div className="homepage-wrapper">
                <div className="homepage-box">
                    <div className="homepage-box-left">
                    <div className="homepage-left-heading">
                                <h2>Connect with friends and the world around you on Facebook.</h2>
                            </div>

                            <div className="homepage-left-content">
                                <img src="https://i.imgur.com/xLAAbWo.png"/>
                                <span>See photos and updates</span> from friends in News Feed.
                            </div>

                            <div className="homepage-left-content">
                                <img src="https://i.imgur.com/hL8776j.png"/>
                                <span>Share what's new</span> in your life on your Timeline.
                            </div>

                            <div className="homepage-left-content">
                                <img src="https://i.imgur.com/Si6EwCM.png"/>
                                <span>Find more</span> of what you're looking for with Facebook Search.
                            </div>
                    </div>
                    <div className="homepage-box-right">

                    <SignupContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;