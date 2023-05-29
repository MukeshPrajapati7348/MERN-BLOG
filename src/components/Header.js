import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutRedux } from "../redux";

const Header = () => {
  const pathName = useLocation().pathname.split("/")[1];
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = (e) => {
    dispatch(logoutRedux());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="title">
          <h1>MERN BLOG</h1>
        </div>
        <nav className="nav">
          <Link to="/" className={pathName === "" ? "active" : ""}>
            Home
          </Link>
          {userData.userName && (
            <>
              <Link
                to="/create"
                className={pathName === "create" ? "active" : "create"}
              >
                Create Blog
              </Link>
              <p className="logout" onClick={logout}>
                Logout
              </p>
            </>
          )}
          {!userData.userName && (
            <>
              <Link
                to="/login"
                className={pathName === "login" ? "active" : "login"}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={pathName === "signup" ? "active" : "signup"}
              >
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
