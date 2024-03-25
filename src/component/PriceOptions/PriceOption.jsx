import PropTypes from 'prop-types'; // ES6
import Feature from '../features/Feature';
const PriceOption = ({option}) => {

    const { name , price, features } = option;

    return (
        <div>
            <div className="gap-3 p-4 m-4 bg-blue-600 text-wrap text-white rounded-lg shadow-lg">
                <h3 className="text-3xl">{name}</h3>
                <h3 className="text-2xl">{price}</h3>
                <p>
            {
                features.map((feature , index) => <Feature key={index} feature={feature}></Feature>)
            }
            </p>
            <div className="bg-green-600  text-center m-4 p-1 text-wrap ml-36 w-1/3 rounded-md shadow-md hover:bg-green-400">
            <button>Buy Now</button>
            </div>
            </div>
                <hr />
           
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;