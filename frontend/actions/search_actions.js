import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';

const receiveUsers = (users) => {
    debugger
    return {
        type: RECEIVE_SEARCHED_USERS,
        data: users
    }
}

export const searchUsers = (query) => {
    return (dispatch) => {
        return SearchApiUtil.userSearch(query).then(payload => {
            debugger
            return dispatch(receiveUsers(payload))
        })
    }
}