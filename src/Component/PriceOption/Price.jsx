import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";


const Price = ({option}) => {
    const {name, price, features} = option
    return (
        <div>
            <div className='bg-gray-200 p-5 rounded-md flex flex-col'>
                <h2 className='text-center'>
                    <span className='text-3xl font-semibold'>{price}</span>
                    <span className='text-sm'> / per month</span>
                </h2>
                <h3 className='text-center text-xl text-sky-700'>{name}</h3>
                <div className='p-5 list-none flex-grow'>
                    {
                        features.map(item => (
                            <div className='flex  gap-2'>
                                    <FaCheckCircle className='mt-2'></FaCheckCircle>
                                    <li className='text-lg'>{item}</li>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center mt-5'>
                    <button className='bg-sky-500 border-2 w-full border-sky-500 hover:text-sky-600 hover:duration-300 hover:bg-transparent hover:border-2 hover:border-sky-500 py-2 px-5 text-lg text-white rounded-lg'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};


Price.propTypes = {
    option: PropTypes.object
}
export default Price;