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
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black-700">
                    Sign up
                    </h1>
                    <form className="mt-6"
                        onSubmit={handleInfo}
                    >   
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-bold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="name"
                                onChange={e => setName(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 font-semibold text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 font-semibold text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-bold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={e => {setPassword(e.target.value)} }
                                className="block w-full px-4 py-2 mt-2 font-semibold text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="address"
                                className="block text-sm font-bold text-gray-800"
                            >
                                address
                            </label>
                            <input
                                type="address"
                                onChange={e => setAddress(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 font-semibold text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-purple-600">
                                Submit
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        You already have an account?{" "}
                        <a
                            href="/login"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Sign in
                        </a>
                    </p>
                </div>
            </div>








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