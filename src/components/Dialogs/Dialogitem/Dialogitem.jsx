import d from "./Dialogitem.module.css"
import { NavLink } from 'react-router-dom';

const DialogItem=(props)=>{
    return (
        <li className={d.peopleItem}><NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink></li>
    )
}

export default DialogItem