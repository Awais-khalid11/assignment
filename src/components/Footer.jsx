const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="container ">
        {/* Row with menus and button aligned to the right */}
        <div className="row justify-content-end" style={{ alignItems: "center" }}>
          <div className="col-auto">
            <ul className="list-unstyled d-flex mb-0">
              <li className="ms-3">
                <a href="#home" className="  text-decoration-none">FAQs</a>
              </li>
              <li className="ms-3">
                <a href="#about" className="  text-decoration-none">Privacy Policy</a>
              </li>
              <li className="ms-3">
                <a href="#services" className="  text-decoration-none">Other</a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" style={{ borderRadius: "20px", backgroundColor: "#1434CB" }}>
              Contact us
            </button>

          </div>
        </div>
        <div className="row">
          <div className="col text-end mt-3">
            <p className="mb-0">Copyright © 2024 i2c inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};  
export default Footer;