import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import './css/App.css';
import Registro from './Registro';
import PasswordReset from './PasswordReset';


function App() {


  const [token, setToken] = useState(null);
  const [userError, setUserError] = useState('');
  const getToken = () =>{
    if(token != null){
      localStorage.setItem("token", token);

    }else{
      localStorage.setItem("token", '');
    }
  }


  return (
    <div className="App">

    <Router>
        <Switch>
          <Route exact path="/PasswordReset">
              <PasswordReset/>
          </Route>
          <Route exact path="/SignUp">
            <Registro />
          </Route>
          <Route exact path="/Dashboard">
              <Dashboard/>
          </Route>
          <Route exact path="/">
              {
                localStorage.getItem("token") != null ? <Redirect to="/Dashboard"/> : <Login setToken={setToken}
                 setUserError={setUserError} 
                userError={userError}
                getToken={getToken}
                />
              }
          </Route>
        </Switch>

    </Router>

    </div>
  );
}

export default App;
