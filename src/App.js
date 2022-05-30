import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PageNotFound from './Components/PagenotFound/PageNotFound';
import ProductDetail from './Components/ProductDetial/ProductDetial';
import Registration from './Components/Registration/Registration';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import UpdateCamera from './Components/UpdateCamera/UpdateCamera';
import AddParts from './Components/Admin/AddParts/AddParts';
import ManageParts from './Components/Admin/ManageParts/ManageParts';
import UpdateParts from './Components/Admin/ManageParts/UpdateParts';
import UserDeashboard from './Components/User/Userdeashboard/UserDeashboard';
import MyOrder from './Components/User/MyOrder/MyOrder';
import MyProfile from './Components/User/MyProfile/MyProfile';
import AddReview from './Components/User/AddReview/AddReview';
import UpdateProfile from './Components/User/MyProfile/UpdateProfile';
import AdminDashboard from './Components/Admin/AdminDeashboard';
import Users from './Components/Admin/Users';
import MakePayment from './Components/User/MakePayment'
import Order from './Components/Admin/Order';
import Portfolio from './Components/portfolio/Portfolio';
import AllProducts from './Components/AllProducts'

function App() {
  

  return (
    
     <div className="App">
      <Header></Header>
      <Routes>
     <Route path="/"  element={  <Home>  </Home>  }></Route>
        <Route path="/Blog"  element={<Blog></Blog>}></Route>
        <Route path="/AllProducts"  element={<AllProducts></AllProducts>}></Route>

        <Route path="/Portfolio"  element={<Portfolio></Portfolio>}></Route>
   
        <Route path="/About"  element={<About></About>}></Route>
        <Route path="/Registration" element={<Registration></Registration>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>

        <Route path="*"  element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/Product/:Id' element={
        <RequireAuth><ProductDetail></ProductDetail></RequireAuth>}></Route>
 
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        
        <Route path="/ManageParts" element={
          <RequireAuth>
            <ManageParts></ManageParts>
          </RequireAuth>
        }></Route>
        <Route path="/UpdateCamera/:Id"  element={
          <RequireAuth>
            <UpdateCamera></UpdateCamera>
          </RequireAuth>
        }></Route>
          <Route path="/MakePayment/:Id"  element={<RequireAuth><MakePayment></MakePayment> </RequireAuth>}></Route>

    
         <Route path="/UserDeashboard"  element={<RequireAuth> <UserDeashboard></UserDeashboard> </RequireAuth>}> 

          <Route path="MyOrder"  element={<RequireAuth><MyOrder></MyOrder></RequireAuth>}></Route>
          <Route path="MyProfile"  element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
          <Route path="AddReview"  element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>

        </Route>
        <Route path="/AdminDeashboard"  element={<RequireAuth> <AdminDashboard></AdminDashboard> </RequireAuth>}> 

          <Route path="Users"  element={<RequireAuth><Users></Users> </RequireAuth>}></Route>
          <Route path="MyProfile"  element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
          <Route path="UpdateParts/:Id"  element={<RequireAuth> <UpdateParts></UpdateParts></RequireAuth>  }></Route>
          <Route path="AddParts" element={<RequireAuth> <AddParts></AddParts></RequireAuth> }></Route>
          <Route path="ManageParts" element={ <RequireAuth><ManageParts></ManageParts></RequireAuth> }></Route>
          <Route path="Order" element={ <RequireAuth><Order></Order></RequireAuth> }></Route>

        </Route>
        <Route path="/UpdateProfile/:UserEmail"  element={
          <RequireAuth>
            <UpdateProfile></UpdateProfile>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
       
     
    </div>
  );

 
}


export default App;
