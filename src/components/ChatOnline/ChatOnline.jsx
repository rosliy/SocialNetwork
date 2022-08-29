import React from "react";
import { Route } from "react-router-dom";

import s from './ChatOnline.module.css';


const FriendItem = (props) => {
    return (
        <div>
            <img src={props.url} alt="" />
        </div>
    )
}




const ChatOnline = (props) => {



    return (
        <div className={s.chatOnline}>
            <button className={s.btn}>Chat online</button>
            <div className={s.friends}>
                <div className={s.friend}></div>
                <div className={s.friend}></div>
                <div className={s.friend}></div>
                <div className={s.friend}></div>
                <div className={s.friend}></div>
                <div className={s.friend}></div>
                <div className={s.friend}></div>
                <div className={s.friend}></div>
                <div className={s.friend}></div>


            </div>


        </div>
    );
}

export default ChatOnline;