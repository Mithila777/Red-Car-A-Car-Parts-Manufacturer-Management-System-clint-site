import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from  '../../../firebase.init';
import './Myprofile.css';
import '../../ProductDetial/ProductDetail.css';
import userImage from '../../Images/user.png';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const[userInfo,setUserInfo]=useState({});
    const  UserName=user.displayName;
        const  UserEmail=user.email;

        useEffect(()=>{
            fetch(`http://localhost:5000/users/${UserEmail}`)

       .then(res=>res.json())
       .then(data=>setUserInfo(data))
   },[]);

    const addUser =event =>{
        event.preventDefault();

       
        const  IserPhone =event.target.phone.value;
        const   UserCITY =event.target.city.value;
        const   UserEducation =event.target.education.value;
        const   linkdinLink =event.target.linkdinLink.value;

       

        const users= {UserName,UserEmail,IserPhone, UserCITY,UserEducation,linkdinLink};
        console.log(users);

        const url = `http://localhost:5000/users`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Your order Placed Sucessfully!');
            event.target.reset();

        })

    }
    const navigate = useNavigate();

    const navigateToUpdateProfile = UserEmail =>{
        navigate(`/UpdateProfile/${UserEmail}`);
    }


    return (
        <div>
          
          <div class="container  userProfile mt-2 ">
          <div class="row gy-5  gx-0 ">
    <div class="col-sm-12 col-xs-12  col-md-4 text-center text-dark productDetail pt-3 ">
         <img className='w-4 h-4 img-fluid' src={userImage} alt="" />
              <p>Name:{user.displayName}</p>
              <p>Email: {user.email}</p>
              <p>Phone:{userInfo.IserPhone}</p>
              <p>Education:{userInfo.UserEducation}</p>
              <p>City:{userInfo.UserCITY}</p>
           <p> <a href={`${userInfo.linkdinLink}`}class="btn btn-light rounded-0 border border-dark active" role="button" aria-pressed="true">Linkdin Link</a></p>
              <button onClick={() => navigateToUpdateProfile(UserEmail)} className='btn  m-4 mt-2 mb-2 bg-dark text-light rounded-0 '>
      <span></span> <span> </span>Update</button>


         </div>    
        
             <div class="col-sm-6 col-xs-6 col-md-4 text-center border productDetialInfo">
              <p>Add more Infomation</p>
              
            
               
                <div className=' addUserInfo '>

               <form onSubmit={addUser}>
              <input  className='rounded-0 p-2' type="text" name="education" placeholder='Your Education' required />
               <input  className='rounded-0 p-2' type="text" name="phone" placeholder='Your Phone Number' required />
               <input  className='rounded-0 p-2'type="text" name="city" placeholder=' Your City' required />
               <input  className='rounded-0 p-2'type="url" name="linkdinLink" placeholder=' LinkedIn profile link' required />

               <input className='form-submit rounded-0 p-2 mt-0' type="submit" value="Submit" />
             </form>
            </div>
             </div>   
  </div>

  

</div>


            
        </div>
    );
};

export default MyProfile;