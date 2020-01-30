import {combineReducers} from 'redux';
import  entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';
import {sessionErrorsReducer} from './session_errors_reducer';
const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    search: searchReducer,
    sessionErrors: sessionErrorsReducer
})

export default rootReducer;