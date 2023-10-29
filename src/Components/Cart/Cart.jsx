import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length ===0){
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'lime' : 'green'}>Order Summay:{cart.length}</h2>
            <p className={`bold bordered ${cart.length===3 ? 'orange': 'purple'}`}>Something</p>
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}
                >{tshirt.name}<p>Price:${tshirt.price}</p>   <button onClick={() =>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;