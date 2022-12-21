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
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black-700">
                    Sign in
                    </h1>
                    <form className="mt-6"
                        onSubmit={handleLogin}
                    >
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={e => {setPassword(e.target.value)} }
                                className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="/signup"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>








            <form onSubmit={handleLogin}>
                <input placeholder="Email" required="Email" onChange={e => {setEmail(e.target.value)}}></input>
                <input placeholder="Password" required="Password" onChange={e => {setPassword(e.target.value)}}></input>
                <input type="submit" value='Login'></input>
            </form>
        </div>
    )
}
export default Login