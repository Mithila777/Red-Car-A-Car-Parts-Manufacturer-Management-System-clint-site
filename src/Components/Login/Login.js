import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../hooks/useToken';
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect( () =>{
      if (token) {
          navigate(from, { replace: true });
      }
  }, [token, from, navigate])

  if (loading || gLoading) {
      return <p>Loading ..</p>;
  }

  if(error || gError){
      signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
  }

  const onSubmit = data => {
      signInWithEmailAndPassword(data.email, data.password);
  }

    return (
        <div className=''>
            <div>
                <div  className='registration'>
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div >
                            
                            <input
                                type="email"
                                placeholder="Your Email"
                               
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div >
                            
                            <input
                                type="password"
                                placeholder="Password"
                                className=""
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn bg-dark text-light' type="submit" value="Login" />
                    </form>
                    <p><small>Don't Register yet <Link className='text-primary' to="/Registration">Create New Account</Link></small></p>
                    <div className="divider ">OR</div>
                    <button 
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline border border-dark"
                    >Login with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;