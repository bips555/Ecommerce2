import React from 'react'
import { useParams } from 'react-router-dom'

import ProductData from '../Data/ProductData'
function Single() {
 
    let {id}=useParams();
    let Pdata=ProductData.find((a)=>(a.id==id))
    return (
    <>
    <div className='container py-5 '>
        <div className="card mb-3">
 <div className="row g-0 align-items-center justify-content-center">
  <div className="col-md-4">
    <img src={Pdata.thumbnail} className="img-fluid rounded-start" alt="..." />
  </div>
  <div className="col-md-8">
    <div className="card-body text-center">
      <h2 className="card-title colc">{Pdata.title}</h2>
      <p className="card-text fw-bold">Rating:{Pdata.rating}</p>
      <p className="card-text fw-bold">Stock:{Pdata.stock}</p>
      <p className="card-text fw-bold">Discount%: {Pdata.discountPercentage}</p>
      <p className="card-text fw-bold">Description: {Pdata.description}</p>
      <p className="card-text fw-bold">price: {Pdata.price}</p>
      <button className="mx-auto colc backgg border-0 shadow-lg p-2 card">
                      Buy Now
                    </button>
    </div>
  </div>
</div>

        
   
    </div>
    </div>
   
   
    
   </>)
}

export default Single