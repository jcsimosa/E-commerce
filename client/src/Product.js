import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom" 
import StarRating from "./StarRating"


function Product(){
    
    const [ product, setProduct ] = useState({ 
        name: '',
        description: '',
        price: 0,
        reviews: [],
        img: ''
      })
    const [error, setError] = useState('')

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

    
    // console.log(product)

    const reviewsmap = product.reviews.map(review => {
        
        return (
            <div key={review.id}>
                <p>{review.comment}</p>
                <p>{review.review_with_user}</p>
                <StarRating star={review.star_rating}/>
            </div>
            
        )
    })

    if (!product){
        return (
            <section className="h-screen flex justify-center">
                Loading...
            </section>
        )
    }

    return( 
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                        <img className="max-w-[200px] lg:max-w-sm" src={product.img}></img>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0" >
                            {product.name}
                        </h1>
                        <div className="text-xl text-red-500 font-medium mb-6">
                            $ {product.price}
                        </div>
                        <p className="mb-8">
                            {product.description}  
                        </p>
                        <Link to="/cart">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Add to Cart
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Back to Home
                            </button>
                        </Link>
                    </div>
                </div>










                {/* <h1>{product.name}</h1>
                <img src={product.img} alt="img" />
                <p>${product.price}</p>
                <p>{product.description}</p>
                <div>
                    <h2>Reviews:</h2>
                    {reviewsmap}
                </div>
                <Link to="/cart">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Add to Cart
                    </button>
                </Link> */}
            </div>
        </section>
    )
}
export default Product