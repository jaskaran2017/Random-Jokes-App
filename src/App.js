import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [joke, setJoke] = useState("Loading...");
  const newJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        setJoke(res2.value);
      });
  };
  useEffect(() => {
    newJoke();
  }, []);
  return (
    <div className="App">
      <h3>Random Jokes</h3>
      <button onClick={() => newJoke()}>New Joke</button>
      <h4>{joke}</h4>
    </div>
  );
}
export default App;
