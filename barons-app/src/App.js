import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage'
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
            <Route path='/' component={Login} />
      </Router>
    </div>
    
  );
}

export default App;
