import d from './Messages.module.css'

const Messages=(props)=>{
    return(
        <div className={d.dialog}>{props.message}</div>
    )
}

export default Messages;