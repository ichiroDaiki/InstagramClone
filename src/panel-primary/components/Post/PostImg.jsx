import React from 'react'
import './css/PostHeader.css';

const PostImg = (props) => {
    return ( 


        <img className={props.pstyles}
        src={props.urlimg}/>


     );
}
 
export default PostImg;