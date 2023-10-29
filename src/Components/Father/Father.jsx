import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css';

const Father = ({ring}) => {
    return (
        <div>
            <h1>this is father page</h1>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;