import { connect } from 'react-redux';
import NavBar from './navbar';

import { logout } from '../../actions/session_actions';

const msp = (state) => {
    
    let userId = state.session.id || [];
    let currentUser;
    if (userId) currentUser = state.entities.users[userId];
    
    return {
        currentUser: currentUser
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(NavBar);