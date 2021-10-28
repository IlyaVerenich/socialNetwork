import s from'./Section.module.css';
import Post from './Posts/post.jsx';
import Profile from './Profile/Profile';
import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/post-reducer";



const Section=(props)=>{

    let postsElements = 
    props.post.map((el)=>{
        return <Post post={el.post}/>
    })

    let linkToItem = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        linkToItem.current.value=' ';
    };

    let onPostChange= () => {
        let text = linkToItem.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return(
        <section>
            <Profile name='Ilya Verenich' date='12 january' city='Minsk'/>
            <div className={s.posts}>
                <p className>My Posts</p>
                <textarea onChange={onPostChange} ref={linkToItem} id={s.news}  placeholder='your news...'/>
                <button onClick={addPost} className={s.btn}>Send</button>
                {postsElements}
            </div>
        </section>
    )
}

export default Section;