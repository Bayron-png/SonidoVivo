import ButtonAction from "./ButtonAction";

const ActionButton = ({
  onClick,
  children,
  className = "w-100 mt-3",
  type = "button",
}) => (
  <ButtonAction
    type={type}
    variant="outline-secondary"
    className={className}
    onClick={onClick}
  >
    {children}
  </ButtonAction>
);

export default ActionButton;