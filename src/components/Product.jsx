import React from "react";
import { DATA } from "../Data";
import { NavLink } from "react-router-dom";


const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card mx-5 my-5 py-5" key={item.id} style={{width: "18rem"}}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">
            ${item.price}
          </p>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">{DATA.map(cardItem)}</div>
      </div>
    </>
  );
};

export default Product;
