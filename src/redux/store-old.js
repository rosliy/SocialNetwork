import newsfeedReducer from './newsfeedReducer';
import messagesReducer from './messagesReducer';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_MESSAGE = 'ADD-MESSAGE';



let store = {

    _state: {
        newsfeedPage: {
            postsData:
                [
                    { url: 'https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg', message: 'Hi, how are you?', likeCount: 5 },
                    { url: 'https://images.unsplash.com/photo-1531879251-3da65dd78c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVtcHxlbnwwfHwwfHw%3D&w=1000&q=80', message: "It's my first post", likeCount: 16 },
                ],
            newPostText: 'it-kamasutra.js',
        },

        dialogsPage: {
            dialogsData:
                [
                    {
                        id: "1",
                        name: "Linda Lohan",
                        url: 'https://64.media.tumblr.com/737d285ab72cd65b0b41ba2a9dfad91e/b5bb610f20580de5-86/s540x810/f73fab4cf43b4899789810ef3cce7c8d0ebea977.jpg',
                        profileOnline: 'a min ago',
                        lastMessage: 'Hi there, how are you',
                    },
                    {
                        id: "2",
                        name: "Julia Cox",
                        url: 'https://i.pinimg.com/564x/52/b8/c7/52b8c71b59ef7515c188da909414dcd2.jpg',
                        profileOnline: '2 days ago',
                        lastMessage: 'see you soon',
                    },
                    {
                        id: "3",
                        name: "Sophia Lee",
                        url: 'https://i.pinimg.com/564x/7a/45/58/7a455832ee1f36e06272c5c0e9283319.jpg',
                        profileOnline: 'an hour ago',
                        lastMessage: 'Okay fine. Thank you',
                    },
                    {
                        id: "4",
                        name: "John Doe",
                        url: 'https://tengyart.ru/wp-content/uploads/2020/12/%D0%9C%D1%83%D0%B6%D1%87%D0%BA%D0%BE%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%81%D1%82%D0%B0%D0%B3%D1%80%D0%B0%D0%BC-%D0%B2-%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D0%B8-Artbreeder.jpg',
                        profileOnline: 'online',
                        lastMessage: 'I gotta go',
                    },
                    {
                        id: "5",
                        name: "Anna Young",
                        url: 'https://img.artpal.com/468402/10-21-2-4-22-20-50m.jpg',
                        profileOnline: '13 hour ago',
                        lastMessage: 'Hey anybody there',
                    },
                ],
            messagesData:
                [
                    { message: "Hi", id: "1" },
                    { message: "Hellow", id: "2" },
                    { message: "How are you?", id: "3" },
                ],
            newMessageBody: '',
        },

    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State was changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        newsfeedReducer(this._state.newsfeedPage, action);
        messagesReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}




window.store = store;

export default store