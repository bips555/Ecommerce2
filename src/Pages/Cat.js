import React from 'react'

import { useParams } from 'react-router-dom';
import ProductData from '../Data/ProductData';
import { Link } from 'react-router-dom';
import Catdata from '../Data/Catdata';
function Cat() {
    let {cid}=useParams();
    let Pcdata=ProductData.filter((a)=>(a.category==cid)) ;
    let Pndata=Catdata.filter((a)=>(a.id==cid));
  return (
    <div className='row'>
  {Pndata.map((a)=>(
     
        <h3 className='colc fs-7 text-center py-5'>{a.catName}</h3>

  ))}
   
{Pcdata.map((a)=>(
    
      <div className='col-lg-4 col-md-6 col-12 my-5'> 
  <div className="card border-0 shadow-lg mb-3 mx-auto" style={{width:'100%',height:'100%'}}>
  <div className="row g-0">
    <div className="col-md-6">
      <img src={a.thumbnail} className="img-fluid rounded-start my-4" alt="..." style={{width:'300px',height:'200px'}}/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title colc">{a.title}</h5>
       
       <Link to={`/details/${a.id}`} className='text-decoration-none'>Read More</Link>
     
      </div>
    </div>
  </div>
</div> </div>

))}
   
    </div>
  )
}

export default Cat