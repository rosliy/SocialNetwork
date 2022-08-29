import React from "react";

import s from './FollowItem.module.css';


const FollowItem = () => {
    return (
        <div className={s.followItem}>
            <div className={s.ava}></div>
            <div className={s.desc}>
                <div className={s.name}>Diana Amber</div>
                <a className={s.addFriend}>Add Friend</a>
            </div>
        </div>
    );
}

export default FollowItem;