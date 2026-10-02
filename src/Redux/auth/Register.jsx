
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../thunk/authThunk";


const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => state.auth);

    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        phone: "",
        address: "",
        city: "",
        country: "",
    });


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccessMessage("");

        const result = await dispatch(registerUser(formData));

        if (result?.type === "REGISTER_SUCCESS") {

            setSuccessMessage(
                "Registration successful!..."
            );

            setTimeout(() => {
                navigate("/login");
            }, 1500);
        }
    };


    return (
        <div
            style={{
                width: "100%",
                maxWidth: "550px",
                margin: "40px auto",
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
                Create Account
            </h2>


            <form onSubmit={handleSubmit} autoComplete="off">

                {/* First Name */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        First Name
                    </label>

                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Last Name */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        Last Name
                    </label>

                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Email */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                         autoComplete="new-email"
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Password */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
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
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Confirm Password */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                          autoComplete="new-password"
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Phone */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        Phone
                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Address */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        Address
                    </label>

                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows="3"
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                            resize: "vertical",
                        }}
                    />
                </div>


                {/* City */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        City
                    </label>

                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Country */}
                <div style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "500",
                        }}
                    >
                        Country
                    </label>

                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                            border: "1px solid #aaa",
                            borderRadius: "5px",
                        }}
                    />
                </div>


                {/* Success Message */}
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


                {/* Error Message */}
                {error && (
                    <div
                        style={{
                            color: "red",
                            marginBottom: "15px",
                            textAlign: "center",
                        }}
                    >
                        {typeof error === "object"
                            ? JSON.stringify(error)
                            : error}
                    </div>
                )}


                {/* Register Button */}
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: loading ? "not-allowed" : "pointer",
                        fontSize: "20px",
                        color: "red",
                        backgroundColor: "black",
                    }}
                >
                    {loading
                        ? "Creating Account..."
                        : "Register"}
                </button>

            </form>

        </div>
    );
};


export default Register;

