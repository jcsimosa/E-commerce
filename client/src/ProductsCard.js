import {Link} from "react-router-dom"
import './App.css';


function ProductCard({products}) {
    
    
    return (

    <div>
       
       <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                <Link to={`products/${product.id}`}>
                    <img
                    src={product.img}
                    alt={product.description}
                    className="h-full w-full object-contain h-50 w-15 object-center group-hover:opacity-75"
                    />
                </Link>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}$</p>
            </a>
          ))}
        </div>
      </div>
    </div>
        
        
            {/* <ol>
                <li>{obj.name}</li>
                <Link to={`products/${obj.id}`}>
                    <img src={obj.img} />  
                </Link>
                
                <li>${obj.price}</li>
            </ol> */}
        </div>
    )
}
export default ProductCard