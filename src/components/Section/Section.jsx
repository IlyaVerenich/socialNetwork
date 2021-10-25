import s from'./Section.module.css';
import Post from './Posts/post.jsx';
import Profile from './Profile/Profile';
import React from 'react';

const Section=(props)=>{

    let postsElements = 
    props.post.map((el)=>{
        return <Post post={el.post}/>
    })

    let linkToItem = React.createRef();

    let addPost = () => {
        let text = linkToItem.current.value;
        props.addpost(text);
        linkToItem.current.value=' ';
    };



    return(
        <section>
            <Profile name='Ilya Verenich' date='12 january' city='Minsk'/>
            <div className={s.posts}>
                <p className>My Posts</p>
                <textarea ref={linkToItem} id={s.news}  placeholder='your news...'></textarea>
                <button onClick={addPost} className={s.btn}>Send</button>
                {postsElements}
            </div>
        </section>
    )
}

export default Section;