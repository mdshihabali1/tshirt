import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import './Home.css';
import Cart from "../Cart/Cart";
import { useState } from "react";

const Home = () => {
    const tshirts =useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }

    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining);
    }

    return (
        <div className="home-container">
           
           <div className="tshirt">
            {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
               
                ></Tshirt>)
            }
           </div>
           <div className="cart-container">
            <Cart 
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
           </div>
        </div>
    );
};

export default Home;