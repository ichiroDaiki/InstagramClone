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


function App() {


  const [token, setToken] = useState(null);
  const [userError, setUserError] = useState(null);

  const getToken = () =>{
    if(token != null){
      localStorage.setItem("token", token);

    }else{
      localStorage.setItem("token", null);
    }
  }


  return (
    <div className="App">

    <Router>
        <Switch>
          <Route exact path="/about">

          </Route>
          <Route exact path="/users">
              <Dashboard/>
          </Route>
          <Route exact path="/">
              {
                localStorage.getItem("token") != null ? <Redirect to="/users"/> : <Login setToken={setToken}
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
