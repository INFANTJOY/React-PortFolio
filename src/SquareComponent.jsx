import PropTypes from "prop-types";

export default function Square({onClick, isFree, title}){
    
    return <div className="square" onClick={onClick}>
        <span className="banner">{isFree ? "Free":"Paid"}</span>
        {title}
        </div>;
}
Square.propTypes = {
    title: PropTypes.string,
    isFree: PropTypes.bool,
    onClick: PropTypes.func
};