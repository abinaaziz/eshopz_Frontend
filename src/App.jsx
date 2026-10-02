// import { useState } from 'react'
// import './App.css'
// import ProtectedRoute from './Redux/auth/ProtectedRoute'
// import Register from './Redux/auth/Register'
// import Login from './Redux/auth/Login'
// import Home from './components/Home/Home'
// import Navbar from './components/Navbar/Navbar'
// import { Route,Routes } from 'react-router-dom'
// import Productlist from './components/Productlist/Productlist'

// import Productdetail from './components/Productdetail/Productdetail'
// import Cart from './components/Cart/Cart'
// import Checkout from './components/Checkout/Checkout'
// import Versace from './components/Brands/Versace'
// import Zara from './components/Brands/Zara'
// import Gucci from './components/Brands/Gucci'
// import Prada from './components/Brands/Prada'
// import Calvin from './components/Brands/Calvin'

// function App() {
//   return(
//     <div>
//        <Navbar></Navbar>
    
     
//      <Routes>
//     <Route path='/register' element={<Register />} />
//     <Route path='/login' element={<Login />} />
//    <Route path='/' element={<Home/>}></Route>
//    <Route path='/Productlist' element={<Productlist/>}></Route>
//    <Route path='/productlist/:productId' element={<Productdetail></Productdetail>}></Route>
//    <Route path='/Cart' element={<Cart></Cart>}></Route>
//    <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
//    <Route path='/Versace' element={<Versace></Versace>}></Route>
//   <Route path='/Zara' element={<Zara></Zara>}></Route>
// <Route path='/Gucci' element={<Gucci></Gucci>}></Route>
// <Route path='/Prada' element={<Prada></Prada>}></Route>
// <Route path='/Calvin' element={<Calvin></Calvin>}></Route>


//      </Routes>

//     </div>
//   )
// }
//  export default App;

import './App.css'

import ProtectedRoute from './Redux/auth/ProtectedRoute'
import Register from './Redux/auth/Register'
import Login from './Redux/auth/Login'

import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Productlist from './components/Productlist/Productlist'
import Productdetail from './components/Productdetail/Productdetail'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Versace from './components/Brands/Versace'
import Zara from './components/Brands/Zara'
import Gucci from './components/Brands/Gucci'
import Prada from './components/Brands/Prada'
import Calvin from './components/Brands/Calvin'


function App() {

    return (
        <div>

            <Navbar />

            <Routes>

                {/* PUBLIC ROUTES */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* PROTECTED ROUTES */}

                <Route element={<ProtectedRoute />}>

                    <Route
                        path="/Productlist"
                        element={<Productlist />}
                    />

                    <Route
                        path="/productlist/:productId"
                        element={<Productdetail />}
                    />

                    <Route
                        path="/Cart"
                        element={<Cart />}
                    />

                    <Route
                        path="/Checkout"
                        element={<Checkout />}
                    />

                    <Route
                        path="/Versace"
                        element={<Versace />}
                    />

                    <Route
                        path="/Zara"
                        element={<Zara />}
                    />

                    <Route
                        path="/Gucci"
                        element={<Gucci />}
                    />

                    <Route
                        path="/Prada"
                        element={<Prada />}
                    />

                    <Route
                        path="/Calvin"
                        element={<Calvin />}
                    />

                </Route>

            </Routes>

        </div>
    )
}

export default App