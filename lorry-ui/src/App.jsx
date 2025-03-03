import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Link from 'react-router-dom'
import Bookinghistory from './Pages/Bookinghistory'
import Booking from './Pages/Booking'
import Navigation from './components/Navigation'
import Home from './Pages/Home'
import About from './Pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import MyDocument from './components/Document'
import { PDFViewer } from '@react-pdf/renderer';


function App() {

  return (
    <>
    
     <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
    <Route path="/bookinghistory" element={<ProtectedRoute><Bookinghistory /></ProtectedRoute>} />
  </Routes>
  <Footer />
</Router>
    </>
  )
}

export default App
