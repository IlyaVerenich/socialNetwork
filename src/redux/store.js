import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";


let store={
    _state: {
        dialogNames: [
            {id:1, name:'Andrew'},
            {id:2, name:'Masha'},
            {id:3, name:'Ilya'},
            {id:4, name:'Anton'},
        ],
        message: [
            {id:1, message:'Hi,ILya'},
            {id:2, message:'How are u?'},
            {id:3, message:'Can we play today?'},
        ],
        post:[
            {id:1, post:'Hi!'},
            {id:2, post:'How are u?'},
        ],
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    subscribe (observer)  {
        this._callSubscriber=observer;
    },
    dispatch (action) {
        this._state.post=postReducer(this._state.post, action);
        this._state.message=messageReducer(this._state.message,action);
        this._callSubscriber(this._state);
    }
}


export default store


//store - ООП