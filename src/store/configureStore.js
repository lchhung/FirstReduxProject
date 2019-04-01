import {createStore, combineReducers} from 'redux';

import reducer from './reducers/places';

const rootReducer = combineReducers({ //<== this is to combined multi reducers
    places:reducer
});
const configureStore =()=>{
    return createStore (rootReducer);
};
export default configureStore;