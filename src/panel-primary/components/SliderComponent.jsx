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
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"/>
            
          </div>
          
          <div className="ig-history-text">
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/154439126_548018406156381_5658015622055074598_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=_BX95hsjxvkAX9DVo0P&edm=ABfd0MgAAAAA&ccb=7-4&oh=4a4d93d416b01b2052f2fb44e73e30c7&oe=60A9C933&_nc_sid=7bff83"/>
          </div>
          
          <div >
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/120203070_342612463677191_4968448768922931390_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=LP0IkMzhdP4AX-XYdXX&edm=ABfd0MgAAAAA&ccb=7-4&oh=ba4ddd881f7c816243244c6c79456c45&oe=60A8B457&_nc_sid=7bff83"/>  
          </div>

          <div>
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/159455470_493739745115697_8836920868558474860_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=tT5kvugeMisAX9FOvZF&edm=ABfd0MgAAAAA&ccb=7-4&oh=06bb9cd39d40f4a9fbf28e1445e0aeab&oe=60A7CFD4&_nc_sid=7bff83"/>
                   </div>
          <div>
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/123605827_2793573444218816_3517239867811217163_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=DRv7PALey4AAX8hNUPu&edm=ABfd0MgAAAAA&ccb=7-4&oh=b9986fd97bb5418b22a9126f5e022371&oe=60A86780&_nc_sid=7bff83"/>
          </div>
          <div>
            <HistoryProfile dstyles="ig-history-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/47583400_308652296442406_1388205207560650752_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=SpzWWMIga2MAX9CKAg8&edm=ABfd0MgAAAAA&ccb=7-4&oh=85b277d0084e96e1d09948f683a5e9a7&oe=60A8B3D9&_nc_sid=7bff83"/>
          </div>



          </Slider>
        </div>

     );
}
 
export default SliderComponent;