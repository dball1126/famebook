import {combineReducers} from 'redux';
import  entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    search: searchReducer
})

export default rootReducer;