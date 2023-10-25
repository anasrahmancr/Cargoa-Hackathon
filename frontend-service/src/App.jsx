import "./App.css";
import { Home } from "./pages/Home";
import { Register } from "./pages/user/register/Register";
import { VendorRegister } from "./pages/vendor/register/VendorRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/user/login/Login";
import { VendorLogin } from "./pages/vendor/login/VendorLogin";
import { HomePage } from "./pages/user/homePage/HomePage";
import { VendorHomePage } from "./pages/vendor/homePage/VendorHomePage";
import { CreateOrder } from "./pages/user/createOrder/CreateOrder";
import { ViewOrder } from "./pages/user/viewOrders/ViewOrder";
import { VendorViewOrder } from "./pages/vendor/viewOrders/VendorViewOrder";
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, selectIsAdminAuthenticated } from './redux/authSlice'; 
import ViewData from "./pages/user/viewData/ViewData";
import ReviewData from "./pages/vendor/reviewData/ReviewData";


function App() {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  const adminIsLoggedIn = useSelector(selectIsAdminAuthenticated);

  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/user-register" element={<Register />} />
          <Route path="/vendor-register" element={<VendorRegister />} />
          <Route path="/home" element={!isLoggedIn ? <HomePage /> : <Home />} />
          <Route path="/vendor-home" element={!adminIsLoggedIn ? <VendorHomePage /> : <Home />} />
          <Route path="/create-order" element={!isLoggedIn ? <CreateOrder /> : <Home />} />
          <Route path="/view-orders" element={!isLoggedIn ? <ViewOrder /> : <Home />} />
          <Route path="/review-orders" element={!adminIsLoggedIn ? <VendorViewOrder /> : <Home />} />
          <Route path="/view-order/:orderId" element={!isLoggedIn ? <ViewData /> : <Home />} />
          <Route path="/review-order/:orderId" element={!adminIsLoggedIn ? <ReviewData /> : <Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;