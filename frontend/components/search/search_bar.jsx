import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: "", results: ""}
    }

    handleSubmit(e){
        e.preventDefault(); // Used to prevent the page from refreshing
        this.props.searchUsers(this.state)
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value}, () => this.searchData())
        }
    }

    searchData(){
        let allData = "";
        if (this.state.query.length >= 1) {
            allData = this.props.searchUsers(this.state).then((data) => {
                let searchUsers;

                if (!(Object.entries(data.data).length === 0 && data.data.constructor === Object)) {
                    searchUsers = Object.values(data.data.users)
                } else {
                    searchUsers = "";
                }
                this.setState({results: searchUsers})
                return searchUsers
            })
            return allData;
        } else {

            this.setState({results: ""})
        }
    }

    searchResults(){
        if (this.state.results.length < 1) {
            return ""
        } else {
            let users = this.state.results;
            const allUsers = users.map((user, i) => {
                let username = user.username.split("").map((char, i) => {
                    if (this.state.query.includes(char)) {
                        return (
                            <b key={i} className="liveLetters">{char}</b>
                            )
                        } else { return char}
                })

                return (
                    <div key={i}>
                        <h1>{username}</h1>
                    </div>
                )
            })
            return allUsers;
        }
    }

    render(){
        return (
            <>
                <div className="search-bar-wrapper">
                    <div className="search-bar-box">
                        <form action="" onSubmit={this.handleSubmit}>
                            <input placeholder="Search" 
                                   className="search-input"
                                   onChange={this.update('query')}
                                   type="text"/>
                        </form>

                        <div className="search-data">

                            {this.searchResults()}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(SearchBar);