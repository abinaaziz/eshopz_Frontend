import React, { useContext } from 'react'  //This allows your Cart component to access data from your CartContext.
import { useEffect, useState } from "react";
import { CartContext } from '../../Context/Cartcontext';

import { useNavigate } from 'react-router-dom';


function Cart() {

    const {

cart,
increaseQuantity,
decreaseQuantity,
removeItem

}=useContext(CartContext) //accessing them directly using useContext().
const navigate = useNavigate();

function handlecheckout(){
    navigate('/Checkout')
}



    return (
        <div>
      
            <div className="container mt-4">
            <h2 className='mt-3'>Your Cart</h2>
{/* cart ist the state cart */}
            {cart.map(item => (
                <div
                    key={item.id}
                    className="card mb-3 p-3 d-flex flex-row align-items-center"
                >
                    <img
                        src={item.product.p_image}
                        alt={item.product.p_title}
                        style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "contain"
                        }}
                    />

                    <div className="ms-4">
                        <h4>{item.product.p_title}</h4>

                        <h5 className='mt-3'>₹ {item.product.p_prize}</h5>

                        {/* <p>Quantity: {item.quantity}</p> */}

                        {/* plus and minus--- */}

                        {/* <div className=' mt-3 d-flex align-items-center   '>
    <button className='px-1 mx-1   'onClick={()=>decreaseQuantity(item)} >
        -
    </button>
    <h6>{item.quantity}</h6>

<button className='px-1 mx-2 py-1 ' onClick={()=>increaseQuantity(item)}>
    +
    </button>


</div>  */}


<div className='btn btn-secondary  mt-3 d-flex  justify-content-center align-items-center me-2' style={{height:"50px", width:"150px"}}>

    <button className='btn btn-secondary  d-flex align-items-center mt-1'  onClick={()=>decreaseQuantity(item)}> <b>-</b> </button>
     <h6>{item.quantity}</h6>
    <button  className='btn btn-secondary  d-flex align-items-center mt '  onClick={()=>increaseQuantity(item)}> <b>+</b> </button>

</div>



                        <h5 className='mt-3'>Total: ₹ {item.totalprize}</h5>
                    </div>




 <button
    className="btn btn-danger mt-3 d-flex justify-content-end me-2 position-absolute top-0 end-0"
    onClick={() => removeItem(item.id)}
>
   <img src='.././images/delete.png' height={"25px"}/>
</button>

               </div>
            ))}
<button  className="btn btn-danger mt-3 me-2" onClick={handlecheckout}>Proceed to Checkout</button>

<button  className=" btn btn-danger mt-3"  onClick={()=> navigate(-2)}>Cancel</button>



 
           
            </div>



        </div>
    );
}

export default Cart;
      
   
