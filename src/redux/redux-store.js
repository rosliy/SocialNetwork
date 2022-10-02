import { createStore, combineReducers  } from "redux";
import newsfeedReducer from "./newsfeedReducer";
import messagesReducer from './messagesReducer';
import peopleReducer from './peopleReducer';


let reducers = combineReducers ({
    newsfeedPage: newsfeedReducer,
    dialogsPage: messagesReducer,
    peoplePage: peopleReducer,
})

let store = createStore(reducers);

export default store;
