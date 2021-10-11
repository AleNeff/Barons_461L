import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
