import { useEffect, useState } from "react";
import fetchBasket from "./fetchBasket";

const Basket = () => {
  const [basket, setBasket] = useState<string[] | null>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const fetchedBasket = await fetchBasket();
        setBasket(fetchedBasket);
      } catch (error) {
        console.log(error);
        setBasket(null);
      }
    }

    fetch();
  }, []);

  if (basket === null) {
    return <div>Error fetching basket</div>;
  }

  return (
    <div>
      <h1>Basket</h1>
      <h2 id="items">Items</h2>
      <ul aria-labelledby="items">
        {basket.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button type="button">Add to basket</button>
    </div>
  );
};

export default Basket;
