import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './UpdateParts.css'

const UpdateParts = () => {
    const { Id } = useParams();
    const [parts, setParts] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/parts/${Id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setParts(data));

    }, []);
        const name = parts.name;
        const description = parts.description;
        const img = parts.img;

        
    

    const updateQuentity =event =>{
        const price = parts.price;
        const preQuentity = parseInt(parts.quantity);
        const newquantity =parseInt(event.target.quentity.value)
        const quantity = parseInt (preQuentity + newquantity);
        const sold= parts.sold;
        
        const UpdateParts= { name,description,img, price,quantity,sold};
        console.log(UpdateParts);

        const url = `http://localhost:5000/parts/${Id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateParts)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Camera  Restock successfully !');
            event.target.reset();
            window.location.reload();


        })

    }
    const updatePrice =event =>{
        const quantity = parseInt(parts.quantity);

        const prePrice = parseInt(parts.price);
        const newPrice =parseInt(event.target.price.value)
        const price = parseInt (prePrice + newPrice);
        const sold= parts.sold;
        
        const UpdateParts= { name,description,img, price,quantity,sold};
        console.log(UpdateParts);

        const url = `http://localhost:5000/parts/${Id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateParts)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Camera  Restock successfully !');
            event.target.reset();
            window.location.reload();


        })

    }

    return (
        <div>
          
          <div class="container mt-5 ">
          <div class="row gy-5 gx-0">
    <div class="col-sm-6 col-xs-6  productDetail ">
         <img className='w-10 h-6 mt-5 img-fluid' src={parts.img} alt="" />
         </div>    
    <div class="col-sm-6 col-xs-6 productDetialInfo bg-danger">
             <p> {parts.name}</p>
              <p>Description:{parts.description}</p> 
              <p>Unit Price:{parts.price}</p>
              <p>Quentity:{parts.quantity}</p>
              <p> Sold:{parts.sold}</p>
            
              <div className=' addquantity '>

              <form onSubmit={updatePrice}>
                   <input  type="text" name="price" placeholder='Price' required />
                    <input className='form-submit' type="submit" value="Update" />
                        </form>
                        </div>
                <div className=' addquantity '>

               <form onSubmit={updateQuentity}>
               <input  type="text" name="quentity" placeholder='Quantity' required />
               <input className='form-submit' type="submit" value="Restock" />
             </form>
            </div>
             </div>    
    
  </div>

  <div className='mt-5 manage-button '>
             <Link to="/ManageCamera"> 
        <button  className='btn btn-dark  text-light rounded-0'>Manage Parts</button>
                 </Link> 
             </div>
            


</div>


            
        </div>
    );
};

export default UpdateParts;