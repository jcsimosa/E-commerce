import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom" 
import Review from "./Review"

function Product(){
    
    const [ product, setProduct ] = useState({ 
        name: '',
        description: '',
        price: 0,
        reviews: [],
        img: ''
      })
    const [error, setError] = useState('')
    // const [reviews, setReviews] = useState('')

    const {id} = useParams()

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

    
    console.log(product)

    const reviewsmap = product.reviews.map(review => {
        return (
            <p>{review.comment}</p>
        )
    })

    return(
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt="img" />
            <p>${product.price}</p>
            <p>{product.description}</p>
            <div>
                <h2>Reviews:</h2>
                {reviewsmap}
            </div>
            <Link to="/buy">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Add to Cart
                </button>
            </Link>
        </div>
    )
}
export default Product