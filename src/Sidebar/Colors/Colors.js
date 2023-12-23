import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Features</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="High-Res Display"
          title="High-Res Display"
          name="test1"
          Native="High-Res Display"
          
        />

        <Input
          handleChange={handleChange}
          value="Multiple Cameras"
          title="Multiple Cameras"
          name="test1"
          Native="Multiple Cameras"
        />

        <Input
          handleChange={handleChange}
          value="Dual SIM Support"
          title="Dual SIM Support"
          name="test1"
          Native="Dual SIM Support"
        />

        <Input
          handleChange={handleChange}
          value="Fast Charging"
          title="Fast Charging"
          name="test1"
          Native="Fast Charging"
        />
        <Input
          handleChange={handleChange}
          value="Wireless Charging"
          title="Wireless Charging"
          name="test1"
          Native="Wireless Charging"
        />

      </div>
    </>
  );
};

export default Colors;
