import React from "react";
import s from './AddPost.module.css';


// const AddPost = (props) => {

//     let newPostElement = React.createRef();

//     let addPost = () => {
//         let text = newPostElement.current.value;
//         props.dispatch(addPostActionCreator());
//     }

//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         props.dispatch(updateNewPostTextActionCreator(text));
//     }

//     return (
//         <div className={s.wrapper}>

//             <div className={s.ava}>

//                 <img src="https://i.pinimg.com/564x/7f/ec/54/7fec5405754c876a2ffb082ff31963d7.jpg" alt="" />

//             </div>

//             {/* <form action="" method="" encType="multipart/form-data"> */}

//                 <textarea placeholder="Write what you wish" ref={newPostElement} onChange={onPostChange} value={props.newPostText} cols='30'/>

//                 <div className={s.add}>

//                     <input type='file' name='addImg' id="addImage" accept='image/*' />
//                     <label for="addImage">
//                         <img src="https://cdn-icons-png.flaticon.com/512/3159/3159338.png" alt="" />
//                     </label>
//                     <input type='file' id="addVideo" name='addVideo' accept='video/*' />
//                     <label for="addVideo">
//                         <img src="https://cdn-icons-png.flaticon.com/512/3159/3159331.png" alt="" />
//                     </label>

//                     <a href="#">
//                         <img src="https://cdn-icons-png.flaticon.com/512/5055/5055649.png" alt="" />
//                     </a>
//                     <button className={s.btn} type="submit" onClick={addPost}>Publish</button>
//                 </div>
                

//             {/* </form> */}

//         </div>

//     );
// }

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addNewPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.wrapper}>

            <div className={s.ava}>

                <img src="https://i.pinimg.com/564x/7f/ec/54/7fec5405754c876a2ffb082ff31963d7.jpg" alt="" />

            </div>

            {/* <form action="" method="" encType="multipart/form-data"> */}

                <textarea placeholder="Write what you wish" ref={newPostElement} onChange={onPostChange} value={props.newsfeedPage.newPostText} cols='30'/>

                <div className={s.add}>

                    <input type='file' name='addImg' id="addImage" accept='image/*' />
                    <label for="addImage">
                        <img src="https://cdn-icons-png.flaticon.com/512/3159/3159338.png" alt="" />
                    </label>
                    <input type='file' id="addVideo" name='addVideo' accept='video/*' />
                    <label for="addVideo">
                        <img src="https://cdn-icons-png.flaticon.com/512/3159/3159331.png" alt="" />
                    </label>

                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/5055/5055649.png" alt="" />
                    </a>
                    <button className={s.btn} type="submit" onClick={addPost}>Publish</button>
                </div>
                

            {/* </form> */}

        </div>

    );
}

export default AddPost;