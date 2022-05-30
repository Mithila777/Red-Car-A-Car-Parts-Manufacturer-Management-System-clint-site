import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useProducts from './hooks/useProducts';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));      

const AllProducts = () => {

    const [products,setProducts]=useProducts();
    const navigate = useNavigate();

    const navigateToUpdateCamera = id =>{
        navigate(`/UpdateCamera/${id}`);
    }
    const navigateToUpdateParts = id =>{
      navigate(`/Product/${id}`);
    }

    

    return (
        <div class="container">
                 <h2 className='mt-5'>Manage Parts</h2>

                 <div className='table-box'>
      <Table>
          <tr>
            <th align="right">Name</th>
            <th align="right">Photo</th>
            <th align="right">Price</th>
            <th align="right">Quentity</th>
            <th align="right">Buy</th>
            

          </tr>
        <TableBody>
        {products.map(product=>
            <StyledTableRow >
              <td align="right">{product.name}</td>
              <td align="right"><img className='tableimage' src={product.img} alt="" /></td>
              <td align="right">{product.price}</td>
              <td align="right">{product.quantity}</td>
              <td align="right">
              <div class="col-sm">
     <button onClick={() => navigateToUpdateParts(product._id)} className='btn btn-dark text-light border-light rounded-0 '>
            Purchase</button>
 
    

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

export default AllProducts;