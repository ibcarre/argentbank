import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../Redux/UserSlice";


export default function ChangeUserName(props){
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const changeUser = () =>{
        dispatch(changeName(name))
    }
    return(
        <>
        <form>
            <div class="input-wrapper">
            <label htmlFor="Nom">Nom</label>
            <input type="text" id="username" 
            value = {name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button onClick={() => {changeUser(); props.result(false); }} type ="button" class="sign-in-button">Enregister</button>
        </form>
        </>
    )
}