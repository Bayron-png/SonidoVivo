const ActionButton = ({ 
  onClick, 
  children, 
  className = 'btn btn-outline-secondary w-100 mt-3', 
  type = 'button' 
}) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default ActionButton;