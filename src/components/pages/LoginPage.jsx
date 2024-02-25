import { useAuth } from "../../context/AuthContextProvider";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "./Login.scss";
const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin, setError, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleAuth() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  return error ? (
    <h2>{error}</h2>
  ) : (
    <section className="login-section">
      <div className="login-box">
        <div className="center" action="">
          <h2>Login</h2>
          <div className="input-cont">
            <span className="icon">
              <EmailIcon />
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <label>Email</label>
          </div>
          <div className="input-cont">
            <span className="icon">
              <LockIcon />
            </span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <label>Password</label>
          </div>
          <div className="remeber-forgot">
            <label htmlFor="">
              <input type="checkbox" /> Remeber me
            </label>
            <Link to={"#"}>Forgot Password?</Link>
          </div>
          <button
            onClick={() => handleAuth()}
            className="btn-card-add"
            type="submit"
          >
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?
              <Link to={"/registration"}> Register</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
