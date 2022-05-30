import React from 'react';
import { toast } from 'react-toastify';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';



  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));      

const UserRow = ({ user }) => {
    const { UserEmail, role } = user;
    const email= UserEmail;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    alert('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                   alert(`Successfully made an admin`);
                }

            })
    }
    return (

        <StyledTableRow > 
        <td>{UserEmail}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm text-dark border border-dark">Make Admin</button>}</td>
            <td><button class="btn btn-sm text-light bg-dark">Remove User</button></td>
            </StyledTableRow > 

    );
};

export default UserRow;