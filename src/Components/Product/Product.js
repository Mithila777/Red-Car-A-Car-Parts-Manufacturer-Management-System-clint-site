import React, { useState } from 'react';
import './Product.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const{_id,name, description,price,img,supplier,quantity}=props.product;
    const [addquantity, setAddQuentity]= useState(6);

    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/Product/${id}`);
    }
    return (
        <div className='product shadow-sm'>
        <div className=''> <img className='w-50 h-10' src={img} alt="" /></div>

            <div className='card-body '>
            <div className='productInfo  bg-dark p-3'>
            <span className='productName'> <p> {name}</p></span> 
             <p>Description:{description}</p> 
             <p>Price:{price}</p>
             <p>Available quentity:{quantity}</p>
             <p>Order quantity:{addquantity}</p>

    <button onClick={() => navigateToProductDetail(_id)} className='btn border-light text-light rounded-0 '>
<FontAwesomeIcon icon={faCartShopping}  /> <span></span> <span> </span>purchase</button>


            </div>
            </div>
        </div>
        
    );
};

export default Product;