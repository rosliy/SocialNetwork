import { createStore, combineReducers  } from "redux";
import newsfeedReducer from "./newsfeedReducer";
import messagesReducer from './messagesReducer';


let reducers = combineReducers ({
    newsfeedPage: newsfeedReducer,
    dialogsPage: messagesReducer,
})

let store = createStore(reducers);

export default store;
