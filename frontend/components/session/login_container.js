import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => {
    let errorsTrue = false;
    let loginErrorsBorder = false;
    
    state.sessionErrors.forEach(error => {
        if(error.toLowerCase().includes("password") || error.toLowerCase().includes("email"))
            errorsTrue = true;
            loginErrorsBorder = true;
    })

    return {
        errorsTrue: errorsTrue,
        loginErrorsBorder: loginErrorsBorder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);