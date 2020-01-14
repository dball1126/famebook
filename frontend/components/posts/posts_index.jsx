import React from 'react';
import {withRouter} from 'react-router-dom';
import PostsIndexItem from './posts_index_item';

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            posts: props.posts,
            body: "",
            photoFile: null
        })
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handlefile.bind(this);

    }

    handlefile(e){
        debugger
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.createUserPost({body: this.state.body,
                                   author_id: this.props.userId}).then(() => this.props.history.push('/'))
    }
    updateField(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    componentDidMount(){
        this.props.fetchUserPosts(this.props.userId).then(() => this.setState({posts: this.props.posts})); 
    }

    postForm(){
        let username = this.props.user.username;
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="postform-headline">
                        <span>Create Post</span>
                    </div>
                    
                    <div className="postform-body">
                        <textarea type="text"
                               onChange={this.updateField('body')} 
                               placeholder={`What's on your mind, ${username}`}/>
                    </div>
                    <input type="file" onChange={this.handlefile.bind(this)}/>
                    <button type="Submit" value="Post" className="postbutton">Post</button>                   
                </form>
            </>
        )
    }

    
    render(){
        let posts = this.state.posts;
        let user = this.props.user;
       
        console.log(this.state)
        return  (
            <div className="posts-wrapper">
                <div className="posts-box">
                    <div className="posts-left-wrapper">
                            <h1>POSTS LEFT</h1>
                    </div>
                    <div className="posts-right-wrapper">
                        <div className="posts-right-inner-left-box">

                            {this.postForm()}

                            <PostsIndexItem posts={posts} user={user}/>
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