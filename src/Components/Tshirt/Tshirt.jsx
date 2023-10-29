import './Tshirt.css';

const Tshirt = ({tshirt,  handleAddToCart}) => {
    const {picture, name, price, gender} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>Gender:{gender}</p>
            <p>Price:$ {price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;