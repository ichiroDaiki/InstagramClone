import React from 'react';
import IgSugerencias from './components/IgSugerencias';
import IgUserNameButton from './components/IgUserNameButton';
import PostComponent from './components/PostComponent';
import Slider from './components/SliderComponent';
import './css/Welcome.css';

const Welcome = () => {


    return ( 

        <div className="content-history">
            <div className="content-history-1">
                
                <div className="ig-history">
                    <Slider/>
                </div>

                <div className="ig-post">
                    <PostComponent/>
                </div>

            </div>
            <div className="content-history-2">
                <div className="ig-username">
                
                       <IgUserNameButton
                            photo="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"
                            username="quieljostick"
                            name="Jostick Omar Quiel"
                            text="Cambiar"
                       />

                </div>

                <div className="sugerencias">

                    <div className="sugerencias-title">
                        <h4>Sugerencias para ti</h4>
                        <h5>Ver todo</h5>
                    </div>

                    <div className="sugerencias-people">

                        <IgSugerencias
                                photo="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                    </div>

                    <div className="by">
                        <h1>Important Information</h1>
                        <p>
                            this is an unofficial web app of Instagram <br/> Develop by <span>Jostick Omar Quiel Espinosa</span>
                        </p>
                    </div>

                </div>

            </div>
        </div>
        

     );
}
 
export default Welcome;