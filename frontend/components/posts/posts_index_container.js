import React from 'react';
import {connect} from 'react-redux';
import PostsIndex from './posts_index';
import {fetchUserPosts} from '../../actions/post_actions';

const msp = (state) => {
    
    
    let posts = [];
    if (state.entities.users.posts) posts = state.entities.users.posts
    
    return {
        userId: state.session.id,
        posts: posts
    }
}

const mdp = (dispatch) => {

    return {
        fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
    }
}

export default connect(msp, mdp)(PostsIndex);