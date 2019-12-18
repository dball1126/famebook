import React from 'react';
import {withRouter}from 'react-router-dom';

class Posts extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return  (
            <div className="posts-wrapper">
                <div className="posts-box">
                    <h1>"ASDFASDFASDFASDF</h1>
                    <h1>aasdfasdfasdf</h1>
                    <h1>aasdfasdfasdf</h1>
                </div>
            </div>
        )
    }
}

export default withRouter(Posts);