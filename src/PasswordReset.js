import React, {useState} from 'react';
import './css/PasswordReset.css';
import igIcon from './img/ig.png';
import lockIcon from './img/lock.png';
import ReactLoading from 'react-loading';
import { auth } from './firebase';


const PasswordReset = () => {

    const [loading2, setLoading2] = useState(false);
    const [user, setUser] = useState('');
    const [modal, setModal] = useState(false);
    const [modalClass, setModalClass] = useState("modal");
    
    const passwordResetSend = () =>{


            setLoading2(true)
            setTimeout(() => {
                console.log(user)
                auth.sendPasswordResetEmail(user)
                .then(function()
                {
                   toggle();
                    
                }).catch(err=>{
                    console.log("errores: " , err.message)
                })
                setLoading2(false)
            }, 4000);

    
                

    }

    const toggle = () =>{
        setModal(!modal);
        setModalClass("modal is-active");
    }

    const closeModal = () =>{
        setModalClass("modal");
    }

    return ( 

        <div className="pr-panel">

            <div className="menu-rp">
                <a href="/" className="igIcon-pr">
                    <img className="iconpr" src={igIcon}/>
                </a>
            </div>
            <div className="reset-p-panel">
                <div className="panel-trouble-password">
                    <div className="iconLock">
                        <img src={lockIcon}/>
                        <h1>Trouble Logging In?</h1>
                    </div>
                    <div className="text-pr">
                        <p>
                            Enter your email, phone, or username and we'll <br/> send you a link to get back into your account.
                        </p>
                    </div>
                    <div className="input-rp">
                        <input className="input-rp-r" placeholder="Email, Phone, or Username"
                         onChange={(ev) => setUser(ev.target.value)}
                         />
                    </div>
                    <div className="rp-login-link">
                       {
                            user.length >= 1 ? (
                                <button className="btn-login-link sig2rp" onClick={passwordResetSend}>
                                {
                                    loading2 ? <ReactLoading type="spokes" color="#fff" height={16} width={16} />
                                    : <p>Send Login Link</p>
                                }
                                </button>
                            ):(
                                <button className="btn-login-link sig1rp">Send Login Link</button>
                            )
                        }
                    </div>

                

                    <div className="or-rp">
                        <div className="ray1-rp"></div>
                        <div className="ro-rp">OR</div>
                        <div className="ray2-rp"></div>
                    </div>

                    <div className="cna">
                        <a href="/SignUp" className="cna-c">Create New Account</a>
                    </div>

                    <a className="btl" href="/">
                        Back To Login
                    </a>

                </div>
            </div>

            <div id="modal-ter" className={modalClass} isOpen={modal} >
                <div class="modal-background"></div>
                <div class="modal-card">
                    <section class="modal-pr">
                        <h1 className="modal-title-pr">Email Sent</h1>
                        <p className="modal-des-pr">
                            We sent an email to {user} with a link <br/> to get back into your account.
                        </p>
                        <span class="modal-pr-btn" onClick={closeModal}>OK</span>
                    </section>
                </div>
                </div>

        </div>

     );
}
 
export default PasswordReset;