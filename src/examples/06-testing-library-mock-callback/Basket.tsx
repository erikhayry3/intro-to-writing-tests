import { useEffect } from "react";

const Basket = ({ onLoad }: { onLoad: (val: number) => void }) => {
  useEffect(() => {
    onLoad(1);
    onLoad(2);
    onLoad(3);
  }, []);

  return (
    <div>
      <h1>Basket</h1>
      <button type="button">Add to basket</button>
    </div>
  );
};

export default Basket;
