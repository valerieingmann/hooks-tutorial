import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https:/api.github.com/users");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={() => setData([])}>Remove</button>
    </>
  );
  // const [status, setStatus] = useState(false);
  // const [checked, setChecked] = useState(false);
  // const [name, setName] = useState("Valerie");
  // const [admin, setAdmin] = useState(false);

  // useEffect(() => {
  //   document.title = `Celebrate ${name}`;
  // }, [name]);

  // useEffect(() => {
  //   console.log(`user is ${admin ? "admin" : "not admin"}`);
  // }, [admin]);

  // return (
  //   <>
  //     <div>
  //       <h1>The package is: {status ? "Delivered" : "Not Delivered"}</h1>
  //       <button onClick={() => setStatus(!status)}>Deliver</button>
  //     </div>
  //     <div>
  //       <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
  //     </div>
  //     <StarRating totalStars={10} />
  //     <section>
  //       <p>Congratulations {name}</p>
  //       <button onClick={() => setName("Rosie")}>Change Winner</button>
  //       <p>{admin ? "logged in" : "not logged in"}</p>
  //       <button onClick={() => setAdmin(true)}>Log In</button>
  //     </section>
  //   </>
  // );
}

export default App;
