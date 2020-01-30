import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import Signup from './signup';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => {
    let fnameBorder = false;
    let fnameError = false;
    let lnameBorder = false;
    let lnameError = false;
    let newpassError = false;
    let newpassBorder = false;
    let bdayError = false;
    let bdayBorder = false;
    let gendError = false;
    let gendBorder = false;
    let newemailError = false;
    let newemailBorder = false;
    
    state.sessionErrors.forEach(error => {
        
        if(error.includes("fname")){
            fnameError = true;
            fnameBorder = true;
        } 

        if (error.includes('lname')){
            lnameError= true
            lnameBorder= true
        }

        if (error.includes('newpass')){
            newpassError = true
            newpassBorder = true
        }

        if (error.includes('bday')){
            bdayError = true
            bdayBorder = true
        }

        if (error.includes('gend')){
            gendError = true
            gendBorder = true
        }
        
        if (error.includes('newemail')){
            newemailError = true
            newemailBorder = true
        }
    })
    
    return {
        fnameError: fnameError,
        fnameBorder: fnameBorder,
        lnameError: lnameError,
        lnameBorder: lnameBorder,
        newpassError: newpassError,
        newpassBorder: newpassBorder,
        bdayBorder: bdayBorder,
        bdayError: bdayError,
        gendError: gendError,
        gendBorder: gendBorder,
        newemailError: newemailError,
        newemailBorder: newemailBorder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);