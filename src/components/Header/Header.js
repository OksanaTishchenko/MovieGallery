import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, Link, useHistory } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const { name, logout, isAuth } = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = e => {
    e.preventDefault()
    logout()
    history.push("/signin")
  }


  return (
    <header className="header">
      <Link to="/" className="header__logo">MovieGallery</Link>

      <ul className="header__memu menu">

        {isAuth && <span className="menu__text">Welcome {name}!</span>}

        <li className="menu__item"><NavLink to="/browse" className="menu__link">Browse</NavLink></li>
        {!isAuth && <li className="menu__item"><NavLink to="/signup" className="menu__link">Sign up</NavLink></li>}
        {!isAuth && <li className="menu__item"><NavLink to="/signin" className="menu__link">Sign in</NavLink></li>}
        {isAuth && <li className="menu__item"><a href="/signin" onClick={logoutHandler} className="menu__link">Logout</a></li>}


      </ul>

    </header>
  )
}
export default Header;