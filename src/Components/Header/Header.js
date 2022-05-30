import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Navbar , Container , Nav,NavDropdown  } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import './Header.css'
import useAdmin from '../hooks/useAdmin';

const Header = () => {
    
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    

    const handleSignOut = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    return (
    <div className=' shadow bottom mt-1' >
<Navbar className='  sticky' expand="lg" bg="bg-lighten-xl" variant="light">
  <Container >
  <h5 className='title text-danger'>RED CAR</h5>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navbar ">
      <NavLink  as={Link}  to="/" >Home</NavLink>
      <NavLink   as={Link} to="/Blog" >Blogs</NavLink>
      <NavLink   as={Link} to="/AllProducts" >Parts</NavLink>

      <NavLink  as={Link} to="/Portfolio">Portfolio</NavLink>

    
      <NavLink  as={Link} to="/About">About Us</NavLink>

{
  (!admin && user) &&
      
    <NavLink as={Link} to="/UserDeashboard">Deahboard</NavLink>

  
}
      
    {
  (admin) &&
  <NavLink as={Link} to="/AdminDeashboard">Deahboard</NavLink>

    }
    </Nav>
    <Nav>
    { user?
    
    <button class="btn btn-sm  rounded-0">{user.displayName}
    </button>:<button class="btn btn-sm  rounded-0 "> user
    </button>
      }
    </Nav>
    
    <Nav>
      
        {
        
        user ?<button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <NavLink as={Link} to="login">Sign In  </NavLink>}  
     
   <button class="btn btn-sm btn-outline-dark rounded-0"><NavLink as={Link} to="/Registration">Sign Up</NavLink></button>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

            
        </div>
    );
};

export default Header;