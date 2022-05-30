import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateCamera.css'


const UpdateCamera = () => {
        const { Id } = useParams();
        const [camera, setCamera] = useState({});
        
    
        useEffect( () =>{
            const url = `http://localhost:5000/parts/${Id}`;
            fetch(url)
            .then(res=> res.json())
            .then(data => setCamera(data));
    
        }, []);

    
    const handleUpdateCamera = event =>{
        event.preventDefault();
        const name = event.target.productName.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quentity.value;
        const img = event.target.image.value;
        const sold =camera.sold;

        

        const UpdateCamera= { name,description,img, price,quantity,sold};

        const url = `http://localhost:5000/parts/${Id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCamera)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Camera  Update successfully!!!');
            event.target.reset();
             event.target.productName.value=''
             event.target.description.value=''
             event.target.price.value='';
             event.target.quentity.value='';
             event.target.image.value='';
        })
    }
    return (
        <div>
                 <div class="container">
                 <h2>Update a Camera</h2>

                     <div class="row">
                      <div class="col-sm">
                        One of three columns
                    </div>
                    <div class="col-sm">
                    <div className='registration'>

<div>
<form onSubmit={handleUpdateCamera}>
<input type="text" name="productName" placeholder='Product Name' Value={camera.name}  />
<br/>
<input type="text" style={{height:'80px',wordBreak:'break-all',wordWrap:'break-word'} }name="description" placeholder='Description'Value={camera.description}  />
<br />
<input type="text" name="price" placeholder='Price' Value={camera.price}  />
<input type="text" name="quentity" placeholder='Quentity' Value={camera.quantity}  />
<br />
<input type="text" name="image" placeholder='Photo URL' Value={camera.img} />
<br />
<input className='form-submit' type="submit" value="Update Camera" />

</form>
</div>
</div>
</div>                    
    
                 </div>
                </div>
                </div>
            
    );
};

export default UpdateCamera;
