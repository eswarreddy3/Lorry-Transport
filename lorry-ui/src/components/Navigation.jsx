import { useEffect, useState } from 'react';
import '../Styles/Navigation.css';
import { useAuth } from '../components/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navigation() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        };

        // Set up an event listener for local storage changes
        window.addEventListener('storage', checkAuth);

        // Initial check on component mount
        checkAuth();

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('storage', checkAuth);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setMenuOpen(false); // Close the mobile menu upon logout
    };

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <div className="header__logo-img-cont">
                        <img src="assets/lorrylogo.png" alt="Logo Image" className="header__logo-img" />
                    </div>
                    <span className="header__logo-sub">SSTLS</span>
                </div>
                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper"><a href="/" className="header__link">Home</a></li>
                        <li className="header__link-wrapper"><Link to="/about" className="header__link">About</Link></li>
                        <li className="header__link-wrapper"><Link to="/contact" className="header__link">Contact</Link></li>
                        {!isAuthenticated && <li className="header__link-wrapper"><Link to="/login" className="header__link">Admin</Link></li>}
                        {isAuthenticated && (
                            <>
                                <li className="header__link-wrapper"><Link to="/booking" className="header__link">Booking</Link></li>
                                <li className="header__link-wrapper"><Link to="/bookinghistory" className="header__link">Booking History</Link></li>
                                <li className="header__link-wrapper"><Link to="/" className="header__link" onClick={logout}>Logout</Link></li>
                            </>
                        )}
                    </ul>
                    <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
                        {isMenuOpen ? <FiX size={24} className="header__main-ham-menu-icon" /> : <FiMenu size={24} className="header__main-ham-menu-icon" />}
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className={`header__sm-menu ${isMenuOpen ? 'header__sm-menu--active' : ''}`}>
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link" onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
                        <li className="header__sm-menu-link" onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
                        <li className="header__sm-menu-link" onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
                        {!isAuthenticated && <li className="header__sm-menu-link" onClick={() => setMenuOpen(false)}><Link to="/login">Admin</Link></li>}
                        {isAuthenticated && (
                            <>
                                <li className="header__sm-menu-link" onClick={() => setMenuOpen(false)}><Link to="/booking">Booking</Link></li>
                                <li className="header__sm-menu-link" onClick={() => setMenuOpen(false)}><Link to="/bookinghistory">Booking History</Link></li>
                                <li className="header__sm-menu-link" onClick={() => setMenuOpen(false)}><Link to="/" onClick={logout}>Logout</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navigation;
