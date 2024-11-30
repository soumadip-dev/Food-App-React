import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import logo from "../assets/rasoii.png"; // Logo image
import { useState } from "react"; // useState hook

const Header = () => {
  const [btnContent, setBtnContent] = useState("Login"); // State to toggle button text

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Rasoii Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="cart-icon">
            <FaShoppingCart />
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnContent === "Login"
                  ? setBtnContent("Logout")
                  : setBtnContent("Login");
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
