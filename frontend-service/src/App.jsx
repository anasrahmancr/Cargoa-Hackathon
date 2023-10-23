import './App.css'
import { Home } from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './pages/user/Login';

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<Login/>} />
          <Route path="/vendor-login" component={() => <div>Temporary Page</div>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
