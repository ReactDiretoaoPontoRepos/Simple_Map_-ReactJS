import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h5>{number}</h5>

      <p className={number >= 0 ? "positive" : "negative"}>
        {number >= 0 ? "Numero positivo" : "Numero negativo"}
      </p>

      <input
        type="number"
        value={number}
        onChange={({ target }) => setNumber(parseInt(target.value))}
      />

      {/* tabuada  */}
      <ul>
        {Array.from({ length: 51 }).map((_, i) => (
          <li key={i}>
            {number} x {i} = <strong>{number * i}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
