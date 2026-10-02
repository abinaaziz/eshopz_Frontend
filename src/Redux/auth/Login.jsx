

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";// redux hooks--Used to send an action to Redux.,Used to read data from Redux.
import { useNavigate, useLocation } from "react-router-dom";

import { loginUser } from "../thunk/authThunk";


const Login = () => {

    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const location = useLocation();

    const { loading, error } = useSelector((state) => state.auth);

    const [successMessage, setSuccessMessage] = useState("");


    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear old success message when user changes input
        setSuccessMessage("");
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccessMessage("");

        const result = await dispatch(loginUser(formData)); //Send this action/process to Redux."


        if (result?.type === "LOGIN_SUCCESS") {

            setSuccessMessage(
                "Login successful! Welcome."
            );

            // Wait so user can see the success message
            setTimeout(() => {
                navigate("/");
            }, 1500);
        }

    };


    return (
        <div
            style={{
                width: "100%",
                maxWidth: "450px",
                margin: "60px auto",
                padding: "30px 35px",
                border: "1px solid #6b6969",
                borderRadius: "10px",
                boxSizing: "border-box",
            }}
        >

            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "30px",
                }}
            >
                Login
            </h2>


            {/* Message from ProtectedRoute */}

            {location.state?.message && !successMessage && (
                <div
                    style={{
                        color: "red",
                        marginBottom: "15px",
                        textAlign: "center",
                        fontWeight: "500",
                    }}
                >
                    {location.state.message}
                </div>
            )}


            <form onSubmit={handleSubmit} autoComplete="off">

                {/* Email */}

                <div style={{ marginBottom: "20px" }}>

                    <label
                        style={{
                            display: "block",
                            marginBottom: "7px",
                            fontWeight: "500",
                        }}
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your email"
                         autoComplete="new-email"
                        required
                        style={{
                            width: "100%",
                            padding: "11px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                            fontSize: "15px",
                        }}
                    />

                </div>


                {/* Password */}

                <div style={{ marginBottom: "20px" }}>

                    <label
                        style={{
                            display: "block",
                            marginBottom: "7px",
                            fontWeight: "500",
                        }}
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                         autoComplete="new-password"
                        placeholder="Enter your password"
                        required
                        style={{
                            width: "100%",
                            padding: "11px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                            fontSize: "15px",
                        }}
                    />

                </div>


                {/* SUCCESS MESSAGE */}

                {successMessage && (
                    <div
                        style={{
                            color: "green",
                            marginBottom: "15px",
                            textAlign: "center",
                            fontWeight: "500",
                        }}
                    >
                        {successMessage}
                    </div>
                )}


                {/* ERROR MESSAGE */}

                {error && !successMessage && (
                    <div
                        style={{
                            color: "red",
                            marginBottom: "15px",
                            textAlign: "center",
                            fontWeight: "500",
                        }}
                    >
                        Login not successful. Please check your email and password.
                    </div>
                )}


                {/* LOGIN BUTTON */}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "20px",
                        cursor: loading
                            ? "not-allowed"
                            : "pointer",
                        backgroundColor: "black",
                        color: "red"
                    }}
                >
                    {loading
                        ? "Logging in..."
                        : "Login"}
                </button>


                {/* REGISTER LINK */}

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                    }}
                >

                    <span>
                        Don't have an account?{" "}
                    </span>

                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        style={{
                            border: "none",
                            background: "none",
                            padding: 0,
                            cursor: "pointer",
                            color: "blue"
                        }}
                    >
                        Register
                    </button>

                </div>

            </form>

        </div>
    );
};


export default Login;

