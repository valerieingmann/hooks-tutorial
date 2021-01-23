import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = length => [...Array(length)];
const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
};
const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return createArray(totalStars).map((n, i) => (
    <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
  ));
};

function App() {
  const [status, setStatus] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div>
        <h1>The package is: {status ? "Delivered" : "Not Delivered"}</h1>
        <button onClick={() => setStatus(!status)}>Deliver</button>
      </div>
      <div>
        <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
      </div>
      <StarRating totalStars={10} />
    </>
  );
}

export default App;
