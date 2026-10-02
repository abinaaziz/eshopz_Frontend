import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Productdetail from '../Productdetail/Productdetail'


function Productcard(props) {
    var prop=props.student1
    const navigate=useNavigate()
  return (
    <div>

         {/* {prop.title} */}
       <div className='card h-100' style={{width:"13rem"}}>

        {/* imageclikable---------- */}
        <Link to ={`/productlist/${prop.id}`}> <img src={prop.p_image} className="card-img-top" alt="" style={{height:'200px',objectFit:'contain'}}/></Link>
 


  {/* <img src={prop.image} className="card-img-top" alt="" style={{height:'100px',objectFit:'contain'}} /> */}
  <div className="card-body" >
    <p className="card-title">{prop.p_title}</p>
    <h6 className='card-price'>₹{prop.p_prize}</h6>


 
  </div>
  <button type="button" class="btn btn-primary" >View detail</button>
 
 
</div>
      
    </div>
  )
}

export default Productcard
