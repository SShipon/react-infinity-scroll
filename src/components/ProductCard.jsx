import React from "react";

export default function ProductCard({data}) {
  return (


    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={data.images[0]} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
      {data.title}
        <div className="badge badge-secondary">hello</div>
      </h2>
      <p>{data.description}</p>
      <p>Rs. {data.price}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
  );
};


