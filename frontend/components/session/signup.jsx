import React from 'react';
import SignUpErrors from '../errors/session_errors_form';

class Signup extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            month: "01",
            day: "01",
            year: "1985",
            birthday: '',
            gender: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            fnameError: this.props.fnameError,
            fnameBorder: this.props.fnameBorder,
            lnameError: this.props.lnameError,
            lnameBorder: this.props.lnameBorder,
            newpassError: this.props.newpassError,
            newpassBorder: this.props.newpassBorder,
            bdayError: this.props.bdayError,
            bdayBorder: this.props.bdayBorder,
            gendError: this.props.gendError,
            gendBorder: this.props.gendBorder,
            newemailError: this.props.newemailError,
            newemailBorder: this.props.newemailBorder
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value })
        }
    }
    componentDidUpdate(prevProps){
        
        if (this.props !== prevProps) {
            let {fnameError, fnameBorder, lnameBorder, lnameError,
                 newemailBorder, newemailError, newpassBorder, newpassError,
                 gendBorder, gendError} = this.props
            
            this.setState({
                fnameError: fnameError,
                fnameBorder: fnameBorder,
                lnameBorder: lnameBorder,
                lnameError: lnameError,
                newemailError: newemailError,
                newemailBorder: newemailBorder,
                newpassBorder: newpassBorder,
                newpassError: newpassError,
                gendBorder: gendBorder,
                gendError: gendError

            })
        }

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.clearErrors();

        let {month, day, year, birthday} = this.state

            birthday = `${year}-${month}-${day}`;
            this.state.birthday = birthday;
            
        this.props.signup(this.state)
            .then( () => this.props.history.push('/'));
    }

    render(){
       let {fnameBorder, fnameError, lnameBorder, lnameError,
            newemailBorder, newemailError, newpassBorder, newpassError,
            gendBorder, gendError} = this.state
        
        return (
            <div className="session-form">
                <div className="signup-header1">Sign Up</div>
                <div className="signup-header2">It’s quick and easy.</div>
                <form className="signup-form">

                    <div className="signup-fullname">
                        <label className="names">
                            <input 
                                    type="text"
                                    className={`firstname ${fnameBorder ? "e-f-border" : ""}`}
                                    placeholder="First name"
                                    value={this.state.first_name}
                                    onChange={this.handleInput('first_name')}
                            />
                            <SignUpErrors
                                    typeOf="fname"
                                    text="What's your name?"
                                    errorTrue={fnameError}
                                    borderTrue={fnameBorder}
                            />
                        </label>
                        <label className="names">
                            <input 
                                    type="text"
                                    className={`lastname ${lnameBorder ? "e-l-border" : ""}`}
                                    placeholder="Last name"
                                    value={this.state.last_name}
                                    onChange={this.handleInput('last_name')}
                            />
                            <SignUpErrors
                                    typeOf="lname"
                                    text="What's your name?"
                                    errorTrue={lnameError}
                                    borderTrue={lnameBorder}
                            />
                            
                        </label>
                    </div>

                    <label className="signup-email-label">
                        <input type="text"
                                className={`email-password-signup ${newemailBorder ? "e-n-border" : ""}`}
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}/>
                        <SignUpErrors
                                    typeOf="newemail"
                                    text="You'll use this when you log in and if you ever
                                          need to reset your password."
                                    errorTrue={newemailError}
                                    borderTrue={newemailBorder}
                        />
                    </label>
                    <label className="signup-password-label">
                        <input type="password"
                                className={`email-password-signup ${newpassBorder ? "e-p-border" : ""}`}
                                placeholder="New password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}/>
                        <SignUpErrors
                                    typeOf="newpass"
                                    text="Enter a combination of at least six numbers,
                                          letters and punctuation marks (like ! and)."
                                    errorTrue={newpassError}
                                    borderTrue={newpassBorder}
                        />
                    </label>

                    <div className="birth-box">
                        <div className="birth-header">
                            Birthday
                        </div> 

                    <fieldset className="date" >
                    <label htmlFor="month_start">Month</label>
                    <select id="month_start"
                            name="month_start" 
                            value={this.state.month} 
                            onChange={this.handleInput('month')}>

                        <option>January</option>      
                        <option>February</option>      
                        <option>March</option>      
                        <option>April</option>      
                        <option>May</option>      
                        <option>June</option>      
                        <option>July</option>      
                        <option>August</option>      
                        <option>September</option>      
                        <option>October</option>      
                        <option>November</option>      
                        <option>December</option>      
                    </select>
                    <label htmlFor="day_start">Day</label>
        <select id="day_start"
                name="day_start" 
                value={this.state.day} 
                onChange={this.handleInput('day')}>
            <option>1</option>      
            <option>2</option>      
            <option>3</option>      
            <option>4</option>      
            <option>5</option>      
            <option>6</option>      
            <option>7</option>      
            <option>8</option>      
            <option>9</option>      
            <option>10</option>      
            <option>11</option>      
            <option>12</option>      
            <option>13</option>      
            <option>14</option>      
            <option>15</option>      
            <option>16</option>      
            <option>17</option>      
            <option>18</option>      
            <option>19</option>      
            <option>20</option>      
            <option>21</option>      
            <option>22</option>      
            <option>23</option>      
            <option>24</option>      
            <option>25</option>      
            <option>26</option>      
            <option>27</option>      
            <option>28</option>      
            <option>29</option>      
            <option>30</option>      
            <option>31</option>      
        </select> 
        <label htmlFor="year_start">Year</label>
        <select id="year_start"
                name="year_start"
                value={this.state.year} 
                onChange={this.handleInput('year')} >
            <option>1985</option>      
            <option>1986</option>      
            <option>1987</option>      
            <option>1988</option>      
            <option>1989</option>      
            <option>1990</option>      
            <option>1991</option>      
            <option>1992</option>      
            <option>1993</option>      
            <option>1994</option>      
            <option>1995</option>      
            <option>1996</option>      
            <option>1997</option>      
            <option>1998</option>      
            <option>1999</option>      
            <option>2000</option>      
            <option>2001</option>      
            <option>2002</option>      
            <option>2003</option>      
            <option>2004</option>      
            <option>2005</option>      
            <option>2006</option>      
            <option>2007</option>      
            <option>2008</option>      
            <option>2009</option>      
            <option>2010</option>      
            <option>2011</option>      
            <option>2012</option>      
            <option>2013</option>      
            <option>2014</option>      
            <option>2015</option>      
            <option>2016</option>      
            <option>2017</option>      
            <option>2018</option>      
            <option>2019</option>      
            <option>2020</option>      
        </select>
        </fieldset>
        </div>
                    <div className="gender-header">Gender</div>
                    <div className="gender-box">
                            <SignUpErrors
                                    typeOf="gend"
                                    text="Please choose a gender.
                                          You can change who can see this later."
                                    errorTrue={gendError}
                                    borderTrue={gendBorder}
                            />
                        <span className={`span-gender-f ${gendBorder ? "e-m-border" : ""}`}>
                            <input type="radio" 
                            id="female-id"
                            onChange={this.handleInput('gender')}
                            className={`gender ${gendBorder ? "e-m-border" : ""}`}
                            value='female'/>
                            <label htmlFor="female-id" className="gender-label">
                                Female
                            </label>
                        </span>
                        <span className={`span-gender-m ${gendBorder ? "e-m-border" : ""}`}>
                            <input type="radio" 
                                   id="male-id"
                                   
                                   onChange={this.handleInput('gender')}
                                   value='male'/>
                            <label htmlFor="male-id" className="gender-label">
                                Male
                            </label>
                        </span>
                    </div>
                    
                    <div className="terms-box">
                    <p className="terms-content"> 
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. 
                        You may receive SMS Notifications from us and can opt out any time.
                    </p>
                    </div>

                    <button onClick={this.handleSubmit} className="signup-button">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;