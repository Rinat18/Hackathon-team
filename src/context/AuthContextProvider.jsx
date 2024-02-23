import axios from "axios";
import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useContext,
} from "react";
// import { AuthValuesTypes, IAuth } from "./auth.types";
import { useNavigate } from "react-router-dom";
// import { notify, NOTIFY_TYPES } from "../../components/alerts/Toastify";

export const authContext = createContext();

export function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const AUTH_API = "http://34.173.115.25/api/v1";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${AUTH_API}/account/register/`, formData);
      navigate("/");
      console.log(res, "register response");
      // notify("success", NOTIFY_TYPES.success);
    } catch (err) {
      setError(err.response?.data?.detail || "An error occurred");
      // notify(err.code.split("/")[1], "error");
      // notify("error", NOTIFY_TYPES.error);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email, navigate) {
    try {
      const res = await axios.post(`${AUTH_API}/account/login/`, formData);
      localStorage.getItem("email");
      localStorage.setItem("tokens", JSON.stringify(res.data));
      let user = JSON.stringify(email);
      localStorage.setItem("email", user);
      setCurrentUser(email);
      checkAuth();
      console.log(res);
      navigate("/");
      // notify("success", NOTIFY_TYPES.success);
    } catch (err) {
      console.log(err);
      setError(err.response.data.detail || "An error occurred");
      // notify("error", NOTIFY_TYPES.error);
    }
  }

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${AUTH_API}/account/token/refresh/`,
        {
          refresh: tokens.refresh,
        },
        config
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const email = localStorage.getItem("email") || "";
      setCurrentUser(email);
      // notify("success", NOTIFY_TYPES.success);
    } catch (err) {
      console.log(err);
      handleLogout();
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
      // notify("error", NOTIFY_TYPES.error);
    }
  }

  const contextValue = {
    currentUser,
    error,
    loading,
    setError: setError,
    handleRegister,
    handleLogin,
    checkAuth,
    handleLogout,
    setCurrentUser,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
