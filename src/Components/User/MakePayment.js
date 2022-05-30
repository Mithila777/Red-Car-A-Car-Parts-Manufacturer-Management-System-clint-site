import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, {useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4kHDL6g3kdY5jDVM61cd703yfKvSy0volVLMZiKJSb6f89U7Y3hF3TKvEy9dhZYK8As6WzkxMvgmvWE1T7n7w200qBS2bqoE');

const MakePayment = () => {
    const { Id } = useParams();
    
    const [order, setOrder]=useState({ });
   
    useEffect( () =>{
        const url = `http://localhost:5000/orders/${Id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setOrder(data));

    }, []);
    

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.CutomerName}</p>
                    <h2 class="card-title">Please Pay for {order.ProductName}</h2>
                    <p>Please pay: ${order.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default MakePayment;