import { useAuth } from "../../context/AuthContextProvider";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "./Pages.scss";
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
    // <div className="login-bg flex justify-center items-center">
    //   <div className="flex flex-col items-center gap-5 bg-white w-72 h-72 border rounded-2xl border-violet-700 border-solid">
    //     <h1 className="pt-8">Login</h1>

    //     <TextField
    //       label="Email"
    //       color="secondary"
    //       focused
    //       type="text"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <TextField
    //       label="Password"
    //       color="secondary"
    //       focused
    //       type="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <Button
    //       variant="outlined"
    //       color="primary"
    //       href="#outlined-buttons"
    //       onClick={() => handleAuth()}
    //     >
    //       Login
    //     </Button>
    //   </div>
    // </div>
    <section className="login-section">
      <div className="login-box">
        <form className="center" action="">
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
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
