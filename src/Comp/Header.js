import React from "react";
import { Link } from "react-router-dom";
import Catdata from "../Data/Catdata";

function Header() {
  return (
    <>
      <header className="text-light backg d-md-block">
        <div className="container">
          <div className="row  d-flex align-items-center justify-content-center">
            <div className="col-lg-2 col-md-3 d-none d-lg-block d-md-block">
              <img
                className="w-50"
                src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-Background-PNG-Image.png"
              />
            </div>
            <div className="col-lg-7 my-3 col-md-6 col-12 d-flex align-items-center justify-content-center ">
              <div className="box bg-light px-4 py-3 m-1 d-flex round" style={{minWidth:'30px'}}>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="btn-group pt-2">
                      <button
                        className="btn backg btn dropdown-toggle text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        Categories
                      </button>
                  
                        <ul className="dropdown-menu text-center li">
                      
                        {Catdata.map((q)=>(
     <li className='list-group-item'><Link className="text-decoration-none" to={`/cat/${q.id}`}>{q.catName}</Link></li>
    ))}
                       
                      </ul>
                     
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="input-group mb-3 pt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search product"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-secondary backg text-white"
                        type="button"
                        id="button-addon2"
                      >
                        <i class="bi bi-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
              <div className="row">
                <div className="col-lg-6">
                
                  <li className="nav-item dropdown list-unstyled danger">
                    <a
                      className="nav-link dropdown-toggle hey"
                      role="button"
                      data-bs-toggle="dropdown"
                     
                    >
                      Language
                    </a>
                    <ul className="dropdown-menu danger text-center">
                      <li>
                        <a className="dropdown-item">English</a>
                      </li>
                      <li>
                        <a className="dropdown-item">????????????????</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Portugu??s</a>
                      </li>
                      <li>
                        <a className="dropdown-item"></a>????????????
                      </li>
                    </ul>
                  </li>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled d-flex gap-3">
                    <li className="gap-3">
                      <i class="bi bi-person-fill"></i>
                    </li>
                    <li className="gap-3 d-flex">
                     <span className="danger"> <Link to='/contact' className="text-decoration-none">LOGIN</Link></span>or
                      <span className="danger"><Link to='/contact' className="text-decoration-none"> REGISTER</Link></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
