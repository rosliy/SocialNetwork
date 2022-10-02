import React from "react";
import People from "./People";
import { connect } from "react-redux";
import { addFriendAC, setPeopleAC } from "./../../redux/peopleReducer";

let mapStateToProps = (state) => {
    return {
        people: state.peoplePage.people,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
            dispatch(addFriendAC(userId));
        },
        setPeople: (people) => {
            dispatch(setPeopleAC(people));
        },
    };
};

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;
