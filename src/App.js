import './App.css';
import Home from './Home';
import Batches from './Batches';
import Course from './Course';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/batches" element={<Batches />} />
    <Route path="/course" element={<Course />} />
  </Routes>
   </Router>
  );
}

export default App;
