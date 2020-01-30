import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: [],
            errorsTrue: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    errors() {
        if (!this.props.errorsTrue) {
            return "";
        } else {
    
        return this.props.errors.map((error, i) => {
        return (

                <div key={i} className="actual-error">
                    {error}
                </div>
                )
            })
        }
    }

    render() {
        let errors = this.props.errorsTrue;

        return (
            <>
                <div className="login-errors" style={{display: errors ? '' : 'none'}}>
                    {this.errors()}
                </div>
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