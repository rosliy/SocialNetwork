import React from "react";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsData: state.newsfeedPage.postsData
    }
}
let mapDispatchToProps = () => {
    return {

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)




export default MyPostsContainer;