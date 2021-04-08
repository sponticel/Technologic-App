import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Product
    </NavLink>
    <NavLink className="link" to={`/user`}>
      My Account
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/products">
      Products
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = (e) => {
      if (window.innerWidth > 425) {
        setHamburger(true)
        setVisible(true)
      } else if (window.innerWidth <= 425) {
        setHamburger(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)

    }
  },[])

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          Technologic
        </NavLink>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          className="bars"
          alt="hamburger"
          onClick={() => setHamburger(!hamburger)}
        />
        <div className="links"
          style={{ display: hamburger && visible ? "flex" : "none" }}>
          {/* {user && <div className="link welcome">Welcome, {user.username}</div>} */}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      
    </nav>
  );
};

export default Nav;
