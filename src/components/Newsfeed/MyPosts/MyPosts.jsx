import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElements = props.postsData.map(el => <Post url={el.url} message={el.message} likeCount={el.likeCount} />)

    return (
        <div className={s.myPosts}>

            {postsElements}

        </div>
    );
}

export default MyPosts;