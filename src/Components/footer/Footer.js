import React from 'react';
import './Footer.css'
import  sociallink from '../Images/kindpng_4308009.png'
const Footer = () => {
    return (
        <div>
           <footer class="mt-5  text-white">
               <h4>RedCar.com</h4>

<div class="row ">
  
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div class="d-flex pt-4 justify-content-center">
       <p class =" text-center p-5"> Copyright   <i class="fa fa-copyright"></i>2022 all rights reserved | Developed by Mithila Moni </p>
    </div></div>

    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
     <div class="d-flex justify-content-center align-items-center p-4">
     <div >
      <p class="text-center">Connected with Us.</p>
      <div >
         <img className=" sociallink " src={sociallink} alt=""/>

      </div>
        
     </div>
     </div>
     </div>
      
    </div>
  
  


 
</footer>
        </div>
    );
};

export default Footer;