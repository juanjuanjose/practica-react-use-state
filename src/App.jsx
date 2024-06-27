import './App.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactMe from './pages/ContactMe/ContactMe'
import { NotFound } from './pages/NotFound/NotFound'
import {
  Routes,
  Route
} from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
