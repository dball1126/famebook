import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import Login from './login';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => {
    let errorsTrue = false;
    let loginErrorsBorder = false;
    
    state.sessionErrors.forEach(error => {
    if(error.toLowerCase().includes("invalid credentials")){
        errorsTrue = true;
        loginErrorsBorder = true;
    }

    })
    
    return {
        errorsTrue: errorsTrue,
        loginErrorsBorder: loginErrorsBorder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);