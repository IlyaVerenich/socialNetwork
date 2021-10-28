import d from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Messages from './Messages/Messages';
import {addMessageActionCreator,onMessageChangeActionCreator} from "../../redux/message-reducer";
import React from 'react';


const Dialogs = (props) => {

    let messageElements=
    props.message.map((el)=>{
        return <Messages message={el.message}/>
    })


    let dialogElements = 
    props.dialogNames.map((el)=>{
        return <DialogItem name={el.name} id={el.id}/>
    });

    let linkToItem = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
        linkToItem.current.value=' ';
    };

    let onMessageChange= () => {
        let text = linkToItem.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return(
        <div>
            <p className={d.name}>Dialogs</p>
            <div className={d.wrapper}>
                <div className={d.container}>
                    <ul className={d.people}>
                        { dialogElements }
                    </ul>
                    <div className={d.dialogs}>
                        { messageElements }
                    </div>
                </div>
                <div className={d.messages}>
                    <textarea onChange={onMessageChange} ref={linkToItem} className={d.message} placeholder={'Your message...'}></textarea>
                    <button onClick={addMessage} className={d.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;