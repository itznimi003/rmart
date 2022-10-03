import React from "react";
import Product from './Product';

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/img1.png" className="d-block w-100" height="500px" alt="Iphone" />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/img2.png"
              className="d-block w-100" 
              height="500px"
              alt="Iphone"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/img3.png"
              className="d-block w-100"
              height="500px"
              alt="Iphone"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/img4.png"
              className="d-block w-100"
              height="500px"
              alt="Iphone"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </>
  );
};

export default Home;
