import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => {
    let errorsTrue = false;
    let errors = [];
    if (!(Object.entries(state.sessionErrors).length === 0 && state.sessionErrors.constructor === Object)
    ) {
        errors = state.sessionErrors
        errorsTrue = true;
    }
    return {
        errors: errors,
        errorsTrue: errorsTrue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);