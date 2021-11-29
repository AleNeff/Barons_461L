import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage'
import Projects from './pages/ProjectsPage/ProjectsPage';
import Navigation from './components/Navigation';
import HWSets from './pages/HWSetsPage/HWSetsPage';
import './App.css';
import { useState } from 'react';
import Cookies from 'js-cookie';
import DBPage from './pages/DBPage/DBPage';


function App() {
  const [token, setToken] = useState(false);


  if (!Cookies.get('user-token')) {
    return(
      <LoginPage setToken={setToken}/>
    )
  }

  return (
    <div className="App">
      <Navigation/>
      <Router>
            <Route exact path='/hwsets' component={HWSets}/>
            <Route exact path='/sources' component={DBPage}/>
            <Route exact path='/projects' render={() => <Projects username="Rushi" user={token}/>} /> 
      </Router>
    </div>
    
  );
}

export default App;
