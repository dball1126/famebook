import React from 'react';

const PostsIndexItem = ({posts, user}) => {
    debugger
    return (

        posts.map(post =>{

            return (
                <div key={post.id}>
                    <div>
                        <h1>{user.username}</h1>
                    </div>
                    <div>
                        {post.body}
                    </div>
                </div>
                )

            }   
        )
    )
}
export default PostsIndexItem;