import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import useOrderhooks from '../hooks/useOrderhooks';



  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));      




const Order = () => {
    const [user] = useAuthState(auth);
   const userEmail= user.email;
   const [orders, setOrders] = useOrderhooks();
     let totalPrice;

    const navigate = useNavigate();


    const navigateToUpdateCamera = id =>{
        navigate(`/UpdateOrder/${id}`);
    }
    const navigaToMakePayment = id =>{
        navigate(`/MakePayment/${id}`);
    }

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(product => product._id !== id);
                setOrders(remaining);
            })
        }
    }
     const navigaToUpdatePayment = id =>{
      const proceed = window.confirm('Are you sure to update?');
      if(proceed)
      {
        const url = `http://localhost:5000/order/${id}`;

        fetch(url, {
          
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({})
      })
     .then(res=>res.json())
        .then(data => {
      console.log(data);
      window.location.reload();


})

      }


     }

    return (
        <div  className='container'>
                 <h2 className=' '>All Orders</h2>

            <div className='table-box'>
      <Table>
          <tr>
            <th align="right">Name</th>
            <th align="right">Image</th>
            <th align="right">Unit Price</th>
            <th align="right">Quentity</th>
            <th align="right">Total Price</th>
            <th align="right">Status</th>
            <th align="right">Pay Bill</th>
            <th align="right">Manage</th>
            

          </tr>
        <TableBody>
        {orders.map(product=>  
            <StyledTableRow > 
              <td align="right">{product.CutomerName}</td>
              <td align="right"><img className='tableimage' src={product.ProductImage} alt="" /></td>
              <td align="right">{product.ProductUnitPrice}</td>
              <td align="right">{product.ProductOrderQuentity}</td>
              <td align="right">{product.totalPrice}</td>
              <td align="right">{product.status}</td>
              <td align="right"><div class="col-sm">
                
             {     product.status==='unpaid' && <button onClick={() => navigaToUpdatePayment(product._id)} className='btn btn-dark   text-light border-light rounded-0'>
    <FontAwesomeIcon icon={faPenSquare} /></button>}
    {
     product.status ==='paid' && <span> </span>
    
    }

 
    </div></td>

              <td align="right">
             <div class="col-sm">
  
             {  product.status==='unpaid'  && <button  onClick={() => handleDelete(product._id)} className='btn btn-dark border-light  text-light rounded-0'>
    <FontAwesomeIcon icon={ faTrash} /></button>}
    {
     product.status ==='paid' && <span> </span>
    
    }

    </div>   
                  </td>
              
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
      </div>

    

            
        </div>
    );
};

export default Order;