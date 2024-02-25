import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContextProvider, {
  useAuth,
} from "../../context/AuthContextProvider";
// import Loader from "../../components/loader/Loader";
// import "./LoginPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { handleRegister, error, setError, loading } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [password_confirm, setPasswordConfirm] = React.useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !password_confirm.trim()) {
      alert("Some inputs are empty!");
      return;
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", password_confirm);
      formData.append("type_user", "Human");
      formData.append("phone_number", "23132");
      handleRegister(formData, navigate);
    }
  }

  React.useEffect(() => {
    setError(false);
  }, []);

  //   if (loading) {
  //     return <Loader />;
  //   }
  return (
    <>
      {error ? <h2>{error}</h2> : null}
      {/* <div className="register-bg flex justify-center items-center">
        <div className="flex flex-col items-center gap-5 bg-white w-72 h-96 border rounded-2xl border-violet-700 border-solid">
          <h1 className="pt-8">Register</h1>

          <TextField
            label="Email"
            color="secondary"
            focused
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            color="secondary"
            focused
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Password"
            color="secondary"
            focused
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <TextField
            label="name"
            color="secondary"
            focused
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
            onClick={() => handleSave()}
          >
            Register
          </Button>
        </div>
      </div> */}
      <section className="login-section">
        <div className="register-box">
          <form className="center" action="">
            <h2>Registration</h2>
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
            <div className="input-cont">
              <span className="icon">
                <LockIcon />
              </span>
              <input
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                required
              />
              <label>Repeat password</label>
            </div>

            <div className="remeber-forgot">
              <label htmlFor="">
                <input type="checkbox" /> Remeber me
              </label>
            </div>
            <button
              onClick={() => handleSave()}
              className="btn-card-add"
              type="submit"
            >
              Register
            </button>
            <div className="register-link">
              <p>
                Already have an account?
                <Link to={"/login"}> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
