import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DisplayReview.css'
import { Rating } from "@mui/material";

const DisplayReview = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/reviews', ).then(res => res.json())
        .then(data=>setReviews(data))


    },[])


    var settings =  {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      let reating;
      let i=0;
    return (
        <div class="container ">
              
      <div > < Slider {...settings}> 
                 {     

                  
reviews.map((review,index)=>{

          return <div key={index} >
              <div className=" review  shadow m-3">
              <i class="fa fa-quote-left u-color"></i>
                  <p> {review.userOpinion}</p>
                  <div class="user-about"> 
                   <span >{review.UserName} | User</span>
      
                      
                        <div ><span class="font-weight-bold d-block u-color"> <p> {review.UserRating}/5</p></span> </div>
                    </div>

              </div>
            
              
          </div>
      }
  
 
        )}
    

     
          </Slider>
            </div>
    </div>
  
        
           
        
    );
};

export default DisplayReview;

