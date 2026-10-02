import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // Load cart from Django
    const fetchCart = async () => {

        const response = await fetch("http://127.0.0.1:8000/api/Cart/");
        const data = await response.json();

        setCart(data);
    };

    useEffect(() => {
        fetchCart();
    }, []);

    // Add Product
    const addToCart = async(productId)=>{

        await fetch("http://127.0.0.1:8000/api/Cart/",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                product:productId,
                quantity:1

            })

        });

        fetchCart();

    }

    // Increase quantity
    const increaseQuantity = async(item)=>{

        await fetch(`http://127.0.0.1:8000/api/Cart/${item.id}/`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                product:item.product.id,
                quantity:item.quantity+1

            })

        });

        fetchCart();

    }



    // Decrease quantity
    const decreaseQuantity = async(item)=>{

        if(item.quantity===1)
            return;

        await fetch(`http://127.0.0.1:8000/api/Cart/${item.id}/`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                product:item.product.id,
                quantity:item.quantity-1

            })

        });

        fetchCart();

    }

    // Delete
    const removeItem = async(id)=>{

        await fetch(`http://127.0.0.1:8000/api/Cart/${id}/`,{

            method:"DELETE"

        });

        fetchCart();

    }

    return(

        <CartContext.Provider
        value={{

            cart,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeItem,
            fetchCart

        }}
        >

            {children}

        </CartContext.Provider>

    )

}