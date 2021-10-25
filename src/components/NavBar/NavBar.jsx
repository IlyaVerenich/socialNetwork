import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Aside from "../aside/aside";
import Section from "../Section/Section.jsx";
import Dialogs from "./../Dialogs/Dialogs.jsx";
import News from "./../News/News"
import './NavBar.css';

const Nav=(props)=>{

    
    

    return(
    <BrowserRouter>
        <nav>
            <Aside/>
            <Route path="/section" render={ () => <Section addpost={props.addpost} post={props.post}/>}/>
            <Route path="/dialogs" render={ () => <Dialogs message={props.message} dialog={props.dialog} />}/>
            <Route path="/news" component={News}/>
            {/* <Route path="/Music" component={}/>
            <Route path="/Settings" component={}/> */}
        </nav>
    </BrowserRouter>
    )
}

export default Nav;