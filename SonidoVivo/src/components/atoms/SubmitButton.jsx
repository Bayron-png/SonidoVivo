const SubmitButton = ({ label = "Enviar" }) => (
  <button type="submit" className="btn btn-primary">
    {label}
  </button>
);

export default SubmitButton;
