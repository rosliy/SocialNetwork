import React from "react";
import { updateNewMessageBodyActionCreator, addMessageActionCreator } from '../../redux/messagesReducer';
import StoreContext from "../../storeContext";
import Messages from './Messages';

const MessagesContainer = () => {


    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage;


            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            };

            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageBodyActionCreator(text));
            };

            return <Messages dialogsPage={state} updateNewMessageBody={onMessageChange} addNewMessage={addMessage} />
        }
        }

    </StoreContext.Consumer>
}

export default MessagesContainer;