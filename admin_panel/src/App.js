import './App.css';
import Topbar from './components/topbar/Topbar';
import Sitebar from './components/sitebar/Sitebar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';


function App() {
  return (
    <div >
      <Topbar/>
      <div className="container2">
        <Sitebar/>
        {/* <Home/> */}
        <Router>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/users" element={<UserList />} />
           <Route path="/user/:id" element={<User />} />
         {/* <Route path="/products" element={<Shop />} />
          <Route path="/products/:category" element={<Shop />} />
          <Route path="/product/:_id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personList" element={<PersonList />} />
          <Route path = "/personAdd" element={user ? <Navigate to="/" replace /> :  <PersonAdd />} />
          <Route path="/personRemove" element={<PersonRemove />} />
          <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
          <Route path="/wishlist" element={<WishList />} /> */}
          {/* <Route path="/payment" element={<Payment />} /> */}
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/userProfile" element={<UserProfile />} /> */}
          {/* <Route path="/login" element={isLoggedIn == "ture" ? <UserProfile/> : <Login />} /> */}
          {/* <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/success" element={<Success/>} /> */}
          {/* <Route path="/personUpdate" element={<PersonUpdate />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
