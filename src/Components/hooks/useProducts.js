import { useEffect, useState } from "react";

const useProducts=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
    //  fetch('https://limitless-ravine-62748.herokuapp.com/camera')
             fetch('http://localhost:5000/parts')

        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return  [products,setProducts];
}
export default useProducts;
