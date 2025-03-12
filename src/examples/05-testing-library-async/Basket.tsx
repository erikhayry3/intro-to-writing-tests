import { useEffect, useState } from "react";

const Basket = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <img src="/spinner.png" alt="Is loading" />;
  }

  return (
    <div>
      <h1>Basket</h1>
      <button type="button">Add to basket</button>
    </div>
  );
};

export default Basket;
