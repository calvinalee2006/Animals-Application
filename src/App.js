import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;

// function makeArray() {
//   return [1, 10, 32, 40];
// }
//Array destructuring
//Option 1
// const myArray = makeArray();
// const firstElement = myArray[0];
// const secondElement = myArray[1];
// console.log(firstElement, secondElement);

//Array destructuring
//Option 2

// const [firstElement, secondElement] = makeArray();
// console.log(firstElement, secondElement);
// const [count, setCount] = useState(0);
