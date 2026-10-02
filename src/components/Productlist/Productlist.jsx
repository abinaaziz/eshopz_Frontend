import React, { useEffect, useState } from 'react'
import Productcard from '../Productcard/Productcard'



function Productlist() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/Product") 
        .then(response=>response.json())
        .then(result=>{
        console.log(result)
        setData(result)
    })
     .catch(error => console.log(error));

    },[])

  return (

    <div>

        <div className='container-fluid'>
            <h1 className='text-center'>Product List</h1>
            <div className='row'>

                <div className='col  p-3 mb-4 text-centerd d-flex flex-wrap gap-2'>
                    {

                    data.map((p)=>{
                        return(
                            <Productcard student1={p}></Productcard>
                        )
                    })
                }

                </div>


            </div>


        </div>
      
    </div>
  )
}

export default Productlist




