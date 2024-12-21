import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/rasoii.png';

const Header = () => {
  // State to manage the text of the login/logout button
  const [btnContent, setBtnContent] = useState('Login');

  // Function to toggle the button text between 'Login' and 'Logout'
  const toggleButton = () => {
    setBtnContent(prevContent =>
      prevContent === 'Login' ? 'Logout' : 'Login'
    );
  };

  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="Rasoii Logo" />
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
          {/* Home Link */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* About Us Link */}
          <li>
            <Link to="/about">About Us</Link>
          </li>
          {/* Contact Us Link */}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* Cart Icon Link */}
          <li className="cart-icon">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
          {/* Login/Logout Button */}
          <li>
            <button className="login-btn" onClick={toggleButton}>
              {btnContent}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
