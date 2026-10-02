import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {

    // Remove login tokens
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");

    // Go to login page
    navigate("/login", {
      state: {
        message: "You have been logged out. Please login or register to access the app."
      }
    });
  };


  return (
    <div>

      <nav className="navbar navbar-expand bg-body-black">

        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            height: "50px",
            color: "white"
          }}
        >

          <strong>
            <b style={{ height: "30px" }}>
              eSHOPE.co
            </b>
          </strong>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">

                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Home
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/Productlist"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Products
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/Cart"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Cart
                </NavLink>

              </li>

            </ul>


            <form className="d-flex" role="search">

              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />


              {/* LOGIN BUTTON */}

              <button
                className="btn btn-success me-2"
                type="button"
                onClick={handleLogin}
              >
                LogIn
              </button>


              {/* LOGOUT BUTTON */}

              <button
                className="btn btn-danger"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>

            </form>

          </div>

        </div>

      </nav>

    </div>
  )
}

export default Navbar