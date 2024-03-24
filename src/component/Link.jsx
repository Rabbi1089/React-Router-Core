import PropTypes from 'prop-types'; // ES6


const Link = ({ route }) => {
    const { path, name } = route
    return (
        <li ><a href={path}>{name}</a></li>
    );
};

Link.propTypes = {
    route : PropTypes.object,
}
export default Link;