import Rows from "./Rows";

const Input = () => (
  <label htmlFor="input">
    Search
    <input id="input" type="text" />
  </label>
);

const Basket = () => {
  return (
    <div>
      <h1>Basket</h1>
      <Rows items={["item 1", "item 2"]} />
      <button type="button" className="button">
        Add to basket
      </button>
    </div>
  );
};

export default Basket;
