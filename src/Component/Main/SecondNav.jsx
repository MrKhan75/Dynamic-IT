import PropTypes from 'prop-types';



const SecondNav = ({list}) => {
    const {name, path} = list;
    return (
        <div>
            <ul>
                <li><a className='text-base text-green-700 font-semibold' href={path}>{name}</a></li>
            </ul>
        </div>
    );
};


SecondNav.propTypes = {
    list: PropTypes.object
}
export default SecondNav;