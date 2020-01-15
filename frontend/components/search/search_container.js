import { connect } from "react-redux"
import SearchBar from './search_bar';
import {searchUsers} from '../../actions/search_actions';

const msp = (props) => {
    let users = ""
    // Do we have any searched items ? Is the Object empty
    if (!(Object.entries(props.search).length === 0 && props.search.constructor === Object)) users = Object.values(props.search)
    return {
        users: users
    }
}

const mdp = (dispatch) => {
    return {
        searchUsers: users => dispatch(searchUsers(users))
    }
}

export default connect(msp, mdp)(SearchBar);