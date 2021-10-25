import h from './Header.module.css';
import hPh from './logo192.png';


const Header=()=>{
    return(
        <header className={h.header}>
            <img className={h.logo} src={hPh}></img>
        </header>
    )
}

export default Header