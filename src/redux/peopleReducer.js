const ADD_FRIEND = "ADD_FRIEND";
const SET_PEOPLE = "SET_PEOPLE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PEOPLE_COUNT = "SET_TOTAL_PEOPLE_COUNT";

let initialState = {
    people: [
        // {
        //     id: 1,
        //     friend: false,
        //     fullName: "Sophia Page",
        //     profession: "Software Engineer",
        //     distance: "500m away",
        //     url: "https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-029.jpg",
        // },
        // {
        //     id: 2,
        //     friend: false,
        //     fullName: "Emma Johnson",
        //     profession: "Model at Fashion",
        //     distance: "800m away",
        //     url: "https://flomaster.club/uploads/posts/2021-12/thumbs/1640846784_85-flomaster-club-p-narisovannie-devushki-v-stile-krasivie-ris-88.jpg",
        // },
        // {
        //     id: 3,
        //     friend: false,
        //     fullName: "Nora Wilson",
        //     profession: "Writer at Newspaper",
        //     distance: "2.5km away",
        //     url: "https://kartinkin.net/uploads/posts/2022-03/1646125923_45-kartinkin-net-p-kartinki-na-avu-dlya-devushek-narisovannie-49.jpg",
        // },
        // {
        //     id: 4,
        //     friend: false,
        //     fullName: "Diana Amber",
        //     profession: "Student",
        //     distance: "700m away",
        //     url: "https://krot.info/uploads/posts/2021-03/1614585100_42-p-bryunetka-na-avu-art-kartinki-48.jpg",
        // },
        // {
        //     id: 5,
        //     friend: false,
        //     fullName: "Jonathon Thompson",
        //     profession: "Fashion Designer",
        //     distance: "2km away",
        //     url: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
        // },
        // {
        //     id: 6,
        //     friend: false,
        //     fullName: "Olivia Steward",
        //     profession: "Creative Director",
        //     distance: "2km away",
        //     url: "https://wonder-day.com/wp-content/uploads/2020/03/unnamed.jpg",
        // },
    ],
    pageSize: 2,
    totalPeopleCount: 0,
    currentPage: 1,
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                people: state.people.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, friend: true };
                    }
                    return user;
                }),
            };
        case SET_PEOPLE:
            return {
                ...state,
                people: action.people,
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };

        case SET_TOTAL_PEOPLE_COUNT:
            return {
                ...state,
                totalPeopleCount: action.totalPeopleCount,
            };

        default:
            return state;
    }
};

export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId });
export const setPeopleAC = (people) => ({ type: SET_PEOPLE, people });
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setTotalPeopleCountAC = (totalPeopleCount) => ({
    type: SET_TOTAL_PEOPLE_COUNT,
    totalPeopleCount,
});

export default peopleReducer;
