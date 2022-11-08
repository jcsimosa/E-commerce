import './App.css';
import { useEffect,useState } from 'react';
import ProductCard from './ProductsCard';
import NavBar from "./NavBar"
import { Route,Routes } from 'react-router-dom';
import Product from './Product';
import Buy from './Buy';
import AuthRoute from './Auth';

function App() {

  const [user, setUser] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [products, setProducts] = useState([])

 useEffect(()=> {
  fetch("/products")
  .then(r => {
    r.json().then(setProducts)
  })
 },[])
    
  
  return (

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
        <NavBar />
        <Routes>
          <Route index element={products.map((obj) => <ProductCard key={obj.id} obj={obj}/>)}/>
          <Route path='/products/:id' element={<Product/>}></Route>
          <Route path='/buy' element={<Buy/>}></Route>
        </Routes>
        

    </div>
  );
}
export default App;