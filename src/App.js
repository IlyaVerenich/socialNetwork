import './App.css';

import Header from './components/Header/Header.jsx'
import Nav from './components/NavBar/NavBar.jsx';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav addpost={props.addpost} dialog={props.appState.dialog} message={props.appState.message} post={props.appState.post}/>
    </div>
  );
}




export default App;
