import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom" 

function Product(){
    
    const [product, setProduct] = useState('')
    const [addtocard, setAddToCard] = useState([])
    const [error, setError] = useState('')

    const {id} = useParams()
    
   console.log(id)

   const url = `${id}`

    useEffect(()=> {
        fetch(url)
        .then(r => {
            if(r.ok){
                r.json().then(setProduct)
            } else {
                r.json().then(data => setError(data.errors))
            }
        })
    },[])

//    const Addto = () => {
    
//    }

    return(
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt="img" />
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to="/buy">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Add to Cart
                </button>
            </Link>
        </div>
    )
}
export default Product