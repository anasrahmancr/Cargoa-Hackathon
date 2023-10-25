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
import { Pending } from "./pages/user/pending/Pending";
import { VendorPending } from "./pages/vendor/pending/VendorPending";
import { ActionRequired } from "./pages/user/actionRequired/ActionRequired";
import { VendorActionRequired } from "./pages/vendor/actionRequired/VendorActionRequired";
import { Complete } from "./pages/user/complete/Complete";
import { VendorComplete } from "./pages/vendor/complete/VendorComplete";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/user-register" element={<Register />} />
          <Route path="/vendor-register" element={<VendorRegister />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/vendor-home" element={<VendorHomePage />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/view-order" element={<ViewOrder />} />
          <Route path="/review-order" element={<VendorViewOrder />} />
          <Route path="/user-pending" element={<Pending />} />
          <Route path="/vendor-pending" element={<VendorPending />} />
          <Route path="/user-action" element={<ActionRequired />} />
          <Route path="/vendor-action" element={<VendorActionRequired />} />
          <Route path="/user-complete" element={<Complete />} />
          <Route path="/Vendor-complete" element={<VendorComplete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;