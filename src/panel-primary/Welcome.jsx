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
                            photo="https://instagram.fdav1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/164034721_1112178339297092_927245359982130983_n.jpg?tp=1&_nc_ht=instagram.fdav1-1.fna.fbcdn.net&_nc_ohc=WicjfEN0nJUAX8pIbGm&ccb=7-4&oh=a1b0c8be170bc7d5a6720dfdfbe494db&oe=60837F05&_nc_sid=01e9e1"
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
                                photo="https://instagram.fdav1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/164034721_1112178339297092_927245359982130983_n.jpg?tp=1&_nc_ht=instagram.fdav1-1.fna.fbcdn.net&_nc_ohc=WicjfEN0nJUAX8pIbGm&ccb=7-4&oh=a1b0c8be170bc7d5a6720dfdfbe494db&oe=60837F05&_nc_sid=01e9e1"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://instagram.fdav1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/164034721_1112178339297092_927245359982130983_n.jpg?tp=1&_nc_ht=instagram.fdav1-1.fna.fbcdn.net&_nc_ohc=WicjfEN0nJUAX8pIbGm&ccb=7-4&oh=a1b0c8be170bc7d5a6720dfdfbe494db&oe=60837F05&_nc_sid=01e9e1"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://instagram.fdav1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/164034721_1112178339297092_927245359982130983_n.jpg?tp=1&_nc_ht=instagram.fdav1-1.fna.fbcdn.net&_nc_ohc=WicjfEN0nJUAX8pIbGm&ccb=7-4&oh=a1b0c8be170bc7d5a6720dfdfbe494db&oe=60837F05&_nc_sid=01e9e1"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://instagram.fdav1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/164034721_1112178339297092_927245359982130983_n.jpg?tp=1&_nc_ht=instagram.fdav1-1.fna.fbcdn.net&_nc_ohc=WicjfEN0nJUAX8pIbGm&ccb=7-4&oh=a1b0c8be170bc7d5a6720dfdfbe494db&oe=60837F05&_nc_sid=01e9e1"
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