import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import Projects from "./pages/ProjectsPage/ProjectsPage";
import Navigation from "./components/Navigation";
import "./App.css";
import DBPage from "./pages/DatabasePage/DBPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <DBPage />
      {/* <Router>
        
        <Route exact path='/projects' render={() => <Projects username="Rushi"/>} />
            <Route exact path='/' component={Login} />
      </Router> */}
    </div>
  );
}

export default App;
