import Special from '../Special/Special';
import './Myself.css';

const Myself = ({ring}) => {
    return (
        <div>
            <h1>Myself</h1>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;