
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/Cartcontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; //Axios is used to communicate with your Django backend.

function Checkout() {
    const { cart } = useContext(CartContext); //This gets the cart from your CartContext.
    const navigate = useNavigate();

    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');

    const [errors, setErrors] = useState({
        address: '',
        mobile: ''
    });

    // Get logged-in user's profile
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/accounts/profile/',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                 console.log("PROFILE RESPONSE:", response.data);
        console.log("TOKEN:", token);


                setAddress(response.data.address || '');
                setMobile(response.data.phone || '');

            } catch (error) {
                console.error('Failed to fetch profile:', error);
                console.log("STATUS:", error.response?.status);
    console.log("PROFILE ERROR:", error.response?.data);
            }
        };

        fetchProfile();
    }, []);

    const subtotal = cart.reduce((total, item) => { //reduce--goes through every cart item and adds its price.
        return total + item.product.p_prize * item.quantity;
    }, 0);

    const shipping = 100;

    const total = subtotal + shipping;

    function handleplaceorder() {
        let newErrors = {
            address: '',
            mobile: ''
        };

        let isValid = true;

        // Address validation
        if (address.trim() === '') {
            newErrors.address = 'Field required';
            isValid = false;
        }

        // Mobile validation
        if (mobile.trim() === '') {
            newErrors.mobile = 'Field required';
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile)) {
            newErrors.mobile = 'Mobile number must be exactly 10 digits';
            isValid = false;
        }

        setErrors(newErrors);

        if (!isValid) {
            return;
        }

        alert("Order placed successfully!");
    }

    return (
        <div>

            <div
                className='container-fluid border border-4'
                style={{ height: "500px", width: "1500px" }}
            >

                <h4 className='mt-3 text-center'>Order Summary</h4>

                <p className='mt-3'>Subtotal: {subtotal}</p>

                <p className='mt-2'>Shipping: {shipping}</p>

                <h5 className='mt-2'>Total: {total}</h5>

                <h4 className='mt-3'>Delivery Details</h4>

                {/* Address */}
                <label className='mt-2 mx-1'>Address : </label>

                <input
                    type='text'
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);

                        if (errors.address) {
                            setErrors({
                                ...errors,
                                address: ''
                            });
                        }
                    }}
                />

                {errors.address && (
                    <div className='text-danger'>
                        {errors.address}
                    </div>
                )}

                <br />

                {/* Mobile */}
                <label className='mt-2 mx-2'>Mobile : </label>

                <input
                    type='text'
                    value={mobile}
                    maxLength='10'
                    onChange={(e) => {
                        const value = e.target.value;

                        if (/^\d*$/.test(value)) {
                            setMobile(value);

                            if (errors.mobile) {
                                setErrors({
                                    ...errors,
                                    mobile: ''
                                });
                            }
                        }
                    }}
                />

                {errors.mobile && (
                    <div className='text-danger'>
                        {errors.mobile}
                    </div>
                )}

                <br />

                <button
                    className='mt-2 me-2 btn btn-success'
                    onClick={handleplaceorder}
                >
                    Place Order
                </button>

                <button
                    className='mt-2 btn btn-danger'
                    onClick={() => navigate(-1)}
                >
                    Cancel
                </button>

            </div>

        </div>
    );
}

export default Checkout;

