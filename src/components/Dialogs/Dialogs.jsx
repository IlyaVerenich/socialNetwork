import d from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Messages from './Messages/Messages';


const Dialogs =(props)=>{

    let messageElements=
    props.message.map((el)=>{
        return <Messages message={el.message}/>
    })


    let dialogElements = 
    props.dialog.map((el)=>{
        return <DialogItem name={el.name} id={el.id}/>
    });

    return(
        <div>
            <p className={d.name}>Dialogs</p>
            <div className={d.wrapper}>
                <ul className={d.people}>
                    { dialogElements }
                </ul>
                <div className={d.dialogs}>
                    { messageElements }
                </div>
            </div>
        </div>
    )
}

export default Dialogs;