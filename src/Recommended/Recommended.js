import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended Size</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Moblies" />
          <Button onClickHandler={handleClick} value="iPhone " title="iPhone " />
          <Button onClickHandler={handleClick} value="Android " title="Android " />
        </div>
      </div>
    </>
  );
};

export default Recommended;
