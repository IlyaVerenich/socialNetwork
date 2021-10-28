const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const postReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost={
                id: 3,
                post:state.newPostText,
            }
            state.push(newPost);
            state.newPostText='';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.NewText;
            return state;
        default :
            return state;
    }


}

export const addPostActionCreator= () => {

    return {
        type: ADD_POST,
    }
}

export const onPostChangeActionCreator= (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        NewText: text
    }
}
export default  postReducer;