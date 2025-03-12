import Rows from "./Rows";

const Basket = ({ hideButton }: { hideButton?: boolean }) => {
  return (
    <div>
      <h1>Basket</h1>
      <Rows items={["item 1", "item 2"]} />

      {!hideButton ? <button type="button">Add to basket</button> : null}
    </div>
  );
};

export default Basket;
