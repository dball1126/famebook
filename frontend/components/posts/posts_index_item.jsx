import React from 'react';

const PostsIndexItem = ({posts, user}) => {
    return (

        posts.map(post =>{
            debugger
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
    })

    )
}

export default PostsIndexItem;