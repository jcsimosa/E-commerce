import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({setUser, setCurrentUser}) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const[password,setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        fetch("/login" , {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(userData => {
                    setCurrentUser(userData)
                    setUser(true)
                    navigate("/buy")
                })
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input placeholder="Email" required="Email" onChange={e => {setEmail(e.target.value)}}></input>
                <input placeholder="Password" required="Password" onChange={e => {setPassword(e.target.value)}}></input>
                <input type="submit" value='Login'></input>
            </form>
        </div>
    )
}
export default Login