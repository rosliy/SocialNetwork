import React from "react";
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <img src={props.url} alt="" />
            <div className={s.desc}>
                <div className={s.top}>
                    <NavLink className={s.name} to={path}>{props.name}</NavLink>
                    <div className={s.online}>{props.profileOnline}</div>
                </div>
                <div className={s.lastMessage}>{props.lastMessage}</div>
            </div>

        </div>
    );
}


export default DialogItem;