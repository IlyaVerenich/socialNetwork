import { NavLink } from 'react-router-dom';
import a from './aside.module.css';

const Aside=()=>{
    return(
        <aside>
            <ul>
                <li><NavLink to='/section'>Profile</NavLink></li>
                <li><NavLink to='/dialogs'>Messages</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
                <li><NavLink to='/music'>Music</NavLink></li>
                <li className={a.settings}><NavLink to='/settings'>Settings</NavLink></li>
            </ul>
        </aside>
    )
}



export default Aside;