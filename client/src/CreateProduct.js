import React, { useState } from "react";


function CreateProduct() {

    const [nameProduct, setNameProduct] = useState("")
    const [priceProduct, setPriceProduct] = useState("")
    const [descriptionProduct, setDescriptionProduct] = useState("")


    const submitProductHandle = (e) => {
        e.preventDefault()
        const product = {
            name: nameProduct,
            price: priceProduct,
            description: descriptionProduct,
            img:""
        }
        
        fetch("/products", {
            method: "POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(product)
        })
        .then(r => {
            if (r.ok){
                r.json().then(resp => {
                    alert("your product has been created")
                })
            }
        })


    }

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black-700">
                    Create your product
                    </h1>
                    <form className="mt-6"
                        onSubmit={submitProductHandle}
                    >
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name of the Product
                            </label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {setNameProduct(e.target.value)}}
                                className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="price"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Price
                            </label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {setPriceProduct(e.target.value)}}
                                className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="description"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                required
                                onChange={(e) => {setDescriptionProduct(e.target.value)}}
                                className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        {/* <div className="mb-2">
                            <label
                                htmlFor="Photos"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Photo
                            </label>
                            <input
                                type="file"
                                onChange={null}
                                className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div> */}
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-purple-600">
                                Create Product
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>    
    )
}
export default CreateProduct