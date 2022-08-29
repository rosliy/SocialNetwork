import React from "react";

import s from './Follow.module.css';
import FollowItem from './FollowItem/FollowItem';


const Follow = () => {
    return (
        <div className={s.follow}>
            <div className={s.title}>Who to Follow</div>
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            

        </div>
    );
}

export default Follow;