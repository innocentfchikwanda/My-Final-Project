import React from "react";
import "./Header.css";
import Product from "./Product";
import clothes from "../assets/clothes_2.webp";
import suits from "../assets/suits.jpeg";
import shoes from "../assets/shoes.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Product
          id="12321341"
          title="Clothes"
          price={11.96}
          rating={5}
          image={clothes}
        />

        <Product id="49538094" title="Shoes" rating={4} image={shoes} />

        <Product
          id="4903850"
          title="Suits"
          price={199.99}
          rating={3}
          image={suits}
        />
        <Product
          id="23445930"
          title="Category"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="Category"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />

        <Product
          id="90829332"
          title="Category"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
