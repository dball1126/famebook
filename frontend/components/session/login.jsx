import React from 'react';
import LoginErrors from '../errors/session_errors_form';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errorsTrue: false,
            loginErrorsBorder: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let {errorTrue, loginErrorsBorder} = this.props
            
            this.setState({
                loginErrorsBorder: loginErrorsBorder,
                errorTrue: errorTrue
            })
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.login(this.state)
    }

    render() {
        let {errorsTrue, loginErrorsBorder} = this.props;

        return (
            <>
                {/* <div className="login-errors" style={{display: errors ? '' : 'none'}}> */}
                    <LoginErrors 
                        typeOf="login"
                        text="The email of phone number you've entered doesn't match
                              any account. Sign up for an account."
                        errorTrue={errorsTrue}
                        borderTrue={loginErrorsBorder}
                    />
                {/* </div> */}
            <div className="login-session-form">
                <form className="login-form">
                    <div className="email-login">
                        <div className="email-label"><label htmlFor="email">Email:</label></div>
                        
                            <input type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')} id="email"/>
                    </div>

                    <div className="password-login">
                        <div className="password-label"><label htmlFor="password">Password:</label></div>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')} id="password"/>
                    </div>

                    <div className="button-login">
                        <button className="button-div" onClick={this.handleSubmit}>Log In</button>
                    </div>
                </form>
                
            </div>
            </>
        )
    }
}

export default Login;