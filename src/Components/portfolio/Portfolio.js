import React from 'react';
import programmer from '../Images/programmer.png';
import './Portfolio.css'


const Portfolio = () => {
    return (
             <div class="  container mt-5 ">
          <div class="row  gy-5 gx-0">
    <div class="col-sm-6 col-xs-6 text-start portfolio col-md-6  pt-5 ">
         <p>Hi,</p>
         <h1 className='text-danger font-bold  font-size-600 text-start'> This is  MITHILA MONI</h1>
          <p>web developer</p>
          <p>Email: mithilampmi157@gmail.com</p>


         </div>    
    <div class="col-sm-6 col-xs-6 col-md-6 ">
           
              <div>
              <img className='w-50 mt-4 h-50 img-fluid' src={programmer} alt="" />

              </div>
              </div>
              </div>


            
              <div className='mt-4 mb-5'>

             <h3>
             </h3>
         <div class="row mt-4  shadow">
    <div class="col-sm    border-end ">
       <p>Front-End</p>
       <p> HTML, CSS,Javascript, Bootstrap,Tailwind, jquery, React,Figma</p>
    </div>
    <div class="col-sm border-end">
      <p>Back-End</p>
      <p> Php ,Phython, Node ,Express, API</p>
    </div>
    <div class="col-sm   ">
          <p>  Data-base</p>
      <p className='mb-5'>   MySQL, MongoDB.	 </p>
    </div>
    
  </div>
              </div>
              
                  

              
             <div class="  container mt-3 shadow-sm mb-5 ">
          <div class="row  gy-0 gx-0">
    <div class="col-sm col-md-5 bg-dark text-light">
  <div className='d-flex mt-5 pt-5 p-4'>
  <h3 className='mt-5 pt-4'>Educational Background</h3>

    </div>    </div>
    <div class="col-sm col-md-7  educational-info text-start">
 
    <div className='m-2 p-2'>
                 <h4 className='text-bold'>Bachelor of  Computer Science and Engineering (BCSE)</h4>
                 <p>Institution: IUBAT- International University of Business Agriculture and Technology</p>
                 <p>GPA: 3.57 out of 4.00</p>

             </div>
                
             <div className='m-2 p-2'>
                 <h4>Higher Secondary Certificate (HSC) </h4>
                 <p>Institution: Bormi Degree Collage</p>
                 <p>GPA: 3.50 out of 5.00</p>

             </div>

             <div className='m-2 p-2'>
                 <h4>Secondary School Certificate (SSC)</h4>
                 <p>Institution: Kapaleswar High School</p>
                 <p>GPA: 5.00 out of 5.00</p>

             </div>    
    
  </div>
</div>
    </div>

        

              <div>
             <h3> 
                 My Previous work
             </h3>
         <div class="row gx-5 p-5 ">
    <div class="col-sm  p-4   shadow  ">
       <p>CameraZone </p>
       <a href="https://camara-zone.web.app/" class="btn btn-dark border rounded-0 active" 
       role="button" aria-pressed="true">Project Link</a>


</div>
    <div class="col-sm p-4 bg-dark shadow text-light">
    <p>Party Center </p>
       <a href="https://pensive-visvesvaraya-a0eb21.netlify.app/" class="btn btn text-light border rounded-0 active" 
       role="button" aria-pressed="true">Project Link</a>
    </div>
    <div class="col-sm  p-4  shadow">
    <p>CarZone </p>
       <a href="https://keen-chaja-c77fdd.netlify.app/" class="btn btn-dark border rounded-0 active" 
       role="button" aria-pressed="true">Project Link</a>
    </div>
    
  </div>
              </div>


             </div>
                 
    );
};

export default Portfolio;
