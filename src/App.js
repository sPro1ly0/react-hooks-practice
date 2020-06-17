import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  // order matters
  // don't use in conditional
  // always returns an array, [currentState, functionToUpdateState]

  // pass in state option 1, going to run each time function App() is called, every render
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(() => {
    console.log("Howdy");
    return "blue";
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  // useState also takes in a function and only runs on initial render of component

  // const [number, setNumber] = useState(() => {
  //   console.log("render once");
  //   return 0;    // 2nd way of passing in initial state
  // });

  const changeNumber = amount => {
    setNumber(previousState => previousState + amount);
  };

  // const addNumber = () => {
  //   // can pass in a function to update state
  //   setNumber(previousState => previousState + 1);
  // };

  // const subtractNumber = () => {
  //   setNumber(previousState => previousState - 1);
  // };

  // runs every render
  // useEffect(() => {
  //   console.log("Mija");
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json));
  // }, [resourceType]);
  // 2nd param is an array, if value in array changes from previous render then useEffect will run
  // if empty array [], only runs when component mounts, it never changes

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // return a function to clean up
    // cleanups whatever is done before, and when component unmounts
    // runs before the side effect
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // handling resize on mount

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => changeNumber(-1)}>-</button>
      <span>{number}</span>
      <span>{theme}</span>
      <button onClick={() => changeNumber(1)}>+</button>
      {/* <div>
        <h2>{resourceType}</h2>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })} */}
      <h2>Width: {windowWidth}px</h2>
    </div>
  );
}
