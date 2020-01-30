import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const sessionErrorsForm = ({typeOf, text, errorTrue, borderTrue}) => {
    debugger
    return (
        <div className="signup-error">
            <FaExclamationCircle 
                style={borderTrue ? {} : { display: "none" }}
                className={`e-icon ${typeOf}-e-icon`}
            />
            <div 
                style={errorTrue ? {} : { display: "none" }}
                className={`e-icon ${typeOf}-e-icon`}
            >
                <p>{text}</p>
            </div>
        </div>
    )
}

export default sessionErrorsForm;