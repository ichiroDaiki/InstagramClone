import React from 'react';
import './css/dashboard.css';
import igIcon2 from './img/ig2.png';
import iconHouse from './img/house.png';
import iconMessenger from './img/messenger.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Welcome from './panel-primary/Welcome';
import Profile from './panel-primary/Profile';


const Dashboard = () => {

    const logout = () =>{
        localStorage.clear();
        window.location.href = "/";
    }



    return ( 

        localStorage.getItem('token') != null ? (
            <Router>
            <div className="dashboard">
            <div className="d-menu">
                
                <a className="d-logo" href="/Dashboard">
                    <img src={igIcon2} className="d-logo-ig"/>
                </a>

                <div className="d-search">
                    <input placeholder="Search" className="d-s-in"/>
                    <i className="fas fa-search ds-icon"></i>
                </div>
                <div className="d-profile">
                    <Link to="/Dashboard"><img src={iconHouse} className="h-icon"/></Link>
                    <Link to="/Dashboard/Chat"><img src={iconMessenger} className="ms-icon"/></Link>
                    <Link to="/Dashboard/Explore"><i className="far fa-compass user-icon"></i></Link>
                    
                            <div class="navbar-item has-dropdown is-hoverable">
                            <i className="far fa-heart user-icon"></i>

                                        <div class="navbar-dropdown is-boxed is-right notifications">
                                            <a class="navbar-item" >
                                                Overview
                                            </a>
                                        </div>
                            </div>

                                                
                            <div class="navbar-item has-dropdown is-hoverable">

                            <img className="icon-p-user" 
                            src="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"/>

                                        <div class="navbar-dropdown is-boxed is-right">
                                            <Link class="navbar-item"  to="/Dashboard/Profile">
                                                <i class="far fa-user-circle"></i> <span className="dr-txt">Perfil</span>
                                            </Link>

                                            <a class="navbar-item" >
                                                <i class="far fa-bookmark"></i> <span className="dr-txt">Guardado</span>
                                            </a>

                                            <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                                                <i class="fas fa-cog"></i> <span className="dr-txt">Configuración</span>
                                            </a>
                                            <hr class="navbar-divider"/>
                                            <a class="navbar-item" onClick={logout}>
                                                Cerrar sesión
                                            </a>
                                        </div>
                            </div>
                          
                 </div>
            </div>

            <div className="user-content">
                <Switch>
                        <Route exact path="/Dashboard">
                            <Welcome/>
                        </Route>
                        <Route exact path="/Dashboard/Chat">
                            <h1>Hola 2</h1>
                        </Route>
                        <Route exact path="/Dashboard/Explore">
                            <h1>Hola 3</h1>
                        </Route>
                        <Route exact path="/Dashboard/Profile">
                            <Profile/>
                        </Route>
                    </Switch>
            </div>
        </div>
        </Router>
        ):(
          <Redirect to="/"/>
        )

     );
}
 
export default Dashboard;