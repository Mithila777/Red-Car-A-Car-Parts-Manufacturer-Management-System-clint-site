import React, { useState } from 'react';
import { Link,NavLink,Outlet } from 'react-router-dom';
import { Navbar , Container , Nav  } from 'react-bootstrap';
import auth from '../../../firebase.init';
import './UserDeashboard.css';
const UserDeashboard = () => {
    const[user]=useState(auth)
    return (
        <div>
            <Navbar className='  deashboardItems ' >
  <Container >
  
    <Nav className="me-auto navbar ">
      
      { user?
      
        <NavLink as={Link} to="MyOrder">My Order</NavLink>:<span></span>
    
      }
             

     { user?
      
      <NavLink as={Link} to="MyProfile">My Profile</NavLink>:<span></span>
  
    }
    { user?
      
      <NavLink as={Link} to="AddReview">Add A Review</NavLink>:<span></span>
  
    }



   
      
    </Nav>
  </Container>
</Navbar>
<Outlet></Outlet>

        </div>
    );
};

export default UserDeashboard;