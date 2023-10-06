import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
import superagent from "superagent";
import base64 from "base-64";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({ capabilities: [] });
  const [error, setError] = useState(null);
  const [socket, setSocket] = useState(null);

  console.log(user);
  console.log(socket);

  const can = (capability) => {
    return state?.user?.capabilities?.includes(capability);
  };

  const login = async (username, password) => {

    setSocket(io(`${import.meta.env.VITE_DATABASE_URL}`));

    const data = await superagent
      .post(`${import.meta.env.VITE_DATABASE_URL}/signin`)
      .set(
        "authorization",
        `Basic ${base64.encode(`${username}:${password}`)}`
      );

    if (data.body) {
      try {
        validateToken(data.body.token);
        navigate("/");
      } catch (e) {
        setLoginState(loggedIn, token, user, e);
        console.error(e);
        alert("amro");
      }
    }
  };

  const signup = async (username, password, role) => {
    const data = await superagent.post(
      `${import.meta.env.VITE_DATABASE_URL}/signup`,
      { username: username, password: password, role: role }
    );

    if (data.body) {
      try {
        validateToken(data.body.token);
        navigate("/");
      } catch (e) {
        setLoginState(loggedIn, token, user, e);
        console.error(e);
      }
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
    // window.location.reload(true);
  };

  const validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      setLoginState(true, token, validUser);
    } catch (e) {
      setLoginState(false, null, {}, e);
      console.log("Token Validation Error", e);
    }
  };

  const setLoginState = (loggedIn, token, user, error) => {
    cookie.save("auth", token);
    setLoggedIn(loggedIn);
    setToken(token);
    setUser(user);
    setError(error || null);
  };
  const state = {
    loggedIn: loggedIn,
    can: can,
    login: login,
    logout: logout,
    signup: signup,
    user: user,
    token: token,
    error: error,
    socket:socket
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("auth");
    const token = qs.get("token") || cookieToken || null;
    validateToken(token);
  }, []);

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
