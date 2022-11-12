import './App.css';
import { useEffect,useState } from 'react';
import ProductCard from './ProductsCard';
import NavBar from "./NavBar"
import { Route,Routes, useNavigate } from 'react-router-dom';
import Product from './Product';
import Buy from './Buy';
import Signup from './Signup';
import Login from './Login'
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
  return (

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
        <NavBar />
        <Routes>
          <Route index element={products.map((obj) => <ProductCard key={obj.id} obj={obj}/>)}/>
          
          <Route path='/products/:id' element={<Product/>}/>
          
          <Route path='/signup' element={<Signup setUser={setUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/buy' element={
            <AuthRoute user={user}>
              <Buy/>
            </AuthRoute>
          }/>
        </Routes>
        

    </div>
  );
}
export default App;