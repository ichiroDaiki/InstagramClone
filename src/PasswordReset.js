import React from 'react';
import './css/PasswordReset.css';
import igIcon from './img/ig.png';

const PasswordReset = () => {
    return ( 

        <div className="pr-panel">
            <div className="menu-rp">
                <img className="igIcon-pr" src={igIcon}/>
            </div>
            <div className="reset-p-panel">
                <div className="panel-trouble-password">

                </div>
            </div>
        </div>

     );
}
 
export default PasswordReset;