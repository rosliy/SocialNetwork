import React from "react";
import s from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <div className={s.message} >
            {/* <img src={props.url} alt="" /> */}
            <div className={s.messageItem}>{props.message}</div>
        </div>
    )
}

export default MessageItem;