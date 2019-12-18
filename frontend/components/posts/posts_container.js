import React from 'react';
import {connect} from 'react-redux';
import Posts from './posts';
const msp = (state) => {
    return {}
}

const mdp = (dispatch) => {
    return {}
}

export default connect(msp, mdp)(Posts);