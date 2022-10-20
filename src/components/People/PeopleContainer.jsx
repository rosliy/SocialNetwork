import React from "react";
import axios from "axios";
import People from "./People";
import { connect } from "react-redux";
import {
    addFriendAC,
    setCurrentPageAC,
    setPeopleAC,
    setTotalPeopleCountAC,
} from "./../../redux/peopleReducer";

class PeopleContainer extends React.Component {
    componentDidMount() {
        axios
            .get(
                `http://localhost:3001/people?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`
            )
            .then((response) => {
                console.log(response.headers["x-total-count"]);
                this.props.setPeople(response.data);
                this.props.setTotalPeopleCount(
                    +response.headers["x-total-count"]
                );
                debugger;
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `http://localhost:3001/people?_page=${pageNumber}&_limit=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setPeople(response.data);
            });
    };

    render() {
        return (
            <People
                totalPeopleCount={this.props.totalPeopleCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                addFriend={this.props.addFriend}
                people={this.props.people}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        people: state.peoplePage.people,
        pageSize: state.peoplePage.pageSize,
        totalPeopleCount: state.peoplePage.totalPeopleCount,
        currentPage: state.peoplePage.currentPage,
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalPeopleCount: (totalPeopleCount) => {
            dispatch(setTotalPeopleCountAC(totalPeopleCount));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
