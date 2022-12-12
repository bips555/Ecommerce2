import React from 'react'
import { Link } from 'react-router-dom'
import a from '../Data/Coldata'
import b from '../Data/Bdata' 
import c from '../Data/Cdata'
import ff from '../Data/Ddata'
import Catdata from '../Data/Catdata'
import ProductData from '../Data/ProductData'

function Home() {
  return (<>
   <div className='container py-5'>
    <div className='row'>
      <div className='col-lg-4 my-auto mx-auto'>
        <div className='box backgg p-5 card border-0'>
          <h3 className='colc text-center mb-3 '>All Electronics Categories</h3>
      <ul className="list-group">
    {Catdata.map((q)=>(
     <li className='list-group-item  '><Link className='text-decoration-none link-dark' to={`/cat/${q.id}`}>{q.catName}</Link></li>
    ))}
                       
</ul>
</div>
</div>
<div className='col-lg-8 my-4'>
<div className='box backgg p-2 card border-0'>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://littletreasury.com/wp-content/uploads/2016/06/slider-watch-collection-the-longines-saint-imier-collection-1600x800.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>The new Standard under favorable watches</h5>
        <p>From $99</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://city-cooling.co.uk/wp-content/uploads/2016/11/slider1.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable fridges</h5>
        <p>From $199</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://s3.medialoot.com/blog-images/WBBD-Image-02.png?mtime=20190213120314" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable phones</h5>
        <p>From $299</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.sonnox.com/sites/default/files/2022-03/ListenHub%20Home%20Page.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable laptops</h5>
        <p>From $399</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.avtex.co.uk/images/TV_Avtex_Slide9_Pro.jpg" className="d-block w-100" alt="..."  style={{height:'350px'}}/>
      <div className="carousel-caption d-none d-md-block">
      <h5>The new Standard under favorable TV's</h5>
        <p>From $599</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

      </div>
    </div>
<div className='row'>
  
    <h3 className='colc fs-7 border-bottom py-3'>Products</h3>
{ProductData.map((a)=>(
      <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-5'> 
  <div className="card border-0 shadow-lg mb-3 mx-auto" style={{width:'100%',height:'100%'}}>
  <div className="row g-0">
    <div className="col-md-6">
      <img src={a.thumbnail} className="img-fluid rounded-start my-4" alt="..." style={{width:'300px',height:'200px'}}/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">{a.title}</h5>
       <Link to={`/details/${a.id}`}>Read More</Link>
       
      </div>
    </div>
  </div>
</div> </div>

))}
   
    </div>
   
  
   
   
    </div>
    </> )
}

export default Home