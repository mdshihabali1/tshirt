import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";


const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <p>Ring:{angti}</p>
        </div>
    );
};

export default Special;