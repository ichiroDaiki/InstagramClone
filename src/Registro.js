import React, {useState, useEffect} from 'react';
import igIcon from './img/ig.png';
import './css/reg.css';
import { useForm } from "react-hook-form";
import 'bulma/css/bulma.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth, db} from './firebase';


const Registro = (props) => {

    const [users, setUser] = useState({
        usuarios: null
    });

    const [UsernameExist, setUsernameExist] = useState("");

    const [errorUserExist, setErrorUserExist] = useState(false);

    const { register, handleSubmit, errors } = useForm();




    const verificarUsername = () =>{

        db.collection("usuarios").get()
        .then((querySnapshot) => {
            const usuarios = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                usuarios.push(data);
            });
            setUser({usuarios : usuarios});
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
        

    }

    const enviarDatos = data => {

        let verify = false;

        for (var i = 0; i < users.usuarios.length; i++) {
            
            let nameuser = users.usuarios[i].username;

            if(nameuser == UsernameExist){
                console.log("ya existe");
                setErrorUserExist(true)
                verify = true;
            }

        }

        if(verify){
            notifyUserExist()
        }else{

            auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(function(){


            db.collection("usuarios").add({
                fullname: data.name,
                username: data.username,
                password: data.password,
                email: data.email
            })
            .then((docRef) => {
                setErrorUserExist(false)
                return notify();
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                return console.log("Error adding document: ", error);
            });
    

            }).catch(function(error){
                
                console.log(error);
                notifyEmailExist()

                if(verify){
                    setErrorUserExist(true)
                    notifyUserExist()
                }
            })

        }
    
    }

    const notify = () => toast.success("Wow so easy , now you can log in!");
    const notifyEmailExist = () => toast.error("The email address is already in use by another account!");
    const notifyUserExist = () => toast.error("The username is already in use by another account!");


    useEffect(() => {
        verificarUsername()
    }, [])

    return ( 
        

        <div className="reg">
            <form className="reg-form" onSubmit={handleSubmit(enviarDatos)}>
                <div className="ph-reg-form">
                    <img src={igIcon} className="ph-img"/>
                    
                    <h1 className="ph-reg-title">Sign up to see photos and 
                        videos <br/> from your friends.</h1>
                    
                        <div className="facebook-reg">
                            <i className="fab fa-facebook-square facebookIcon-reg"></i> 
                            <p className="facebook-reg-p" >Log in with Facebook</p>
                        </div>
                </div>

                <div className="or-reg">
                  <div className="ray1-reg"></div>
                  <div className="ro-reg">OR</div>
                  <div className="ray2-reg"></div>
                </div>

                <div className="reg-form-form">
                    <input className="reg-input" name="email" 
                    placeholder="Mobile Number or Email" ref={register({
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                    })}/>

                    {errors.email && errors.email.type === "required" &&  <span className="is-error"><i className="fas fa-times"></i> This is required</span>}
                    {errors.email && errors.email.type === "pattern" &&  <span className="is-error"><i className="fas fa-times"></i> Email bad format</span>}
                    
                    <input className="reg-input" name="name" 
                    placeholder="Full Name" ref={register({
                        required: true,
                        minLength: 2
                    })}/>

                    {errors.name && errors.name.type === "required" &&  <span className="is-error"><i className="fas fa-times"></i> This is required</span>}
                    {errors.name && errors.name.type === "minLength" &&  <span className="is-error"><i className="fas fa-times"></i> Min length 2 word</span>}

                    
                    <input className="reg-input" name="username" 
                    placeholder="Username" onChange={(ev)=>setUsernameExist(ev.target.value)}
                    ref={register({
                        required: true,
                        minLength: 2,
                    })}/>

                    {errorUserExist === true ? <span className="is-error"><i className="fas fa-times"></i> This username is already taken </span> : <span></span>}
                    {errors.username && errors.username.type === "required" &&  <span className="is-error"><i className="fas fa-times"></i> This is required</span>}
                    {errors.username && errors.username.type === "minLength" &&  <span className="is-error"><i className="fas fa-times"></i> Min length 2 words</span>}



                    <input className="reg-input" name="password"
                     type="password" placeholder="Password" 
                     ref={register({
                         required: true,
                         minLength: 6
                     })}/>

                    {errors.password && errors.password.type === "required" &&  <span className="is-error"><i className="fas fa-times"></i> This is required</span>}
                    {errors.password && errors.password.type === "minLength" &&  <span className="is-error"><i className="fas fa-times"></i> Min length 6</span>}


                    
                    <button className="btn-reg-2" type="submit">Sign up</button> 


                </div>

               

            </form>

            <div className="log-form">
                <p className="login-btn-reg">Have an account? <a href="/">Log in</a></p>
            </div>

            <ToastContainer 
                autoClose={10000}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeOnClick
            />

        </div>

     );
}
 
export default Registro;