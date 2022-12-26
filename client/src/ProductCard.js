import React from "react";
import { Link} from "react-router-dom";
import {BsPlus,BsEyeFill} from "react-icons/bs"

function ProductCard({product}) {
    
    return (
        <div>
            <div className="border border-[#000000] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={product.img}></img>
                    </div>
                </div>
                <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button>
                        <div className="flex justify-center items-center text-white w-10 h-10 bg-red-500">
                            <BsPlus className="text-3xl"/>
                        </div>
                    </button>
                    <Link 
                    to={`products/${product.id}`}
                    className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                    >
                        <BsEyeFill/>
                    </Link>
                </div>
            </div>
            <div>
                <Link to={`products/${product.id}`}>
                <h2 className="font-semibold mb-1">
                    {product.name}
                </h2>
                </Link>
                <div className="font-semibold">${product.price}</div>
            </div>
        </div>
    )
}
export default ProductCard