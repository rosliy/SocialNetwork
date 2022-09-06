import React from "react";
import { updateNewMessageBodyActionCreator, addMessageActionCreator } from '../../redux/messagesReducer';
import Messages from './Messages';
import { connect } from "react-redux"


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text));
        },
        addNewMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;