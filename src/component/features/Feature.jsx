import PropTypes from 'prop-types'; // ES6
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const Feature = ({feature}) => {
    return (
        <div className='flex items-center  justify-start gap-2 m-2'>
            <IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>
            <p>{feature}</p>
            <hr />
            <br />
        
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
}
export default Feature;