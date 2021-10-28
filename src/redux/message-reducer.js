const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-MESSAGE";

const messageReducer = (state,action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage={
            id: 4,
            message:state.newMessageText,
        }
            state.push(newMessage);
            state.newMessageText='';
            return state
        case UPDATE_NEW_MESSAGE :
            state.newMessageText=action.NewText;
            return state;
        default :
            return state;
    }
}
export const addMessageActionCreator= () => {

    return {
        type: ADD_MESSAGE,
    }
}

export const onMessageChangeActionCreator= (text) => {

    return {
        type: UPDATE_NEW_MESSAGE,
        NewText: text
    }
}


export default messageReducer;