import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navibar } from './components/Navibar/Navibar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Login } from './components/Login/LoginPage';
import { useState, useEffect } from 'react';
import { Profile } from './components/Profile/Profile';

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);

    }
  }, []);


  return (
    <>
      <Navibar token={token} setToken={setToken} />

      <Router>  
        <Switch>
          <Route path="/login">
            <Login token={token} setToken={setToken}/>
          </Route>  

          <Route path="/profile" setToken={setToken}>
            <Profile/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
