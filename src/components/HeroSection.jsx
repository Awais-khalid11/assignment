import './HeroSection.css';

export default function HeroSection() {
  return (
    <section
      className="hero-container my-5"
      style={{
        backgroundImage: `url('src/assets/images/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <div className="row">
        {/* Left Half */}
        <div className="col-md-6 mt-5">
          <h2 className="hero-heading">
            Lorem ipsum <span className="highlight">dolor</span> <br /> amet yo 👋
          </h2>

          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="card mb-3 border-0 testimonial-card">
              <div className="d-flex align-items-center p-3">
                <img
                  src={`src/assets/images/avatar${3 - idx}.png`}
                  alt="Avatar"
                  className="rounded-circle me-3"
                  width="64"
                  height="64"
                />
                <div>
                  <h5 className="mb-1">Andrew Schultz</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique
                    senectus dui pharetra sit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Half */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="src/assets/images/Group84.png"
            alt="Illustration"
            className="img-fluid hero-image"
          />
        </div>
      </div>
    </section>
  );
}
