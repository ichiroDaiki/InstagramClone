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
                            photo="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
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
                                photo="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
                                username="quieljostick"
                                name="Sugerencia para ti"
                                text="Seguir"
                        />

                        <IgSugerencias
                                photo="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
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