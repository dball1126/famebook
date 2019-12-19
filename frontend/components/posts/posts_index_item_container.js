import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PostsIndexItem from './posts_index_item';

const msp = ({body, user}) => {
    
    return {
        body: body,
        user: user
    }
}

const mdp = (dispatch) => {
    return {
        
    }
}

export default connect(msp, null)(PostsIndexItem);