import { NavLink } from 'react-router-dom';

import Login from '../Buttons/Login/Login';
import Singup from '../Buttons/Singup/Singup';

import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid py-2">
                
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/semestr">Choise Semestr</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/map">Map</NavLink>
                        </li>
                    </ul>
                <NavLink className="navbar-brand mx-auto fw-bold" to="/">SSTU Helper</NavLink>
                <Login/>
                <Singup/>
                </div>
            </div>
        </nav>
    )
}

export default Header;