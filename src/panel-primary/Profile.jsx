import React from 'react';
import './css/Profile.css';
import HistoryProfile from './components/HistoryProfile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import PostProfileComponent from './components/PostProfileComponent';


const Profile = () => {

    return(
        <div className="componentProfile">
            
            <div className="profileGeneralInformation">
               
               <div className="pgi-photo">
                    <HistoryProfile dstyles="pgi-img-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"/>
                    
                    <div className="pgi-p-info">
                        
                        <div className="pgi-p-name">
                            <h1 className="">quieljostick</h1>
                            <button className="pgi-p-n-b pgi-sp">
                                Editar perfil
                            </button>
                            <i class="fas fa-cog pgi-sp"></i>
                        </div>

                        <div className="pgi-status">
                            <span><strong>6</strong> publicaciones</span>
                            <span><strong>204</strong> seguidores</span>
                            <span><strong>734</strong> seguidos</span>
                        </div>

                        <div className="pgi-bio">
                            <h4>Jostick Quiel</h4>
                            <p>
                                Hoy más que nunca estas consciente de tu poder❤️‍🔥
                            </p>
                        </div>

                    </div>

               </div>

               <div className="tabs-pgi">
                  <Router>
                        <div className="tab-pgi">
                            <ul>
                                <li><Link to="/Dashboard/Profile" className="tab-li-pgi"><i className="fas fa-th"></i> Publicaciones</Link></li>
                                <li><Link to="/Dashboard" className="tab-li-pgi"><i className="fas fa-tv"></i> IGTV</Link></li>
                                <li><Link to="#" className="tab-li-pgi"><i className="far fa-bookmark"></i> Guardado</Link></li>
                                <li><Link to="#" className="tab-li-pgi"><i className="far fa-id-badge"></i> Etiquetas</Link></li>
                            </ul>
                        </div>

                       <div className="content-profile">
                            <Switch>
                                <Route exact path="/Dashboard/Profile">
                                    <PostProfileComponent/>
                                </Route>
                            </Switch>
                       </div>

                   </Router>
               </div>
            
            </div>

        </div>
    );


} 

export default Profile;