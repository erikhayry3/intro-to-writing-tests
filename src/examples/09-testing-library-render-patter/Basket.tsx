const Basket = ({ onClick }: { onClick: (val: number) => void }) => {
  return (
    <div>
      <h1>Basket</h1>
      <button type="button" onClick={() => onClick(1)}>
        Add to basket
      </button>
    </div>
  );
};

export default Basket;
