import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
     const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, totalPrice, CutomerName,CustomerEmail, ProductName } = order;

     useEffect(() => {
            const url = `http://localhost:5000/create-payment-intent`;
             if(totalPrice){
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ totalPrice })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.clientSecret) {
                            setClientSecret(data.clientSecret);
                        }
                    });
             }
    
        }, [totalPrice])

     const handleSubmit = async (event) => {
        event.preventDefault();
     

       if (!stripe || !elements) {
            return;
       }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

       const { error, paymentMethod } = await stripe.createPaymentMethod({
           type: 'card',
           card,
       });


    

     setCardError(error?.message || '')
    
             setSuccess('');
           setProcessing(true);
    //     // confirm card payment
       const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
             clientSecret,
            {
                payment_method: {
                    card: card,
                   billing_details: {
                       name: CutomerName,
                       email: CustomerEmail
                    },
                },
         },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
    
         else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')

         
        
    //         //store payment on database
             const payment = {
                order: _id,
                transactionId: paymentIntent.id
             }
             const url = `http://localhost:5000/orders/${_id}`;
             if(payment){
                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(payment)
                })
               .then(res=>res.json())
                  .then(data => {
                 setProcessing(false);
                console.log(data);
                alert('sucessfully add in database')
        })

         }
        }}
    // }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },

                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe||!clientSecret}>
                    Pay
                </button>
            </form>
             {
                cardError && <p className='text-danger'>{cardError}</p>
            }

            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }  
        </>
    );
};


export default CheckoutForm;