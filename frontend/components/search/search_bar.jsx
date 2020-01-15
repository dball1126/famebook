import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <div className="search-bar-wrapper">
                    <div className="search-bar-box">
                        <form action="">
                            <input placeholder="Search" className="search-input"/>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default SearchBar;