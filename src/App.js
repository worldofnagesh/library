import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  BrowserRouter
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AddBook from './components/AddBook/AddBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/addbook' element={<AddBook/>}/>
      {/* {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
      <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  
  </BrowserRouter> 


{/* hello world */}
      
    </div>
  );
}

export default App;
