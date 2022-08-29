const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData:
        [
            { url: 'https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg', message: 'Hi, how are you?', likeCount: 5 },
            { url: 'https://images.unsplash.com/photo-1531879251-3da65dd78c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVtcHxlbnwwfHwwfHw%3D&w=1000&q=80', message: "It's my first post", likeCount: 16 },
        ],
    newPostText: '',
}


const newsfeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                url: 'https://fs.tonkosti.ru/12/3x/123xdouxq300o0gww0cs0kgow.jpg',
                message: state.newPostText,
                likeCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });



export default newsfeedReducer