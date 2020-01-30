import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = (state) => {
    let fnameBorder = false;
    let fnameError = false;
    let lnameBorder = false;
    let lnameError = false;
    
    state.sessionErrors.forEach(error => {
        if(error.includes("fname"))
            fnameError = true;
            fnameBorder = true;

        if (error.includes('lname'))
            lnameError= true
            lnameBorder= true
    })
  
    return {
        fnameError: fnameError,
        fnameBorder: fnameBorder,
        lnameError: lnameError,
        lnameBorder: lnameBorder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);