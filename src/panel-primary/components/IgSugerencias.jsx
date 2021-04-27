import React, {Fragment} from 'react'

const IgSugerencias = (props) => {
    return ( 


        <Fragment>
                
                <div className="ig-s-info">

                    <img className="ig-s-photo" 
                        src={props.photo}/>

                    <div className='ig-s-data'>
                        <h1>
                            {props.username}
                        </h1>
                        <h2>
                            {props.name}
                        </h2> 
                    </div>
                
                    <div className="ig-s-text">
                        <span>{props.text}</span>
                    </div>
                        
                </div>

        </Fragment>

     );
}
 
export default IgSugerencias;