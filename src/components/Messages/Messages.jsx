import React from "react";
import s from './Messages.module.css'

import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';


const Messages = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addNewMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageBody(text);
    };

    let dialogsElements = props.dialogsPage.dialogsData.map(el => <DialogItem id={el.id} name={el.name} url={el.url} profileOnline={el.profileOnline} lastMessage={el.lastMessage} />)

    let messagesElements = props.dialogsPage.messagesData.map(el => <MessageItem message={el.message} id={el.id} />)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageBody} />

                <button onClick={addMessage}>Send</button>
            </div>


        </div >
    );
}

export default Messages;