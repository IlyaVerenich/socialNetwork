import {rerender} from './../render.js';

let state={
    dialog: [
        {id:1,name:'Andrew'},
        {id:2,name:'Masha'},
        {id:3,name:'Ilya'},
        {id:4,name:'Anton'},
    ],
    message: [
        {message:'Hi,ILya'},
        {message:'How are u?'},
        {message:'Can we play today?'},
    ],
    post:[
        {id:1,post:'Hi!'},
        {id:2,post:'How are u?'},
    ],
}

export let addpost=(postText)=>{
    let newPost={
        id: 3,
        post: postText,
    }
    state.post.push(newPost);
    rerender(state);
};

export default state