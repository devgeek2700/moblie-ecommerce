import "../Navigation/Nav.css";



const Button = ({ onClickHandler, value, title }) => {

  return (
    <button type="button" class="btn btn-primary" style={{marginRight: "10px"}} onClick={onClickHandler} value={value} className="btns curve">
      {title}
    </button>
  );
};

export default Button;
