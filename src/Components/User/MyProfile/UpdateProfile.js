import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from  '../../../firebase.init';
import './Myprofile.css';
import '../../ProductDetial/ProductDetail.css';
import userImage from '../../Images/user.png';


const UpdateProfile = () => {
    const [user] = useAuthState(auth);
   
    const addUser =event =>{
        event.preventDefault();

        const  UserName=event.target.name.value;
        const  email=user.email;
        const  IserPhone =event.target.phone.value;
        const   UserCITY =event.target.city.value;
        const   UserEducation =event.target.education.value;
        const   linkdinLink =event.target.linkdinLink.value;

       

        const userInfo= {UserName,email,IserPhone, UserCITY,UserEducation,linkdinLink};

        const url = `http://localhost:5000/users/${email}`;
        console.log(userInfo);

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Your Profile successfully !');
            event.target.reset();
            window.location.reload();


        })

    }



    return (
        <div>
          
          <div class="container  userProfile mt-5 ">
          <div class="row gy-5  gx-0 ">
    <div class="col-sm-12 col-xs-12  col-md-4 text-center text-dark productDetail pt-5 ">
         <img className='w-4 h-4 img-fluid' src={userImage} alt="" />
         <p>{user.displayName}</p>
              <p> {user.email}</p>
              <p> {user.UserEducation}</p>
              <p> {user.UserPhone}</p>
              <p> {user.UserCITY}</p>


         </div>    
        
             <div class="col-sm-6 col-xs-6 col-md-4 text-center border productDetialInfo">
              <p>Update Your  Profile</p>
              
            
               
                <div className=' addUserInfo '>

               <form onSubmit={addUser}>
               <input  className='rounded-0 p-2' type="text" name="name" placeholder='Your Name' required />
               <input  className='rounded-0 p-2' type="text" name="phone" placeholder='Your Phone Number' required />
               <input  className='rounded-0 p-2' type="text" name="education" placeholder='Your Education' required />
               <input  className='rounded-0 p-2'type="text" name="city" placeholder=' Your City' required />
               <input  className='rounded-0 p-2'type="url" name="linkdinLink" placeholder=' LinkedIn profile link' required />

               <input className='form-submit rounded-0 p-2' type="submit" value="Submit" />
             </form>
            </div>
             </div>   
  </div>

  

</div>


            
        </div>
    );
};

export default UpdateProfile;