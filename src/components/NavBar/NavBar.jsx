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
            <Route path="/section" render={ () => <Section dispatch={props.dispatch} post={props.post}/>}/>
            <Route path="/dialogs" render={ () => <Dialogs dispatch={props.dispatch} message={props.message} dialogNames={props.dialogNames} />}/>
            <Route path="/news" component={News}/>
            {/* <Route path="/Music" component={}/>
            <Route path="/Settings" component={}/> */}
        </nav>
    </BrowserRouter>
    )
}

export default Nav;