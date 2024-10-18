import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [registration, setRegistration] = useState(true);

  const [loginBorder, setLoginBorder] = useState(false);
  const [passwordBorder, setPasswordBorder] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access")) {
      navigate("/dashboard");
    }
  });

  const handleLoginChange = (e) => {
    setLoginBorder(false);
    setLogin(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordBorder(false);
    setPassword(e.target.value);
  };

  const handleSignType = () => {
    setRegistration(!registration);
  };

  const fieldValidator = () => {
    let valid = true;
    if (!isEmail(login)) {
      setLoginBorder(true);
      valid = false;
    }
    if (!password) {
      setPasswordBorder(true);
      valid = false;
    }

    return valid;
  };

  const handleLogin = () => {
    setPasswordBorder(false);
    setLoginBorder(false);
    if (!fieldValidator()) {
      return;
    }

    if (registration) {
      localStorage.setItem(
        "user",
        JSON.stringify({ login: login, password: password })
      );
      localStorage.setItem("access", true);
    } else {
      const usesInfo = JSON.parse(localStorage.getItem("user"));
      if (usesInfo.login !== login) {
        setPasswordBorder(true);
        setLoginBorder(true);
        return;
      }
      if (usesInfo.password !== password) {
        setPasswordBorder(true);
        setLoginBorder(true);
        return;
      }
      localStorage.setItem("access", true);
      navigate("/dashboard");
    }
  };

  return (
    <section>
      <div className="padding-global">
        <div className="w-layout-blockcontainer container w-container">
          <div className="contact-wrapper">
            <div className="hero-component">
              <div
                style={{
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="max-width-70ch"
              >
                <div className="heading-2 text-weight-bold">
                  {registration ? "Sing Up" : "Sign In"}
                </div>
              </div>
            </div>
            <div
              style={{
                opacity: "1",
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="form-wrapper w-form"
            >
              <div className="form">
                <div className="form-content">
                  <div className="name-wrapper-contact">
                    <label className="text-size-medium-vw">E-mail</label>
                    <input
                      className={`text-field-contact w-input ${
                        loginBorder ? "w-input-danger" : ""
                      }`}
                      maxLength="256"
                      name="Enter-Your-Email"
                      placeholder="Enter your e-mail"
                      type="email"
                      required=""
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="name-wrapper-contact">
                    <label className="text-size-medium-vw">Password</label>
                    <input
                      className={`text-field-contact w-input ${
                        passwordBorder ? "w-input-danger" : ""
                      }`}
                      maxLength="256"
                      name="Enter-Your-Password"
                      placeholder="Enter your password"
                      type="password"
                      required=""
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <div className="contact-button align-center">
                  <div onClick={handleLogin} className="primary-button">
                    <div className="relative">
                      <div className="text-size-small text-weight-bold">
                        {registration ? "Sing Up" : "Sign In"}
                      </div>
                    </div>
                    <div
                      className="button-elipse"
                      style={{
                        opacity: "1",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                onClick={handleSignType}
                className={`w-form-selector ${registration ? "" : "switch"}`}
              >
                <div className="switch-option">Sign Up</div>
                <div className="switch-option">Sign In</div>
              </div>
              <div className="success-message w-form-done">
                <div className="text-size-contact">
                  Thank you! Your submission has been received!
                </div>
              </div>
              <div className="error-message w-form-fail">
                <div className="text-size-medium-contact">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
