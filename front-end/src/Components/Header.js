import { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import logo from "./../Assets/image/logo.svg";
import playwebflow from "./../Assets/image/play-webflow.svg";
import { login, signup } from "../Services/AuthServices";
import { useDispatch } from "react-redux";

export function Header() {
  const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [show, setShow] = useState(false);
  const [authShow, setAuthShow] = useState(false);
  const [logInEmail, setLogInEmail] = useState("");
  const [signInShow, setSignInShow] = useState(false);
  const [logInPassword, setLogInPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = useCallback((key, val) => {
    if (key === "logInEmail") setLogInEmail(val);
    else if (key === "logInPassword") setLogInPassword(val);
    else if (key === "sname") setSname(val);
    else if (key === "fname") setFname(val);
    else if (key === "registerEmail") setRegisterEmail(val);
    else if (key === "registerPassword") setRegisterPassword(val);
  }, []);

  const onSubmitRegister = useCallback(
    async (e) => {
      e.preventDefault();
      const payload = {
        first_name: fname,
        surname: sname,
        email: registerEmail,
        password: registerPassword,
      };

      const res = await dispatch(signup(payload));
      if (res) setAuthShow(false);
    },
    [dispatch, fname, registerEmail, registerPassword, sname]
  );

  const onSubmitLogIn = useCallback(
    async (e) => {
      e.preventDefault();
      const payload = {
        email: logInEmail,
        password: logInPassword,
      };

      const res = await dispatch(login(payload));
      if (res) setSignInShow(false);
    },
    [dispatch, logInEmail, logInPassword]
  );

  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="nav">
            <a href="/">
              <img src={logo} alt="logo" className="nav-logo" />
            </a>
            <div className="toggle-block">
              <button className="toggle" onClick={handleShow} id="closeBtn">
                <div className="toggle-bar"></div>
                <div className="toggle-bar"></div>
                <div className="toggle-bar"></div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* first modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="nav-menu d-block me-3">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="!#">Lottery</a>
            </li>
            <li className="nav-list-item">
              <a href="!#">Subscribe</a>
            </li>
            <li className="nav-list-item">
              <a href="!#">How Playbox works</a>
            </li>
            <li className="nav-list-item">
              <a href="!#">Stories</a>
            </li>
            <li className="nav-list-item">
              <button id="openBtn" onClick={() => setSignInShow(true)}>
                Sign in/Register
              </button>
            </li>
            <li className="nav-list-item">
              <a href="!#">Centerfold</a>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
      {/* SignIn modal */}
      <Modal show={signInShow} onHide={() => setSignInShow(false)}>
        <Modal.Body id="modelContainer" className="model d-block me-3">
          <div>
            <h2 className="model-heading">Sign in</h2>
            <form className="form" onSubmit={onSubmitLogIn}>
              <div className="form-block">
                <label htmlFor="email" className="form-lable">
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  required
                  value={logInEmail}
                  onChange={(e) => handleChange("logInEmail", e.target.value)}
                />
              </div>
              <div className="form-block">
                <label htmlFor="password" className="form-lable">
                  Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  required
                  value={logInPassword}
                  onChange={(e) =>
                    handleChange("logInPassword", e.target.value)
                  }
                />
              </div>
              <div className="form-para-block">
                <p className="form-para">
                  Not Registered? Create account{" "}
                  <button
                    id="register-link"
                    className="para-link"
                    onClick={() => {
                      setAuthShow(true);
                      setSignInShow(false);
                    }}
                  >
                    here
                  </button>
                </p>
                {/* <p className="form-para">
                  Forgot user/password? Click{" "}
                  <a href="!#" className="para-link">
                    here
                  </a>
                </p> */}
                <button className="play-btn form-play-btn">
                  <img src={playwebflow} alt="" className="play-icon" />
                </button>
                {/* <!-- <div className="close-btn-block">
                  <button id="closeBtn" className="sign-in-btn">Sign in</button>
                </div> --> */}
                <div className="close-btn-block">
                  {/* <!-- <button id="reg-closeBtn" className="sign-in-btn" >Register</button> --> */}
                  <input
                    type="submit"
                    value="Sign in"
                    className="sign-in-btn"
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Register modal */}
      <Modal show={authShow} onHide={() => setAuthShow(false)}>
        <Modal.Body
          id="reg-modelContainer"
          className="regmodel nav-menu d-block"
        >
          <h2 className="model-heading">Register</h2>
          <form className="form" onSubmit={onSubmitRegister}>
            <div className="form-block">
              <label htmlFor="fname" className="form-lable">
                First name
              </label>
              <input
                type="fname"
                className="form-input"
                required
                value={fname}
                onChange={(e) => handleChange("fname", e.target.value)}
              />
            </div>
            <div className="form-block">
              <label htmlFor="sname" className="form-lable">
                Surname
              </label>
              <input
                type="sname"
                className="form-input"
                required
                value={sname}
                onChange={(e) => handleChange("sname", e.target.value)}
              />
            </div>
            <div className="form-block">
              <label htmlFor="email" className="form-lable">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                required
                value={registerEmail}
                onChange={(e) => handleChange("registerEmail", e.target.value)}
              />
            </div>
            <div className="form-block">
              <label htmlFor="password" className="form-lable">
                Password
              </label>
              <input
                type="password"
                className="form-input"
                required
                value={registerPassword}
                onChange={(e) =>
                  handleChange("registerPassword", e.target.value)
                }
              />
            </div>
            <div className="form-para-block">
              {/* <!-- <p className="form-para">Not Registered? Create account </p><a id="register-link" className="para-link">here</a> */}
              {/* <p className="form-para">Forgot user/password? Click <a href="!#" className="para-link">here</a></p> --> */}
              <button className="play-btn form-play-btn" type="submit">
                <img src={playwebflow} alt="" className="play-icon" />
              </button>
              <div className="close-btn-block">
                {/* <!-- <button id="reg-closeBtn" className="sign-in-btn" >Register</button> --> */}
                <input type="submit" value="Register" className="sign-in-btn" />
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
