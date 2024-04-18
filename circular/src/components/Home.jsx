import React from "react";
import "./Home.css";
import Asset from "./Asset";
import clothes from "../assets/clothes_2.webp";
import suits from "../assets/suits.jpeg";
import shoes from "../assets/shoes.jpeg";
import novels from "../assets/novel_lotr.jpeg";
import babygear from "../assets/baby_stroller.jpeg";
import kitchenware from "../assets/kitchenware.jpeg";
import gardentools from "../assets/garden_tools.jpeg";

const Home = () => {
  return (
    <>
      <div id="fullpage">
        <div id="sidebar">
          <a>circles</a>
          <a>setting</a>
        </div>
        <div className="home">
          <div className="home_container">
            <Asset
              id="23445930"
              title="Baby Gear"
              price={98.99}
              rating={5}
              image={babygear}
            />
            <Asset
              id="3254354345"
              title="Garden Tools"
              price={598.99}
              rating={4}
              image={gardentools}
            />

            <Asset
              id="90829332"
              title="Novels"
              price={1}
              rating={5}
              image={novels}
            />
          </div>

          <div className="home_container">
            <Asset
              id="12321341"
              title="Clothes"
              price={11.96}
              rating={5}
              image={clothes}
            />

            <Asset id="49538094" title="Shoes" rating={4} image={shoes} />

            <Asset
              id="4903850"
              title="Suits"
              price={199.99}
              rating={3}
              image={suits}
            />
          </div>

          <div className="home_container">
            <Asset
              id="23445930"
              title="Kitchen Ware"
              price={98.99}
              rating={5}
              image={kitchenware}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
