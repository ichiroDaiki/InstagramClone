import React from 'react'
import Slider from "react-slick";
import HistoryProfile from './HistoryProfile';


const SliderComponent = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0
      };

    return ( 

        <div className="ig-history-info">
          <Slider {...settings}>
          <div className="ig-history-text">
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"/>
            
          </div>
          
          <div className="ig-history-text">
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://i.pinimg.com/736x/d5/16/97/d516977b383db62fa8e7997854d9d62d.jpg"/>
          </div>
          
          <div >
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg"/>  
          </div>

          <div>
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"/>
                   </div>
          <div>
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://i.pinimg.com/originals/00/b2/be/00b2be872b2ac7050c94e14e58609c55.jpg"/>
          </div>
          <div>
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"/>
          </div>



          </Slider>
        </div>

     );
}
 
export default SliderComponent;