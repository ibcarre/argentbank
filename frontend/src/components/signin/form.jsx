import { useState } from "react";
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router";
import { loginUser, userDetails } from "../../Redux/UserSlice";


export default function Form(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) =>{
        e.preventDefault();
        let userCredentials = {
            email, password
        }
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload["status"]===400){
                alert("Mauvais Identifiant/Mot de passe")
                setEmail('')
                setPassword("")
            }
            if(result.payload["status"]===500){
                alert("Erreur réseau, veuillez réessayer ultérieurement")
                setEmail('')
                setPassword("")
            }
            if(result.payload["status"]===200){
                dispatch(userDetails()).then((data)=>{
                    if(data.payload["status"]===200){
                        navigate('/user')
                    }
                    else{
                        alert("Erreur, réessayez ultérieurement")
                    }
                })
            }
        })


    }
    
    
    return(
        <body>
        <main class="main bg-dark">
        <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit = {handleLoginEvent}>
            <div class="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" 
            value = {email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" 
            value = {password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
                >Remember me</label>
            </div>
            <button type ="submit" class="sign-in-button">Sign In</button>
        </form>
        </section>
        </main>
        </body>
)
}