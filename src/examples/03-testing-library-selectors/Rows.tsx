import * as React from "react";

const Rows = ({ items }: { items: string[] }) => {
  return (
    <>
      <h2 id="items">Items</h2>

      <ul aria-labelledby="items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Rows;
