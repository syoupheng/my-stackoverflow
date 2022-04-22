import React from "react";
import "../styles/Register.css";
import logo from "../assets/img/Logo_Forum.png";


function Register() {
    
    return (
        <div className="register">

            <div className="register__body">
                <div className="register__left">
                    <img  src={logo} alt=""/>
                    <p>Communiquer avec les professionnels <br/> autour de vous sur Red Star.</p>
                </div>

                <div className="register__right">
                    <div className="register__form">
                        <input 
                            placeholder="Email"
                            type="email"
                            className="register__input"
                        />
                        <input 
                            placeholder="Mot de passe"
                            type="password"
                            className="register__input"
                        />
                        <input 
                            placeholder="Confirmer mot de passe"
                            type="password"
                            className="register__input"
                        />
                        <button className="register_submit" >
                            Créer un nouveau compte
                        </button>
                        
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Register
