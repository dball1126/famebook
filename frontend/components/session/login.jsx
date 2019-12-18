import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <div className="login-session-form">

                <form className="login-form">
                    <div className="email-login">
                        <div className="email-label"><label for="email">Email:</label></div>
                        
                            <input type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')} id="email"/>
                    </div>

                    <div className="password-login">
                        <div className="password-label"><label for="password">Password:</label></div>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')} id="password"/>
                    </div>

                    <div className="button-login">
                        <div className="button-div" onClick={this.handleSubmit}>Log In</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;