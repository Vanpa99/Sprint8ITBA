import PropTypes from "prop-types";

function Button({ type, onClick, text }) {
  return (
    <button 
      type={type} 
      className="boton" 
      onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
};
