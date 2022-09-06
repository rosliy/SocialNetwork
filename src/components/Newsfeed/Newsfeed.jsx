import React from "react";
import s from './Newsfeed.module.css';
import StoreContext from "../../storeContext";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import AddPostContainer from './AddPost/AddPostContainer';


const Newsfeed = () => {

    return (
        <div>

            <AddPostContainer />

            <MyPostsContainer />

        </div>
    )
}

export default Newsfeed;