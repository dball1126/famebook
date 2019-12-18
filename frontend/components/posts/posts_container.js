import React from 'react';
import {connect} from 'react-redux';
import Posts from './posts';
import {fetchUserPosts} from '../../actions/post_actions';

const msp = (state) => {
    
    let posts = state.entities.users.posts;
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

export default connect(msp, mdp)(Posts);