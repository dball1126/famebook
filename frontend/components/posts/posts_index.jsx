import React from 'react';
import {withRouter} from 'react-router-dom';
import PostsIndexItem from './posts_index_item';
import NavBarContainer from '../navbar/navbar_container';

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            posts: props.posts,
            body: "",
            photoFile: null
        })
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlefile(e){
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();

        if (this.state.photoFile) {
            formData.append('post[image]', this.state.photoFile);
        }

        formData.append('post[author_id]', this.props.userId);
        formData.append('post[body]', this.state.body);

        $.ajax({ //Specifically for uploading a photo due to requirements
            url: `/api/users/${this.props.userId}/posts`,
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    updateField(field){
        return (e) => {
            this.setState({ [field]: e.target.value });
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
       
        return  (
            <>
            <NavBarContainer />
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
            </>
        )
    }
}

export default withRouter(Posts);