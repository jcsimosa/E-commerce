import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup({setUser,setCurrentUser}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')

    const Navigate = useNavigate()
    
    
    const handleInfo = (e) => {
        e.preventDefault()
        const form = {
            name,
            email,
            password,
            address
        }
        fetch("/users",{
            method: "POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(form)
        })
        .then(r => {
            if (r.ok){
                r.json().then(userData => {
                    setCurrentUser(userData)
                    setUser(true)
                    alert('User created')
                    Navigate("/buy")
                })
            }
        })
    } 
    

    return(
        <div>
            <form onSubmit={handleInfo}>
                <div>
                    <input required="name" placeholder="name" onChange={e=> setName(e.target.value)}></input>
                </div>
                <div>
                    <input required="email" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <input required="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input required="address" placeholder="address" onChange={e => setAddress(e.target.value)}></input>
                </div>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Signup