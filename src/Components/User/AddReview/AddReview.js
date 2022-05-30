
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from  '../../../firebase.init';

import '../../ProductDetial/ProductDetail.css';
import userImage from '../../Images/user.png';


const MyProfile = () => {
    const [user] = useAuthState(auth);
   
    const addReview =event =>{
        event.preventDefault();

        const  UserName=user.displayName;
        const  UserEmail=user.email;
        const  userOpinion =event.target.opinion.value;
        const   UserRating =event.target.rating.value;
        

       

        const reviews= {UserName,UserEmail,userOpinion, UserRating};

        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Your reviews added Sucessfully!');
            event.target.reset();

        })

    }



    return (
        <div>
          
          <div class="container  userProfile mt-5 ">
          <div class="row gy-5 p-3  gx-0 ">
    <div class="col-sm-12 col-xs-12  col-md-4 text-center text-dark productDetail pt-5 ">
         <img className='w-4 h-4 img-fluid' src={userImage} alt="" />
         <p>{user.displayName}</p>
              <p className='pb-4'> {user.email}</p>
         </div>    
        
             <div class="col-sm-6 col-xs-6 col-md-4 bg-danger text-center border productDetialInfo">
              <p>Add a review</p>
              
            
               
                <div className=' addUserInfo '>

               <form onSubmit={addReview}>
              <input  className='rounded-0 p-4' type="text" name="opinion" placeholder='Your Opinion' required />
               <input  className='rounded-0 p-2' type="text" name="rating" placeholder='Your rate Out of Five' required />
               

               <input className='form-submit bg-danger rounded-0 p-2' type="submit" value="Submit" />
             </form>
            </div>
             </div>   
  </div>

  

</div>


            
        </div>
    );
};

export default MyProfile;