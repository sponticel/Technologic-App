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
  const [hamburgerOptions, setHamburgerOptions] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    //called when component mounts (opens/on the path or mounted on the screen) or when something in depency array changes

    const handleResize = (e) => {
      if (window.innerWidth > 425) {
        setHamburgerOptions(true);
        setVisible(true);
      } else if (window.innerWidth <= 425) {
        setHamburgerOptions(false);
      }
    };
    handleResize(); //checks to see the size at the point oof mounting
    window.addEventListener("resize", handleResize); //also runs when window is resized
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //when the screen is > 425 show me the options
  // when < 425 conditionally render (js) the options

  return (
    <nav>
      <NavLink className="logo" to="/">
        Technologic
      </NavLink>
      <div className="nav">
        <img //rendered via a media query on css
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          className="bars"
          alt="hamburger"
          onClick={() => setHamburgerOptions(!hamburgerOptions)}
        />
        <div
          className="links"
          style={{ display: hamburgerOptions && visible ? "flex" : "none" }}
        >
          {/* {user && <div className="link welcome">Welcome, {user.username}</div>} */}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
