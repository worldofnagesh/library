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
import First from './components/first/first';
import Second from './components/second/second'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/second" element={<Second />} />``
      {/* {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
      <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  
  </BrowserRouter> 


{/* hello world */}
      
    </div>
  );
}

export default App;
