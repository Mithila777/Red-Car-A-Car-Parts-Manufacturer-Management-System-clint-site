import React from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location =useLocation();
     const from =location?.state?.from?.pathname|| "/";
    let errorElement;

    if(loading ){
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
    }

    if (user) {
        navigate("/Home");
    }
     const handleSignin =()=>{
         signInWithGoogle()
         .then (()=>{
             navigate(from,{replace:true})
         }
         )
     }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={handleSignin}
                    className=' loginbutton btn btn-dark  d-block mx-auto my-2'>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;