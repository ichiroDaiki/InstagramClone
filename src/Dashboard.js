import React from 'react';

const Dashboard = () => {

    const logout = () =>{
        localStorage.clear();
        window.location.href = "/";
    }



    return ( 

        <div>
            <button onClick={logout}>Cerrar Session</button>
        </div>

     );
}
 
export default Dashboard;