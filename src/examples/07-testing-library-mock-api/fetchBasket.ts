const fetchBasket = async (): Promise<string[]> => {
  const response = await fetch("https://api.example.com/basket");

  return response.json();
};

export default fetchBasket;
