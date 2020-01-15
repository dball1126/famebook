import { connect } from "react-redux"
import SearchBar from './search_bar';
import {searchUsers} from '../../actions/search_actions';

const msp = (props) => {
        debugger
    return {

    }
}

const mdp = (dispatch) => {
    return {
        searchUsers: users => dispatch(searchUsers(users))
    }
}

export default connect(msp, mdp)(SearchBar);