import './App.css';
import Home from './Home';
import Batches from './Batches';
import Course from './Course';

import OTPformpage from './OTPformpage';
import { BrowserRouter as Router , Routes, Route,Navigate } from 'react-router-dom';
function App() {
  return (
   <Router>
  <Routes>
    <Route path="/" element={<Navigate to="/otp" />} />
    <Route path="/batches" element={<Batches />} />
    <Route path="/course" element={<Course />} />
    <Route path="/otp" element={<OTPformpage />} />
    <Route path='/home' element={<Home/>}/>
   
  </Routes>
   </Router>
  );
}

export default App;
