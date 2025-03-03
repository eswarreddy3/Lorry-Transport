import './App.css'
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
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
    
      <BrowserRouter>
        <Navigation/>
          {/* <PDFViewer style={{ width: '100%', height: 800 }}>
            <MyDocument />
          </PDFViewer> */}
        {/* <Link to="/booking">Booking</Link>
        <Link to="/bookinghistory">Booking History</Link> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/booking' element={<ProtectedRoute><Booking /></ProtectedRoute>}></Route>
          <Route path='/bookinghistory' element={<ProtectedRoute><Bookinghistory /></ProtectedRoute>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
