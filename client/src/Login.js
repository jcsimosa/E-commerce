import React, { useState } from "react";


const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault()
        fet
    }

    return (
        <div>
            <form>
                <input placeholder="Email" required="Email"></input>
                <input placeholder="Password" required="Password"></input>
                <input type="submit" value='Login'></input>
            </form>
        </div>
    )
}
export default Login