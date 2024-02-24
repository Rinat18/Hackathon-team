import axios from "axios";
import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const AUTH_API = "http://34.89.239.80/api/v1";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${AUTH_API}/account/register/`, formData);
      navigate("/");
      console.log(res, "register response");
    } catch (err) {
      setError(err.response?.data?.detail || "An error occurred");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email, navigate) {
    try {
      const res = await axios.post(`${AUTH_API}/account/login/`, formData);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
      checkAuth();
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.detail || "An error occurred");
    }
  }

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("email") || "{}");
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      // const res = await axios.post(
      //   `${AUTH_API}/account/token/refresh/`,
      //   {
      //     refresh: tokens.refresh,
      //   },
      //   config
      // // );
      // localStorage.setItem(
      //   "tokens",
      //   JSON.stringify({
      //     // access: res.data.access,
      //     refresh: tokens.refresh,
      //   })
      // );
      const email = localStorage.getItem("email") || "";
      setCurrentUser(email);
      // notify("success", NOTIFY_TYPES.success);
    } catch (err) {
      // console.log(err);
      // handleLogout();
      // notify("error", NOTIFY_TYPES.error);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    try {
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      setCurrentUser(false);
      navigate("/");
      console.log("logout");
      // notify("success", NOTIFY_TYPES.success);
    } catch (e) {
      // notify(e.code.split("/")[1], "error");
      // notify("error", NOTIFY_TYPES.error);
    }
  }

  const getUser = async () => {
    const { data } = await axios(`${AUTH_API}/account/users/`);
    const email = JSON.parse(localStorage.getItem("email"));
    const user = data.results.find((elem) => elem.email == email);
    setUser(user.email)
    console.log(user);
  };
  getUser();

  const changePassword = async (password) => {
    const tokens = JSON.parse(localStorage.getItem("token"));
    const auth = `Bearer ${tokens.access}`;
    const test =
      "Server: nginx/1.25.4 Date: Fri, 23 Feb 2024 19:03:34 GMT Content-Type: application/json Content-Length: 46 Connection: keep-alive Vary: Accept, origin Allow: POST, OPTIONS X-Frame-Options: DENY X-Content-Type-Options: nosniff Referrer-Policy: same-origin Cross-Origin-Opener-Policy: same-origin";
    const formData = new FormData();
    formData.append("old_password", password.oldPassword);
    formData.append("new_password", password.newPassword);
    formData.append("new_password_confirm", password.newPasswordConfirm);

    await axios.post(`${AUTH_API}/account/change_password/`, formData, {
      headers: {
        auth,
        test,
      },
    });
    alert("пароль успешно изменен");
  };
  const contextValue = {
    currentUser,
    error,
    loading,
    user,
    setError: setError,
    handleRegister,
    handleLogin,
    checkAuth,
    handleLogout,
    setCurrentUser,
    changePassword,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
