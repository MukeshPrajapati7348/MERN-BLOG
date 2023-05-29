import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginRedux } from "../redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state);
  const [userData, setUserData] = useState({
    email: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const login = async (e) => {
    e.preventDefault();
    const { email, userPassword } = userData;
    if (email && userPassword) {
      const response = await fetch(`${process.env.REACT_APP_DOMAIN_URL}login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      const res = await response.json();
      if (res.status) {
        toast("Logged in Successfully!");
        dispatch(loginRedux(res));
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        toast(res.message);
      }
    } else {
      toast("All fields are required!");
    }
  };

  return (
    <div className="login-container">
      {/* <div className="centered-content"></div> */}
      <div className="login">
        <h4>LOGIN</h4>
        <form className="login-form" onSubmit={login}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              name="userPassword"
              value={userData.userPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p>
          Not an account? <Link to="/signup">signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
