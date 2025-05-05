import React, {useState,useEffect} from "react";
import {db} from '../fireebaseConfig';
import { collection , getDocs } from 'firebase/firestore';
import '../styles/ProductList.css'

const ProductList = ({addToCart}) => {
    const [products,setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => { 
        const fetchProduct = async() => { 
        try{ 
        const querySnapshot = await getDocs (collection (db, 'games')); 
        const productsData = querySnapshot.docs.map((doc) => ({ 
        id: doc.id, 
        ...doc.data(), 
        })); 
        setProducts (productsData); 
        } catch (error) {
        console.error("Ошибка на сервере", error); 
        } 
        } 
        fetchProduct();
    }, []);
    
     const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
     };

    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery));
      
    return ( 
        <div className="games"> 
        <h1>Список игр</h1> 
        <input type="text" placeholder="Поиск товаров..." value={searchQuery} onChange={handleSearchChange}/>
        <div className="game-cards"> 
        {filteredProducts.map((product) => (
        <div key={product.id} className="game-card"> 
        <div className="game-details"> 
        <img src={product.image} alt="product.img"/> 
        <h2 className="game-title">{product.name}</h2> 
        <p className="game-description">{product.description}</p> 
        <p className="game-price">Цена: {product.price}тг.</p>
        <button onClick={() => addToCart(product)}> Добавть в корзину</button>
        </div> 
        </div> 
        ))} 
        </div> 
        </div> 
        ); 
        };

export default ProductList;