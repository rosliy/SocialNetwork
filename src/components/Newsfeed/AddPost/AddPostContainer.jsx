import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/newsfeedReducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        newsfeedPage: state.newsfeedPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const AddPostContainer = connect (mapStateToProps, mapDispatchToProps) (AddPost);

export default AddPostContainer;