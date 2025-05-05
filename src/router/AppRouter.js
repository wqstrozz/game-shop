import React, { useState } from "react";
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Contacts from "../components/Contacts";
import Cart from "../components/Cart";

const AppRouter = () => {
    const[cart,setCart] = useState([]);
    const [isCartOpen,setIsCartOpen] = useState(false);

     const toggleCart =  () =>{
        setIsCartOpen(!isCartOpen);
     }

     const addToCart = (product) => {
        setCart((prevCart) => [...prevCart,product]);
     };
     
     const removeFromCart = (productID) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productID));
     };


    return(
        <Router>
            <nav>
                <Link to='/'>Главная</Link>
                <Link to='/game'>Игры</Link>
                <Link to='/contacts'>Контакты</Link>
                <button className="cart-open-btn" onClick={toggleCart}>Корзина ({cart.length})</button>
            </nav>
            {isCartOpen && <Cart toggleCart={toggleCart} removeFromCart={removeFromCart} cart={cart}/>}
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/game" element={<ProductList addToCart={addToCart} />}/>
              <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter; 