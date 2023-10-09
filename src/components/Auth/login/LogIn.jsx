import "./LogIn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "./LogInContext";
import { useState, useContext } from "react";

const LogIn = () => {
  const state = useContext(LoginContext);

  const [user, setUser] = useState({ username: "", password: "", role: "" });
  console.log(user);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRadioChange = (e) => {
    setUser({ ...user, ["role"]: e.target.id });
  };

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    state.login(user.username, user.password);
  };
  const handleSubmitSignup = (e) => {
    // state.socket?.emit("newUser", user.username);
    e.preventDefault();
    state.signup(user.username, user.password, user.role);
  };

  return (
    <div className="loginnnnn">
      {/* <Link to="/">
        <div className="wanderLustLoGO">Wanderlust</div>
      </Link> */}
      <div className="section">
        <div className="sectionSHADER">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="sectionn pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input
                    className="checkboxxx"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <form
                            className="sectionnN text-center"
                            onSubmit={handleSubmitSignIn}
                          >
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="username"
                                className="form-style"
                                placeholder="Your Username"
                                id="logemail"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                              />
                              <FontAwesomeIcon
                                className="input-icon uil uil-at"
                                icon={faUser}
                                style={{ color: "#fff" }}
                              />
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpasss"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                              />
                              <FontAwesomeIcon
                                className="input-icon uil uil-lock-alt"
                                icon={faLock}
                                style={{ color: "#fff" }}
                              />
                            </div>
                            <button className="btn mt-4" type="submit">
                              Sign In
                            </button>
                            <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="link">
                                Forgot your password?
                              </a>
                            </p>
                          </form>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <form
                            className="sectionnN text-center"
                            onSubmit={handleSubmitSignup}
                          >
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="username"
                                className="form-style"
                                placeholder="Your Username"
                                id="logname"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                              />
                              <FontAwesomeIcon
                                className="input-icon uil uil-user"
                                icon={faUser}
                                style={{ color: "#fff" }}
                              />
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Your Password"
                                id="logemail"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                              />
                              <FontAwesomeIcon
                                className="input-icon uil uil-at"
                                icon={faLock}
                                style={{ color: "#fff" }}
                              />
                            </div>
                            <div className="form-group mt-2">
                              <div className="radioContain">
                                <div className="lllllll">
                                  <label htmlFor="">Customer</label>
                                  <input
                                    type="radio"
                                    name="user"
                                    className="form-style"
                                    placeholder="Your Role"
                                    id="user"
                                    autoComplete="off"
                                    required
                                    onChange={handleRadioChange}
                                  />
                                </div>
                                <div className="lllllll">
                                  <label htmlFor="">Service Provider</label>
                                  <input
                                    type="radio"
                                    name="user"
                                    className="form-style"
                                    placeholder="Your Role"
                                    id="owner"
                                    autoComplete="off"
                                    required
                                    onChange={handleRadioChange}
                                  />
                                </div>
                              </div>
                              {/* <FontAwesomeIcon
                                className="input-icon uil uil-lock-alt"
                                icon={faClipboardUser}
                                style={{ color: "#fca41c" }}
                              /> */}
                            </div>
                            <button className="btn mt-4" type="submit">
                              Register
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;