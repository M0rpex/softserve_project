import { Link } from "react-router-dom";

function Header() {
  const access = localStorage.getItem("access");

  return (
    <div className="navbar w-nav">
      <div className="padding-global">
        <div className="container w-container">
          <div className="navbar-component">
            <Link to="/" className="brand w-nav-brand w--current">
              <img
                src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64cc9_Logo%20Navbar.svg"
                loading="lazy"
                alt="Logo Navbar"
              />
            </Link>
            <div className="nav-menu-wrap">
              <div>
                <nav
                  className="nav-menu w-nav-menu"
                  style={{
                    transition: "all",
                    transform: "translateY(0px) translateX(0px)",
                  }}
                >
                  <Link to="/" className="nav-link w-inline-block w--current">
                    <div>Home</div>
                  </Link>
                  {access ? (
                    ""
                  ) : (
                    <div className="mobile-navbar-content">
                      <Link
                        to="/login"
                        className="primary-button w-inline-block"
                      >
                        <div className="text-size-small text-weight-bold">
                          Login
                        </div>
                      </Link>
                    </div>
                  )}
                </nav>
                <div className="nav-menu-wrap">
                  <div
                    className="menu-button w-nav-button"
                    style={{ WebkitUserSelect: "text" }}
                  >
                    <div className="menu-icon w-icon-nav-menu"></div>
                  </div>
                </div>
              </div>
              {access ? (
                ""
              ) : (
                <div className="right-navbar-content">
                  <Link to="/login" className="primary-button w-inline-block">
                    <div className="relative">
                      <div className="text-size-small text-weight-bold">
                        Login
                      </div>
                    </div>
                    <div
                      className="button-elipse"
                      style={{
                        transform:
                          "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
