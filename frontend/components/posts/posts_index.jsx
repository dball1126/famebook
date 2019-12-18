import React from 'react';
import {withRouter}from 'react-router-dom';

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            posts: props.posts
        })
    }

    componentDidMount(){
        this.props.fetchUserPosts(this.props.userId).then(() => this.setState({posts: this.props.posts}));
        
    }

    userPosts(){
       
      let posts = this.state.posts;
      
       if (posts.length){
           return (
               <div>
                   {"USER POSTS"}
               </div>
           )
       } else {
           return "";
       }
    }

    render(){

        return  (
            <div className="posts-wrapper">
                <div className="posts-box">
                    <div className="posts-left-wrapper">
                            <h1>POSTS LEFT</h1>
                    </div>
                    <div className="posts-right-wrapper">
                        <div className="posts-right-inner-left-box">
                            <h1>posts right inner left</h1>
                                {this.userPosts()}
                        </div>
                        <div className="posts-right-inner-right-box">
                            <h1>posts right inner right</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Posts);