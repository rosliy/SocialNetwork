import React from "react";

import s from './Avatar.module.css';

const Avatar = () => {
    return (
        <div className={s.avatar}>

            <div className={s.ava}>
                <img src="https://i.pinimg.com/564x/7f/ec/54/7fec5405754c876a2ffb082ff31963d7.jpg" alt="" />
            </div>
            <div className={s.about}>
                <div className={s.name}>Sarah Cruiz</div>
                <div className={s.followers}>   1,299
                    followers
                </div>

            </div>
        </div>
    );
}

export default Avatar;