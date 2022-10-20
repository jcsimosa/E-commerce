import {Link} from "react-router-dom"

function ProductCard({obj}) {
    
    return (
        
        <div>
            <ol>
                <li>{obj.name}</li>
                <Link to={`products/${obj.id}`}>
                    <img src={obj.img} />  
                </Link>
                
                <li>${obj.price}</li>
            </ol>
        </div>
    )
}
export default ProductCard