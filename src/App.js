import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage'
import Projects from './pages/ProjectsPage/ProjectsPage';
import Navigation from './components/Navigation';
import HWSets from './pages/HWSetsPage/HWSetsPage';
import './App.css';
import { useState } from 'react';


function App() {
  const [token, setToken] = useState(false);


  if (!token) {
    return(
      <LoginPage setToken={setToken}/>
    )
  }

  return (
    <div className="App">
      <Navigation/>
      <Router>
            <Redirect to='/projects'/>    
            <Route exact path='/hwsets' component={HWSets}/>
            <Route exact path='/projects' render={() => <Projects username="Rushi"/>} /> 
      </Router>
    </div>
    
  );
}

export default App;
