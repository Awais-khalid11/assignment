import './Navbar.css';

export default function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Left Side Logo */}
        <a className="navbar-brand logo-container" href="#">
          <img
            src="src/assets/images/i2c Logo.png"
            alt="Logo"
            width="78.69"
            height="48"
            className="logo-img"
          />
        </a>

        {/* Navbar Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items and button */}
        <div
          className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item"  style={{ marginLeft: "-300px" }}>
              <a className="nav-link active animated-link" aria-current="page" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link animated-link" href="#">
                Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link animated-link" href="#">
                Careers
              </a>
            </li>
          </ul>

          {/* Contact Us Button */}
          <button className="btn btn-primary contact-btn" style={{ borderRadius: "20px", backgroundColor: "#1434CB" , marginRight: "100px"}}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
}
