import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    
    if(loading)
    {
        return <p>Loading...</p>;

    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if(!user)
    {
        
    }

    if (!user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email is not verified </h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
            className='btn text-dark border-dark rounded-0 '
                onClick={async () => {
                    await sendEmailVerification();
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }

    return children;
};

export default RequireAuth;