import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({ handleInputChange, query }) => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">

     
        <Link to="/">
          Home
        </Link>
        
        <Link to="">
        {
        isAuthenticated &&    <p id="username">{user.name}</p>
        }
        </Link>
        

        {isAuthenticated ?
          <a href="#">  <button className="curve" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button></a>
          :
          <a href="#"> <button className="curve" onClick={() => loginWithRedirect()}>Log In</button></a>
        }

        

      </div>
    </nav>
  );
};

export default Nav;
