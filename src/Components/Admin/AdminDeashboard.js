import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link,NavLink,Outlet } from 'react-router-dom';
import { Navbar , Nav  } from 'react-bootstrap';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const AdminDashboard = () => {
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <Navbar className='  deashboardItems ' >
  
    <Nav className="me-auto navbar ">
      
    { admin?
      
      <NavLink as={Link} to="Addparts"> Add Parts</NavLink>:<span></span>
  
    }    

           { admin?
      
      <NavLink as={Link} to="ManageParts">Manage Parts </NavLink>:<span></span>
  
    }
        

     { admin?
      
      <NavLink as={Link} to="Users">Users</NavLink>:<span></span>
  
    }
    { admin?
      
      <NavLink as={Link} to="Order">Orders</NavLink>:<span></span>
  
    }

{ admin?
    
    <NavLink as={Link} to="MyProfile">My Profile</NavLink>:<span></span>

  }


   
      
    </Nav>
</Navbar>
<Outlet></Outlet>
        </div>
    );
};
   

export default AdminDashboard;