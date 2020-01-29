import React from 'react';

const PostsIndexItem = (props) => {
    let posts = props.posts;
    let user = props.user
    
    return (

        posts.map(post =>{

            let postImage = () => {
                if (post.image_attached) {
                    return <img src={post.image} className="post-image"/>
                } else {
                    return "";
                }
            }
            

            return (
                <div key={post.id}>
                    <div>
                        <h1>{user.username}</h1>
                    </div>
                    <div>
                        {post.body}
                        {postImage()}
                    </div>
                </div>
                )

            }   
        )
    )
}
export default PostsIndexItem;