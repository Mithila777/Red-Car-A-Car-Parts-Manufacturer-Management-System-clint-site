import React from 'react';
import { useEffect, useState } from "react";

const useOrderhooks = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
    //  fetch('https://limitless-ravine-62748.herokuapp.com/camera')
             fetch('http://localhost:5000/orders')

        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);
    return  [orders,setOrders];
};

export default useOrderhooks;