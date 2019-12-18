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
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')} />
                        </label>
                    </div>

                    <div className="password-login">
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')} />
                        </label>
                    </div>

                    <div className="button-login">
                        <button onClick={this.handleSubmit}>Login Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;