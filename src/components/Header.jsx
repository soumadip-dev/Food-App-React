import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/rasoii.png';

const Header = () => {
  const [btnContent, setBtnContent] = useState('Login'); // State to toggle button text

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="Rasoii Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cart-icon">
            <Link to="./cart">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnContent === 'Login'
                  ? setBtnContent('Logout')
                  : setBtnContent('Login');
              }}
            >
              {btnContent}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
