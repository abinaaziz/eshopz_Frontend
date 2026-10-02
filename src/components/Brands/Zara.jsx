import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cartcontext";
import './Versace.css'

function Zara() {
  const navigate=useNavigate()

 return (
    <div>
      


   


{/* topselling--- */}

<div className="container-fluid">
   <h2 className="text-center mt-4" style={{fontFamily:"Bodoni Moda, serif"}}>ZARA</h2>
      
  <div className="row mt-3 d-flex justify-content-around ">
<div className="col-2 mb-4 text-centerd d-flex flex-wrap ">


  <div className='card h-100 mx-1' style={{width:"16rem"}}>

     <img src=".././images/floral.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body   mx-3" >
    <p className="card-title text-center">Floral</p>

     
    <h6 className='card-price text-center'>₹600</h6>
</div>

  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>

  {/* second-- */}

  <div className="col-2 mb-4 text-centerd d-flex flex-wrap gap-2">


  <div className='card h-100 mx-1' style={{width:"16rem"}}>

     <img src=".././images/blueshirt.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body text-center mx-3" >
    <p className="card-title">Blue Shirt</p>
    <h6 className='card-price'>₹900</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>


  {/* third-- */}


  <div className="col-2 mb-4 text-centerd d-flex flex-wrap gap-2">


  <div className='card h-100 mx-1' style={{width:"16rem"}}>

     <img src=".././images/checkshirt.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body text-center mx-3" >
    <p className="card-title">Checkshirt</p>
    <h6 className='card-price'>₹890</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>

  {/* fourth-- */}

  <div className="col-2 mb-4 text-centerd d-flex flex-wrap gap-2">


  <div className='card h-100 mx-1' style={{width:"16rem"}}>

     <img src=".././images/denim.webp" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body text-center mx-3" >
    <p className="card-title">Denim</p>
    <h6 className='card-price'>₹780</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>

  {/* fifth-- */}

  <div className="col-2 mb-4 text-centerd d-flex flex-wrap gap-2">


  <div className='card h-100 mx-1' style={{width:"16rem"}}>

     <img src=".././images/jeans.webp" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body text-center mx-3" >
    <p className="card-title">Denim Pant</p>
    <h6 className='card-price'>₹1000</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>
  

</div>
</div>



    {/* ratings---- */}

    <div className="container-fluid">

      <div className="row">

        <div className="col mt-2 mx-3">
          <h2><u>Rating & Reviews</u></h2>

        </div>

      </div>

      <div className="row">

        <div className="col-3 d-flex justify-content-around">
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star" data-value="4">&#9733;</span>

            <span className="star" data-value="5">&#9733;</span>
          </div>

          <h6 className="card-subtitle mb-2 text-body-black">Sarah M</h6>
          <p className="card-text">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
      </div>
    </div>





    <div className="col-3 d-flex justify-content-around">
      <div className="card" style={{width: "16rem"}}>
        <div className="card-body">
          <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star" data-value="4">&#9733;</span>

            <span className="star" data-value="5">&#9733;</span>
          </div>

          <h6 className="card-subtitle mb-2 text-body-black">Alex K</h6>
          <p className="card-text">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
      </div>
    </div>



      </div>

    </div>

 </div>
  );
}

export default Zara;
