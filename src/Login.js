import React, { Fragment, useState } from 'react';
  import facebookIcon from './img/facebook.png';
  import igIcon from './img/ig.png';
  import getIconAppStore from './img/app-store.png';
  import getIconGoogleStore from './img/google_badge.png';
  import phones from './img/front.png';
  import { auth } from './firebase';
  import firebase from 'firebase';
  import ReactLoading from 'react-loading';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errores, setErrores] = useState('');


    const submit = () =>{
        auth.signInWithEmailAndPassword(email, 
            password).then(user=>{
                console.log(user)
                setUser("log in")
            }).catch(err=>{
                console.log("errores: " , err)
                setErrores(err.code);
            })

               if(user === "log in"){

                setLoading(true)
                  setTimeout(() => {
                      console.log()
                      setUser(user);
                      props.setToken();
                      props.getToken();
                      window.location.href = "/Dashboard";
                      setLoading(false); 
                    }, 4000);


               } else{
                  setUser(null)
               }

            
    }

    const submitFacebook = () =>{
        
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result =>{
            props.setToken(result.credential['accessToken']);
            props.getToken();
            window.location.href = "/Dashboard";

        })
        .catch(error =>{
            setErrores(error.code);
            console.log(error);
        })

    }

    return ( 

        <Fragment>
            <div className="lform">
            <img src={phones}/>
        </div>

        <div className="rform">

            <div className="signIn">
              <div className="title-form">
                  <img src={igIcon}/>
              </div>
              
              <div className="form-input">
                  <input className="input-log" placeholder="Teléfono, usuario o correo electrónico"
                   type="text"
                   onChange={(ev) => setEmail(ev.target.value)}/>
              </div>

              <div className="form-input">
                 <input className="input-log" placeholder="Contraseña" type="password"
                  onChange={(ev) => setPassword(ev.target.value)}
                 />
              </div>

              <div className="form-input">
                  {
                    password.length >= 6 ? (
                        <button className="form-input-btn-log sig2" onClick={submit}>
                          {
                              loading ? <ReactLoading type="spokes" color="#fff" height={16} width={16} />
                              : <p>Iniciar sesión</p>
                          }
                        </button>
                      ):(
                       <button className="form-input-btn-log sig1">Iniciar sesión</button>
                    )
                  }
              </div>

              <div className="or">
                  <div className="ray1"></div>
                  <div className="ro">O</div>
                  <div className="ray2"></div>
              </div>

              <div className="form-input facebook-login">
                <img className="facebookIcon" src={facebookIcon}/> 
                <p className="facebook-login-p" onClick={submitFacebook}>Iniciar sesión con Facebook</p>
              </div>

              <div className="login-error">
                {
                  errores != '' ? (
                      <p>Comprueba tu email o contraseña</p>
                  ) : (
                        <p></p>
                  )
                }
              </div>

              <div className=" passwordForget">
                <a className="pflog" href="/PasswordReset">¿Has olvidado la contraseña?</a>
              </div>
             
            </div>

            <div className="signup">
                <p className="regtext">¿No tienes una cuenta? <a className="regbtn" href="/SignUp">Regístrate</a></p>
            </div>

            <div className="apps-av">
                <p>Descarga la aplicación.</p>

                <div className="apps-av-icons">
                  <a target="_blank" href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img className="appis"
                   src={getIconAppStore}/></a>
                  <a 
                  target="_blank" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D4750230E-F944-4B0F-ADD0-F3CAEA4ED160%26utm_content%3Dlo%26utm_medium%3Dbadge">
                      <img className="appis" src={getIconGoogleStore}/></a>
                </div>
            </div>

        </div>
        </Fragment>


     );
}
 
export default Login;