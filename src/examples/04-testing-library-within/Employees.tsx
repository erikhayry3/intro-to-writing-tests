const Employees = () => {
  return (
    <div>
      <h2 id="all">All employees</h2>
      <ul aria-labelledby="all">
        {[
          { image: "erik.png", name: "erik" },
          { image: "markus.png", name: "markus" },
          { image: "aleksandra.png", name: "aleksandra" },
        ].map(({ image, name }) => (
          <li key={name}>
            <img src={image} alt={name} />
          </li>
        ))}
      </ul>

      <h2 id="devs">Developers</h2>
      <ul aria-labelledby="devs">
        {[
          { image: "erik.png", name: "erik" },
          { image: "aleksandra.png", name: "aleksandra" },
        ].map(({ image, name }) => (
          <li key={name}>
            <img src={image} alt={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
