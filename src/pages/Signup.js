import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    userPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const signup = async (e) => {
    e.preventDefault();
    const { userName, email, userPassword } = userData;

    if (userName && email && userPassword) {
      const response = await fetch(
        `${process.env.REACT_APP_DOMAIN_URL}signup`,
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: { "content-type": "application/json" },
        }
      );

      const res = await response.json();
      if (res.status) {
        toast(res.message);
        setUserData({
          userName: "",
          userPassword: "",
        });
        navigate("/login");
      } else {
        toast(res.message);
      }
    } else {
      toast("All fields are required!");
    }
  };

  return (
    <div className="signup-container">
      {/* <div className="centered-content"></div> */}
      <div className="signup">
        <h4>SIGN UP</h4>
        <form className="signup-form" onSubmit={signup}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={userData.userName}
              name="userName"
              placeholder="name"
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={userData.userPassword}
              name="userPassword"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
        <p>
          Already an account? <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
