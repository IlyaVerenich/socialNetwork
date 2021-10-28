import './App.css';

import Header from './components/Header/Header.jsx'
import Nav from './components/NavBar/NavBar.jsx';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav dispatch={props.dispatch}
           dialogNames={props.appState.dialogNames}
           message={props.appState.message}
           post={props.appState.post}
      />
    </div>
  );
}




export default App;
