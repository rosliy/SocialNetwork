import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import AddPost from "./AddPost/AddPost";

import s from './Newsfeed.module.css';
import StoreContext from "../../storeContext";


const Newsfeed = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                return (
                    <div>

                        <AddPost
                            dispatch={store.dispatch}
                            newPostText={store.getState().newsfeedPage.newPostText} />

                        <MyPosts postsData={store.getState().newsfeedPage.postsData} />

                    </div>
                )
            }

            }


        </StoreContext.Consumer >

    );
}

export default Newsfeed;