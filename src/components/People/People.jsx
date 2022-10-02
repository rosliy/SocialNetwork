import React from "react";

import s from "./People.module.css";

const People = (props) => {
    return (
        <div>
            {props.people.map((u) => (
                <div className={s.userCard} key={u.id}>
                    <div className={s.info}>
                        <div className={s.ava}>
                            <img src={u.url} alt="avatar" />
                        </div>

                        <div className={s.userInfo}>
                            <div className={s.name}>{u.fullName}</div>
                            <div className={s.profession}>{u.profession}</div>
                            <div className={s.distance}>{u.distance}</div>
                        </div>
                    </div>

                    <div>
                        {u.friend ? (
                            <button
                                onClick={() => {
                                    props.addFriend(u.id);
                                }}
                            >
                                Request sent
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    props.addFriend(u.id);
                                }}
                            >
                                Add Friend
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default People;
