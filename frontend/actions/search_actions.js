import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        data: users
    }
}

export const searchUsers = (query) => {
    return (dispatch) => {
        return SearchApiUtil.userSearch(query).then(payload => {
            return dispatch(receiveUsers(payload))
        })
    }
}