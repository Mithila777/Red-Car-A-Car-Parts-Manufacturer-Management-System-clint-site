import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from  '../../firebase.init'

import './ProductDetail.css'
import { parseActionCodeURL } from 'firebase/auth';

const ProductDetail = () => {
    const { Id } = useParams();
    const [parts, setParts] = useState({});
    const [error, setError] = useState('');
    const[availableQuantity, setAvailableQuantity]= useState(0);
    const[orderQuentity, setorderQuentity]=useState(6);
    const [user] = useAuthState(auth);
    useEffect( () =>{
        const url = `http://localhost:5000/parts/${Id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setParts(data));

    }, []);
    const preQuentity = parseInt(parts.quantity);
        const name = parts.name;
        const description = parts.description;
        const price = parts.price;
        const img = parts.img;
        useEffect( () =>{
            if(preQuentity)
            setAvailableQuantity(preQuentity);
            
    
        }, [preQuentity]);
        
    //handle updateOrderQuentity error

    const handleOrderQuentity =event =>{
        const newOrderquantity = parseInt(event.target.value);
        console.log(user)
        
        if(newOrderquantity < 6){

            setError( 'Minimum order Quentity is six.');
            event.target.value='';
             }
   
           if(newOrderquantity > preQuentity)
   
           {
                setError('Products are not  available');
                event.target.value='';
         }
   }

   // update order quentity
    const updateOrderQuentity =event =>{
         setError('') ; 
        event.preventDefault();
        const newOrderquantity =parseInt(event.target.orderQuentity.value);
        
         setorderQuentity(newOrderquantity);
         setAvailableQuantity(preQuentity-newOrderquantity);
         event.target.orderQuentity.value='';
        
    }
        
    //add orders
    const handaleOrder =event =>{
        event.preventDefault();

        const  CutomerName=user.displayName;
        const  CustomerEmail=user.email;
        const  CustomerPhone =event.target.name.value;
        const  CustomerCITY =event.target.city.value;
        const  CustomerArea =event.target.area.value;
        const  ProductName =parts.name;
        const  ProductUnitPrice =parts.price;
        const  ProductOrderQuentity =orderQuentity;
        const  ProductImage =parts.img;
        const status ='unpaid';
        const totalPrice= parseInt(ProductUnitPrice)*parseInt(ProductOrderQuentity);

        const orders= {CutomerName,CustomerEmail,CustomerPhone, CustomerCITY,CustomerArea,ProductName,ProductUnitPrice,
             ProductOrderQuentity,ProductImage,status,totalPrice};
        console.log(orders);

        const url = `http://localhost:5000/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Your order Placed Sucessfully!');
            event.target.reset();

        })

    }

    return (
        <div>
          
          <div class="container mt-5 ">
          <div class="row gy-5 gx-0">
    <div class="col-sm-6 col-xs-6  col-md-4 productDetail pt-5 ">
         <img className='w-10 h-6 img-fluid' src={parts.img} alt="" />
         </div>    
    <div class="col-sm-6 col-xs-6 col-md-4 productDetialInfo ">

             <p className='text-center'> {parts.name}</p>
              <p>Description:{parts.description}</p> 
              <p>Available Quentity:{availableQuantity}</p>
              <p>Your order quantity: {orderQuentity} </p>
              <p> Unit Price:{parts.price}</p>

            
                
                <div className=' addquantity '>

               <form onSubmit={updateOrderQuentity}>
               <input className='w-50' onBlur={handleOrderQuentity} type="text" name="orderQuentity" placeholder=' Order Quantity' required />
               <input className='form-submit w-40' type="submit" value="Update" />
               <p className='text-danger'>{error}</p>

             </form>
            </div>
             </div>    
             <div class="col-sm-6 col-xs-6 col-md-4 text-center border productDetialInfo">
              <p>{user.displayName}</p>
              <p> {user.email}</p>
            
               
                <div className=' addUserInfo '>

               <form onSubmit={handaleOrder}>
               <input  className='rounded-0 p-2' type="text" name="phone" placeholder='Your Phone Number' required />
               <input  className='rounded-0 p-2'type="text" name="city" placeholder=' Your City' required />
               <input  className='rounded-0 p-2'type="text" name="area" placeholder=' Your Area' required />

               <input className='form-submit rounded-0 p-2' type="submit" value="Place order" />
             </form>
            </div>
             </div>   
  </div>

  
            


</div>


            
        </div>
    );
};

export default ProductDetail;