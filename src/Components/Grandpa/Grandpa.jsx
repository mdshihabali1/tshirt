import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export  const RingContext = createContext('gold');
const Grandpa = () => {
    const ring = 'diamond';
 
    return (
        <div className="grandpa">
            <h1>Grandpa</h1>
            <RingContext.Provider value="golden Ring">
                <section className="flex">
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;
/**
 * 1. Create context and export
 * 2. Create a Provider and pass a value;
 * 3. Use UseContext to Receive the value;
 */