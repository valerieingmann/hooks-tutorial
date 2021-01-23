import React, { useEffect, useState, useReducer, useRef, useContext } from "react";
import useInput from "./useInput";
import useFetch from "./useFetch";
import { useTrees } from "./index";

const App = ({ login }) => {
  const trees = useTrees();
  const { loading, data, error } = useFetch(`https://api.github.com/users/valerieingmann`);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <p>{data.login}</p>
      <p>{data.name}</p>
    </div>
  );

  // return (
  //   <div>
  //     {/* <h1>Trees</h1>
  //     <ul>
  //       {trees.map(tree => (
  //         <li key={tree.id}>{tree.type}</li>
  //       ))}
  //     </ul> */}
  //   </div>
  // );

  // const sound = useRef();
  // const color = useRef();
  // const [titleProps, resetTitle] = useInput("");
  // const [colorProps, resetColor] = useInput("#000000");

  // const submit = e => {
  //   e.preventDefault();
  //   // const soundVal = sound.current.value;
  //   // const colorVal = color.current.value;
  //   alert(`${titleProps.value} sounds like ${colorProps.value}`);
  //   resetColor();
  //   resetTitle();

  //   // sound.current.value = "";
  //   // color.current.value = "";
  // };
  // return (
  //   <form onSubmit={submit}>
  //     <input {...titleProps} type="text" placeholder="Sound..." />
  //     <input {...colorProps} type="color" />
  //     <button>ADD</button>
  //   </form>
  // );
};

export default App;
