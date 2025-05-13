import React, { useState } from "react";
import './LoginSignup.css';
import email_icon from './email.webp';
import user_icon from './images.png';
import password_icon from './password.png';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    password: "",
    userType: "Job Seeker", // default
  });

  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getEndpoint = () => {
    const userType = formData.userType;
    if (isLogin) {
      return "http://localhost/job-1/backend/login.php";
    }
    if (userType === "Admin") return "http://localhost/job-1/backend/signup_admin.php";
    if (userType === "Organisation") return "http://localhost/job-1/backend/signup_org.php";
    return "http://localhost/job-1/backend/signup_user.php";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = isLogin
      ? {
          email_address: formData.email_address,
          password: formData.password,
          userType: formData.userType,
        }
      : formData;

    const response = await fetch(getEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(dataToSend),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert(isLogin ? "Login successful" : "Registration successful");
      window.location.href = "/dashboard"; // Update as needed
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">{isLogin ? "Login" : "Sign Up"}</div>
          <div className="underline"></div>
          <div className="inputs">
            {!isLogin && (
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                name="email_address"
                placeholder="Email"
                value={formData.email_address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input">
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
              >
                <option value="Job Seeker">Job Seeker</option>
                <option value="Organisation">Organisation</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <div className="toggle">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              style={{ color: "blue", cursor: "pointer", marginLeft: "10px" }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
