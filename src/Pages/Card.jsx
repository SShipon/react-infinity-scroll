import React from 'react'

export default function Card({item}) {
    const{ name,image} = item
    console.log(item, 'hello i am shipon')
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src='' alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
      {name.common}
        <div className="badge badge-secondary">hello</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
  )
}
