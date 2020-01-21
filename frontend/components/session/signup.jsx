import React from 'react';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value })
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
            .then( () => this.props.history.push('/'))
    }

    render(){
        return (
            <div className="session-form">
                <div className="signup-header1">Create a New Account</div>
                <div className="signup-header2">It’s quick and easy.</div>
                <form className="signup-form">
                    <label>Username:
                        <input type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}/>
                    </label>
                    <label>Email:
                        <input type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password:
                        <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}/>
                    </label>

                    <label>Birthday</label>
                    <fieldset className="date">
                    <legend>Start Date </legend>
                    <label htmlFor="month_start">Month</label>
                    <select id="month_start"
                            name="month_start" >

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
                    <label for="day_start">Day</label>
        <select id="day_start"
                name="day_start" >
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
                name="year_start" >
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
        </select>
        <span class="inst">(Month-Day-Year)</span>
        </fieldset>

        
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;