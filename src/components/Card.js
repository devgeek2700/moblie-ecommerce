import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";



const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <section className="card">
      {
          isAuthenticated &&     
          <img src={img} alt={title} className="card-img" width="250px" height="250px" />
      }
      {
          !isAuthenticated &&     
          <button className="imgBtn" onClick={() => loginWithRedirect()}>
          <img src={img} alt={title} className="card-img" width="250px" height="250px" />
          </button>
      }
      

        <div className="card-details">
          <h3 className="card-title" style={{ fontSize: "20px" }}>{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>

      </section>

    </>
  );
};

export default Card;
