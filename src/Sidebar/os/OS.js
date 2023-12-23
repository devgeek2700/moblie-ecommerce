import Input from "../../components/Input";

function OS({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">OS </h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Smartphones"
          title="Smartphones"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Tablets"
          title="Tablets"
          name="test"
        />
       
      </div>
    </div>
  );
}

export default OS;
