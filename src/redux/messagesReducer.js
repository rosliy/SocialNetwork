const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
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
};




const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.newMessage
            };
        
        case ADD_MESSAGE: 
            let newMessage = {
                message: state.newMessageBody,
                id: '6',
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: '',
            };
        

        default: return state;

    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageBodyActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text });

export default messagesReducer