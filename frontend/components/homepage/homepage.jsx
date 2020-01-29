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
                            <h1>BOX LEFT</h1>
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