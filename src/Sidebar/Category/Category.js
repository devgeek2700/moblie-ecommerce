import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Types </h2>

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
        <Input
          handleChange={handleChange}
          value="Gaming Phones"
          title="Gaming Phones"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Foldable Phones"
          title="Foldable Phones"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
