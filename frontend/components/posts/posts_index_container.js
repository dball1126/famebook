import React from 'react';
import {connect} from 'react-redux';
import PostsIndex from './posts_index';
import {fetchUserPosts, createUserPost} from '../../actions/post_actions';

const msp = (state) => {
    // Currently not being used, posts index passes to posts index item directly
    let posts = [];
    let userId = state.session.id;
    let user = state.entities.users[userId];
    if (state.entities.users.posts) posts = state.entities.users.posts
    
    return {
        userId: userId,
        posts: posts,
        user: user
    }
}

const mdp = (dispatch) => {

    return {
        fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
        createUserPost: (userId) => dispatch(createUserPost(userId))
    }
}

export default connect(msp, mdp)(PostsIndex);