import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/Academics' element={<Academics />} />
        <Route path='/Admission' element={<Admissions />} />
        <Route path='/Faculty' element={<Faculty />} />
        <Route path='/Student' element={<Students />} />
        <Route path='/Gallary' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
