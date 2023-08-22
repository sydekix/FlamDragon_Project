import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import FlamDragon from './components/FlamDragon'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import About from './components/About'
import DrumstickDetails from './components/DrumstickDetails';

export default function App() {
  return (
        <>
          <Routes>
            <Route path='/' element={<FlamDragon />} exact />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id/:model/:company/:price/:image_path' element={<DrumstickDetails />} />
            <Route path='/newsletter' element={<Newsletter />} />
            <Route path='/flam-dragon' element={<FlamDragon />} />
      </Routes>
    </>
  )
};
