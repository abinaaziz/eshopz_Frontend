import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cartcontext";
import './Versace.css'

function Versace() {
  const navigate=useNavigate()

 return (
    <div>
      


    <div className="container-fluid">

      <h2 className="text-center mt-4" style={{fontFamily:"Cinzel, serif"}}>VERSACE</h2>
        
        <div className="card mt-3" >
  <div className="row ">
    <div className="col-md-4">
      <img src=".././images/blueshirt.jfif" className="img-fluid rounded-start mx-3 mt-3 mb-3" alt="..." 
        style={{  objectFit: "contain" ,borderRadius:"5px", width:"300px"}}/>


    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h2 className="card-title"><strong>Blue Shirt</strong></h2>

 <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>
            <span className="star outline">&#9734;</span>
            <span style={{height: "5px", color: "black"}}>4.5</span>
          </div>

         <h5 className="card-price mt-2">₹900</h5>
        <h6 className="card-category mt-3">Premium Solid Shirt Full Sleeve for Men</h6>

        {/* <p className="line"></p> */}

        <div className="border border-bottom border-secondary mt-4 " style={{width: "650px"}}></div>


        <p className="fw-normal mt-2   text-body-secondary">Select Colors</p>
<div className="mt-3">


        <span className="rounded-circle   px-2 me-2" style={{backgroundColor:"brown", color:"yellow"}}></span>
         <span className="rounded-circle   px-2 me-2" style={{backgroundColor:"green", color:"yellow"}}></span>
           <span className="rounded-circle   px-2 " style={{backgroundColor:"black", color:"yellow"}}></span>

</div>

        {/* line-- */}

         <div className="border border-bottom border-secondary mt-3 " style={{width: "650px"}}></div>



         <p className="fw-normal  text-body-secondary mt-3">Choose Size</p>
         
         <div className="container-fluid mt-2">

            <div className="row">
                <div className="col-2 ">
                    <p className="  rounded-pill border border-2 bg-body-tertiary  text-body-secondary text-center ">small</p>

                </div>

                 <div className="col-2">
                    <p className="rounded-pill border border-2 bg-body-tertiary  text-body-secondary text-center">Medium</p>

                </div>

                 <div className="col-2">
                    <p className="rounded-pill border border-2 bg-body-tertiary  text-body-secondary text-center">large</p>

                </div>

                 <div className="col-2">
                    <p className="rounded-pill border border-2 bg-body-tertiary  text-body-secondary text-center">x-large</p>

                </div>

            </div>

         </div>



<button
    className=" mt-4 me-2 btn btn-dark"
    // style={{ height: "30px", width: "250px" }}
    onClick={()=>navigate('/Cart')}
>
    Add to Cart
</button>

<button  className="   btn btn-danger mt-4"  onClick={()=> navigate(-1)}>Cancel</button>


     
      </div>
    </div>
  </div>
</div>

       

    </div>

{/* topselling--- */}

<div className="container-fluid">
   <h2 className="text-center mt-4" style={{fontFamily:"Cinzel, serif"}}>VERSACE PRODUCTS</h2>
      
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

export default Versace;
