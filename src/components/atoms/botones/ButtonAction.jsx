const ButtonAction = ({
  children,
  type = "button",
  variant = "primary",
  size,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const classes = ["btn", `btn-${variant}`, size && `btn-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonAction;
