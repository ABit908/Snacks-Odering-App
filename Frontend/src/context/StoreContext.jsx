import { useEffect } from "react";
import { createContext, useState } from "react";
// import { food_list } from "../assets/assets";

export const StoreContext=createContext(null) 
// this is Context API

const StoreContextProvider =(props)=>{

    const [cartItems,setCartItems]=useState({});

    // while connecting with backend
    const url="http://localhost:4000"
    const [token,setToken]=useState("")

// showing only those data which is stored in the database
        const [food_list,setFoodList]=useState([]);





    const addToCart =(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    /*// useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])*/
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item);
            totalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    // fetching food list from the database 










    // After refreshing we logout from the page so for stopping this I'm writing this function
    useEffect(()=>{
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
    },[])






    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;