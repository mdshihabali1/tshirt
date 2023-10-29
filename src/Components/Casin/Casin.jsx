import './Casin.css';

const Casin = ({children}) => {
    return (
        <div>
           <h1>Cousin</h1> 
           <p> <small>{children}</small> </p>
        </div>
    );
};

export default Casin;