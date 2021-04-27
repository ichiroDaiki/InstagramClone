import React, {Fragment} from 'react'

const IgUserNameButton = (props) => {
    return ( 

        <Fragment>
               <img className="ig-username-photo" 
                            src={props.photo}/>

                    <div className="ig-user-txt">
                        <h1>
                            {props.username}
                        </h1>
                        <h2>
                            {props.name}
                        </h2> 
                    </div>

                <div className="us-text">
                    <span>{props.text}</span>
                </div>   
        </Fragment>

     );
}
 
export default IgUserNameButton;