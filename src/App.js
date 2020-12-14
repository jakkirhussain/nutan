import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

let Originalitems = [
  {
    id: 1,
    name: "Basics",
    price: "100$",
    category: "Shirt",
    image: "./no-image.png",
  },
  {
    id: 2,
    name: "BlueBerry",
    price: "200$",
    category: "Shirt",
    image: "./no-image.png",
  },
  {
    id: 3,
    name: "BlackBerry",
    price: "100$",
    category: "Shirt",
    image: "./no-image.png",
  },
  {
    id: 4,
    name: "Tommy Hilfiguer",
    price: "500$",
    category: "Shirt",
    image: "./no-image.pn",
  },
  {
    id: 5,
    name: "RiG",
    price: "100$",
    category: "Trouser",
    image: "./no-image.png",
  },
  {
    id: 6,
    name: "US Polo",
    price: "600$",
    category: "Trouser",
    image: "./no-image.png",
  },
  {
    id: 7,
    name: "Sin",
    price: "700$",
    category: "Trouser",
    image: "./no-image.png",
  },
  {
    id: 8,
    name: "Levis",
    price: "300$",
    category: "Trouser",
    image: "./no-image.png",
  },
  {
    id: 9,
    name: "Grasim",
    price: "100$",
    category: "Tie",
    image: "./no-image.png",
  },
  {
    id: 10,
    name: "Basics",
    price: "50$",
    category: "Tie",
    image: "./no-image.png",
  },
];

const category = ["Shirt", "Trouser", "Tie"];

function App() {
  let [left, setLeft] = useState(0);
  let [current, setCurrent] = useState(1);
  let [items, setItems] = useState(Originalitems);
  let [filter, setFilter] = useState("");

  const total = items.length;

  const moveLeft = () => {
    if (current > 1) {
      setCurrent(current - 1);
      setLeft(left + 200);
    }
  };

  const moveRight = () => {
    if (current < total - 2) {
      setCurrent(current + 1);
      setLeft(left - 200);
    }
  };

  const handleChange = (event) => {
    let filteredItems = Originalitems.filter((item) => {
      return item.category == event.target.value;
    });
    setFilter(event.target.value);
    setItems(filteredItems);
  };

  return (
    <>
      <div className="container">
        <div className="filter">
          <label>Filter : </label>
          <select value={filter} onChange={handleChange}>
            <option value="select">Select</option>
            {category.map((elem) => {
              return (
                <option key={elem} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="container">
        <div className="left-arrow">
          <img src="./left-arrow.png" alt="move left" onClick={moveLeft} />
        </div>
        <div className="carousel-container" aria-label="product">
          <div
            className="carousel-container-inner"
            style={{
              left: left + "px",
            }}
          >
            {items.map((item, index) => {
              let curClassName = current === index ? " current" : "";

              return (
                <div
                  className="item"
                  className={"item" + curClassName}
                  key={item.id}
                  aria-label={`item${index}`}
                >
                  <img src="./no-image.png" alt="" />
                  <div className="info">
                    <div className="name">{item.name}</div>
                    <div className="price">
                      <span>Price: </span>
                      <span>{item.price}</span>
                    </div>
                    <div className="category">
                      <span>Category: </span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-arrow">
          <img src="./right-arrow.png" alt="move right" onClick={moveRight} />
        </div>
      </div>
    </>
  );
}

export default App;
