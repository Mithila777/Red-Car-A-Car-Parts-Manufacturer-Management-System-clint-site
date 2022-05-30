import React, {useState, useEffect } from 'react';
import './Home.css'
import  car   from  '../Images/kindpng_4180048.png';
import ferrarilogo from '../Images/Ferrafi.png';
import ford from '../Images/ford.png';
import audi from '../Images/audi.png';
import bmw from '../Images/bmw.png';
import fiat from '../Images/fiat.png';
import mercedes from '../Images/mercedes.png';
import minicar from '../Images/minicarp.png';
import nissan from '../Images/nissan.png';
import landrover from '../Images/landrover.png';
import Product from '../Product/Product';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faTruckField,faUser,faArrowRight, faDollar,faClock,faScrewdriverWrench, faUserTie} from '@fortawesome/free-solid-svg-icons';
import DisplayReview from '../Review/DisplayReview';




const Home = () => {
  // const [ spinner, setSpinner ] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setSpinner(false), 1000)
  // }, []);


    const [products,setProducts]=useProducts();
    // const myproducts = products.find(Math.max());
    // var  x = age.find(adult);

    let size=3;
    return (
      // !spinner &&  
      <div className='bg-light'>

        <div className='container'>
             <div class="row ">
    <div className="col-md-4 col-sm-4  col-xs-4 col-4 bg-danger text-light">
     <div>
        <p className='home-title'>CAR PARTS FOR YOU</p>
     </div>
    </div>
    <div className="col-md-8 col-sm-8 col-xs-8 col-8 image-border bg-dark">
     <div >
       <div > <img className=' p-5 m-4 img-fluid' src={car} alt="" /></div>
     </div>
    </div>
  </div>
        </div>
            

        <div class="  store-info  text-dark mt-5 px-4">
  <div class="row gx-5 p-4 ">
    <div class="col-sm    border-end ">
      <p className='text-danger '><FontAwesomeIcon icon={faUser} /></p>
       <p>Trusted by over 2k+ Customer</p>
       <p>Since 2010</p>
    </div>
    <div class="col-sm border-end">
      <p className='text-danger'><FontAwesomeIcon icon={ faScrewdriverWrench} /></p>
      <p>350+</p>
      <p> Catagories of Auto Parts</p>
    </div>
    <div class="col-sm    border-end">
      <p className='text-danger'> <FontAwesomeIcon icon={  faStore}/></p>
          <p>  20+</p>
      <p>   Stores in different area </p>
    </div>
    <div class="col-sm  ">
      <p className='text-danger'> <FontAwesomeIcon icon={faUserTie} /></p>
          <p>  420+</p>
      <p>  Different Catagories Employee  </p>
    </div>
  </div>
</div>

     {/* partners */}
 <div className='mt-5'>
 <div class="container  bg-danger">
  <div class="row shadow-lg">
  <div class="col-md-4 text-light ">
      <h2 className='mt-5'>  Business Clints</h2>
      <p> Some of our reguler bissness clients</p>
    </div>
    <div class="col-md-8">
    <div class="row p-3">
  <div class="col ">       
  <div className='h-50 w-50' > <img className='  img-fluid' src={ferrarilogo} alt="" /></div>
</div>
  <div class="col">
  <div className='h-50 w-50' > <img className='  img-fluid' src={ford} alt="" /></div>
</div>
<div class="col">
  <div className='h-50 w-50' > <img className='  img-fluid' src={landrover} alt="" /></div>
</div>
<div class="col">
  <div className='h-50 w-50' > <img className='  img-fluid' src={bmw} alt="" /></div>
</div>
  <div class="w-100"></div>
  <div class="col">
  <div className='h-50 w-50' > <img className='  img-fluid' src={audi} alt="" /></div>
</div>  
<div class="col">
  <div className='h-50 w-50' > <img className='  img-fluid' src={nissan} alt="" /></div>
</div>
<div class="col">
  <div className='h-50 w-50' > <img className='  img-fluid' src={mercedes} alt="" /></div>
</div>
<div class="col">
  <div className='h-50 w-50' > <img className='  img-fluid' src={fiat} alt="" /></div>
</div>
</div>    </div>
   
    
  </div>
</div>



 </div>





         <div>
         <div>
             <h3 class="service-title mt-5"> Products</h3>    

             </div>
             <div className='container'>
              <div className='products '>

              {     

                  
                  products.slice(0,size).map(product=>
                    <Product key={product.id} product ={product}></Product>
                    
                    )
              }
                        
              </div>
              </div>
              
             <div className='mt-5 mb-2 manage-button'>
             <Link to="/AllParts"> 
        <button  className='btn btn-dark  text-light rounded-0'>More Parts <span>  </span>
        <FontAwesomeIcon icon={ faArrowRight}/></button>
                 </Link> 
             </div>
             
         </div> 

      
         <div class="  order-info bg-dark  mt-5 px-4">
  <div class="row gx-5 p-4 ">
  <div class="col-sm  mt-4   ">
       <h3>Why Us ?</h3>
    </div>

    <div class="col-sm    ">
      <p className='text-danger '><FontAwesomeIcon icon={faClock} /></p>
       <p>Quick Order</p>
       <p>You can order item easily</p>
    </div>
    <div class="col-sm ">
      <p className='text-danger'><FontAwesomeIcon icon={faTruckField} /></p>
      <p>Fast Delivary</p>
      <p>Fast Delivary for saving your time</p>
    </div>
    <div class="col-sm  ">
      <p className='text-danger'> <FontAwesomeIcon icon={faDollar} /></p>
          <p> Best Price Offer</p>
      <p> Saving your money to be usefull</p>
    </div>
  </div>
</div>
         

         <div className='coustomerReview text-center mt-5' >
           

           <h2>    Customers Review</h2>
           <p> What our Customer Say about gonna templete </p>
           <DisplayReview></DisplayReview>
   
</div>
         


         </div>






    );
};

export default Home;