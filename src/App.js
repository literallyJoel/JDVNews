import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navibar } from './components/Navibar';
import { Login } from './components/Login/LoginPage';
import { useState, useEffect } from 'react';
function App() {
  const [token, setToken] = useState();

  useEffect(() =>{
    const storedToken = localStorage.getItem("token");
    if(storedToken){
      setToken(storedToken);
    }
  }, []);


  return (
    <>
      <Navibar token={token} setToken={setToken} />
      <Login setToken={setToken}/>
    </>
  );
}

export default App;
