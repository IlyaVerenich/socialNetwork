import p from "./post.module.css"
import ph from "./logoProf.jpg";

const Post=(props)=>{
    return(
    <div className={p.post}>
        <img src={ph} className={p.photo}></img>
        <div className={p.item}>
            {props.post}
        </div>
    </div>
    )
}

export default Post;