import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.postImage}>
                <img className={s.img} src={props.url}></img>
            </div>
            <div className={s.postItem}>
                <div className={s.forava}>
                    <div className={s.ava}></div>
                </div>
                <div className={s.body}>
                    <div className={s.desc}>

                        <div className={s.col}>
                            <div className={s.name}>Alexis Clark</div>
                            <div className={s.postInfo}>Published a photo about 3 mins ago</div>
                        </div>

                        <div className={s.col}>
                            <div>like {props.likeCount}</div>
                        </div>
                    </div>



                    <div className={s.item}>{props.message}</div>

                </div>
            </div>


        </div>

    );
}

export default Post;