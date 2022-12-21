import './App.css';
import { useEffect,useState } from 'react';
import ProductCard from './ProductsCard';
import NavBar from "./NavBar"
import { Route,Routes, useNavigate } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';
import Signup from './Signup';
import Login from './Login'
import AuthRoute from './Auth';
import Hero from './Hero';


function App() {

  const [user, setUser] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  
 useEffect(()=> {
  fetch("/products")
  .then(r => {
    r.json().then(setProducts)
  })
 },[user])

  const logout = () => {
    fetch('/users', {method: "delete"})
    .then(() => {
      setUser(false)
      setCurrentUser(null)
      navigate("/")
    })
  }

 useEffect(() => {
  fetch("/me").then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        setCurrentUser(user);
        setUser(true);
      });
    } else {
      res.json().then(console.log)
    }
  });
}, []); 
  
  console.log(user)
  console.log(currentUser)
  console.log(products)
  return (

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
        <NavBar logout={logout}/>
        <Hero/>
        <Routes>
          <Route path='cart' element={
            <AuthRoute user={user}>
              <Cart/>
            </AuthRoute>
          }/>
          <Route index element={<ProductCard products={products}/>}/>
          
          <Route path='/products/:id' element={<Product/>}/>
          
          <Route path='/signup' element={<Signup setUser={setUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path='/login' element={<Login setUser={setUser} setCurrentUser={setCurrentUser}/>}></Route>
        </Routes>
        

    </div>
  );
}
export default App;