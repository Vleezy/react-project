import React from "react";
import { Link } from "react-router-dom";

import Coursel from "../components/coursel/coursel"
import Intel from '../assets/img/christian-wiediger-c3ZWXOv1Ndc-unsplash.jpg'
import Amd from '../assets/img/christian-wiediger-Htfy7TaDBgo-unsplash.jpg'
import "./home.css";

const Home = () => {
  return (
    <>
      <main className="hero">
        <h1 className="hero-text">
          Hyper Machine Building for the Future of Gaming
        </h1>
      </main>
      <div className="only">
        <Coursel />
      </div>
      <div className="only">
        <div className="container">
          <div className="cell">
            <Link to="/products">
              <img
                src={Intel}
                alt="AMD chipset"
              />
              <p>AMD Power Machine</p>
              </Link>
          </div>
          <div className="cell">
          <Link to="/products">
              <img
                src={Amd}
                alt="Intel Chipset"
              />
              <p>Intel Power Machine</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
