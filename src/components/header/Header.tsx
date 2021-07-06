import "./header.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand text-white">Mi Portafolio</div>
        <a
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-lg-0">
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Sevicios
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/angeldelacruzdev/mi-portafolio"
                className="nav-link"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
