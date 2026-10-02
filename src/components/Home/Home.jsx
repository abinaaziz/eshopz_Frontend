import React from 'react'
import './Home.css'
import { Link, Links, useNavigate } from 'react-router-dom'


 function Home() {
  const navigate=useNavigate()
   
  return (
    
    <div>


<div className="container-fluid">
  <div className="row">
    <div className="col-7 mt-2 me-1">
      <img
        src="../images/b1.png"
        className="w-100 mx-5"
        alt="Banner"
        height="500px"
      />
    </div>

    <div className='col-4 mt-2'>
      <img src='../images/justforyou.jfif'
       className="w-100 mx-5"
        alt="Banner"
        height="500px"
      />
      

    </div>

   
  </div>
  </div> 



  {/* blk row---- */}



  <div className='container-fluid'>
    <div className='row mx-5' style={{backgroundColor:"black" , height:"70px", borderRadius:"10px"}}>

      <div className='col-2 mt-3 mx-5' >
       <Link to={'/Versace'} style={{textDecoration: "none"}}> <p style={{color:"white",fontFamily:"Cinzel, serif" ,fontSize:"20px"}} className='px-4'>VERSACE</p></Link>
    
      </div>

        <div className='col-2 mt-3'>
        <Link to={'/Zara'} style={{textDecoration: "none"}}><p style={{color:"white",fontFamily:"Bodoni Moda, serif" ,fontSize:"20px"}}>ZARA</p></Link>
      </div>

      <div className='col-2 mt-3'>
      <Link to={'/Gucci'} style={{textDecoration: "none"}}> <p style={{color:"white",fontFamily:"Didot, serif" ,fontSize:"20px"}}>GUCCI</p></Link> 
      </div>

      <div className='col-2 mt-3'>
      <Link to={'/Prada'} style={{textDecoration: "none"}}> <p style={{color:"white",fontFamily:"Didot, serif" ,fontSize:"20px"}}>PRADA</p></Link> 
      </div>

        <div className='col-2 mt-3'>
       <Link  to={'/Calvin'} style={{textDecoration: "none"}}> <p style={{color:"white",fontFamily:"Didot, serif" ,fontSize:"20px"}}>CALVINKLIEN</p></Link>
      </div>

    </div>

  </div>

  {/* <!-- secondrow-- --> */}
 <div className="container-fluid">
  <div className="row">
    <h1 className="text-center mt-3"><strong>NEW ARRIVALS</strong></h1>
  </div>

  {/* <!-- third--- --> */}

  <div className="row mt-3 d-flex justify-content-around gap-2 ">
   
    
    {/* ------------------------ */}

     <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around gap-2">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/lavender.webp" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Frock</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹1500</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>



{/* 1st */}
     <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around gap-2">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/jeans.webp" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Denim Pant</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹1000</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>



  {/* 2nd-- */}
   <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around gap-2">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/cargo.webp" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Cargo</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹160</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>

  {/* 3rd */}
   <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around ">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/baggy.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Baggy</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹500</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>
  {/* 4th-- */}
   <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/shirt.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Shirt</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹560</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>

    {/* -------------- */}
  </div>







  {/* <!-- fourth---- --> */}

  <div className="row mt-3">
    <div className="col-12 d-flex justify-content-center">
      <p className="border border-dark-subtle rounded-pill text-center py-2 px-5">
        View All
      </p>
    </div>
  </div>

  {/* <!-- fifth----topselling --> */}

  <div className="row">
    <h1 className="text-center mt-3"><strong>TOP SELLING</strong></h1>
  </div>

  {/* <!-- sixth----cards --> */}

  <div className="row mt-3 d-flex justify-content-around gap-2">

       <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around gap-2">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/t1.webp" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Balck t-Shirt</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹800</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>



{/* 1st */}
     <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around gap-2">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/t2.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Kids Shirt & Pant</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹1000</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>



  {/* 2nd-- */}
   <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around gap-2">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/t3.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">T- Shirt & Trouser</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹760</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>

  {/* 3rd */}
   <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around ">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/tshirt1.avif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">Camel T-Shirt</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹1500</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>
  {/* 4th-- */}
   <div className="col-2  mt-3 mb-4 text-centerd d-flex justify-content-around">


  <div className='card h-100 mx-1' style={{width:"18rem"}}>

     <img src="../images/whiteshirt.jfif" className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/>
 


  <div className="card-body  mx-3" >
    <p className="card-title">White Shirt</p>
     <div className="star-rating">
            <span className="star" data-value="1">&#9733;</span>
            <span className="star" data-value="2">&#9733;</span>
            <span className="star" data-value="3">&#9733;</span>
            <span className="star outline">&#9734;</span>

            <span className="star outline">&#9734;</span>
            <span style={{height: "1px", color: "black"}}>4.5</span>
          </div>
    <h6 className='card-price'>₹1060</h6>

</div>
  <button type="button" class="btn btn-primary" onClick={()=>navigate('/Productlist')}>View detail</button>
 


</div>
  </div>
  
  </div>

  {/* <!-- seven ---- --> */}

  <div className="row mt-3">
    <div className="col-12 d-flex justify-content-center">
      <p className="border border-dark-subtle rounded-pill text-center py-2 px-5">
        View All
      </p>
    </div>
  </div>

  {/* <!-- eight---rating --> */}

  <div className="row">
    <div className="col-10">
      <h2 className="mx-5"><strong>OUR HAPPY CUSTOMERS</strong></h2>
    </div>
  </div>

  <div className="row mt-3">
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

          <h6 className="card-subtitle mb-2 text-body-black">Sona J</h6>
          <p className="card-text">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
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

          <h6 className="card-subtitle mb-2 text-body-black">Ashish</h6>
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

  {/* <!-- footer --> */}

  <div
    className="row mx-5 mt-3"
    style={{backgroundColor: "black", borderRadius: "15px"}}
  >
    <div className="col-4 mt-3">
      <h3 className="my-2" style={{color: "white"}}>
        <strong> STAY UPTO DATE ABOUT OUR LATEST OFFERS</strong>
      </h3>
    </div>

    <div
      className="col-12 col-md-6 col-lg-7 mt-3 justify-content-center align-items-center"
    >
      <input
        type="email"
        className="form-control rounded-pill text-center"
        placeholder="Enter your email"
        style={{maxWidth: "400px"}}
      />

      <div className="row mt-2 my-2">
        <div className="col-12 col-md-6 col-lg-10">
          <input
            type="text"
            className="form-control rounded-pill text-center"
            placeholder="Subscribe to Newsletter"
            style={{maxWidth: "400px"}}
          />
        </div>
      </div>
    </div>
  </div>


{/* <!-- last footer--- --> */}

 <div className="row mt-3 d-flex ">

  {/* <!-- firstcol --> */}

  <div className="col-2 mx-5 " >
    <h4><strong>eSHOP.Co</strong></h4>

    <div className="row" >

      <div className="col-9">
        <p style={{ color: "gray"}}>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

      </div>

    </div>

  </div>

  {/* <!-- secondcol--- --> */}

  <div className="col-2 " >

    <b>COMPANY</b>

    <div className="row " >

      <div className="col-2 " >
        <span>About</span><br />
        <span>Features</span><br />
        <span>Work</span><br />
        <span>Careers</span><br />

      </div>

    </div>

  </div>

  {/* <!-- thirdcol-- --> */}

  <div className="col-2  " >

    <b>HELP</b>

    <div className="row" >
      <div className="col-9 " >
        <span> Customer Support</span><br />
        <span>Delivery Details</span><br />
        <span>Terms & Conditions</span><br />
        <span>Privacy Policy</span><br />

      </div>

    </div>

  </div>


  {/* <!-- fourthcol-- --> */}
   
<div className="col-2">

    <b>FAQ</b>

    <div className="row" >
      <div className="col-8" >
        <span> Manage Deliveries</span><br />
        <span>Account</span><br />
        <span>Orders</span><br />
        <span>Payments</span><br />

      </div>

    </div>

  </div>

  {/* <!-- fifthcol-- --> */}
  
<div className="col-3">

    <b>Resources</b>

    <div className="row">
      <div className="col-10">
        <span>  Free eBooks</span><br />
        <span>Development Tutorial</span><br />
        <span>How to - Blog</span><br />
        <span>Youtube Playlist</span><br />

      </div>

    </div>

  </div>

</div>


</div>

      
    </div>
  )
}

export default Home