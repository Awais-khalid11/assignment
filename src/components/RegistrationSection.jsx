import { useState, useEffect } from "react";
import "./Registration.css";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("registrationFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
  
    // Name validation
    if (!formData.name) {
      errors.name = "Name field is required";
    } else if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.name = "Name can only contain letters and spaces";
    }
  
    // Company validation
    if (!formData.company) {
      errors.company = "Company field is required";
    } else if (formData.company.length < 2) {
      errors.company = "Company name must be at least 2 characters";
    } else if (!/^[a-zA-Z0-9\s\-&]+$/.test(formData.company)) {
      errors.company = "Company name can only contain letters, numbers, spaces, and - . &";
    }
  
    // Email validation
    if (!formData.email) {
      errors.email = "Email field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
  
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Save data to local storage
      localStorage.setItem("registrationFormData", JSON.stringify(formData));
      alert("Form submitted and saved to local storage successfully!");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-content">
        {/* Left Half - Image */}
        <div className="image-section">
          <img
            src="src/assets/images/registrationImage.png"
            alt="Illustration"
            className="registration-image"
          />
        </div>

        {/* Right Half - Form */}
        <div className="form-section">
          <h2>Registration</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className={`form-input ${errors.company ? "is-invalid" : ""}`}
                placeholder="Enter your company name"
              />
              {errors.company && (
                <span className="error-text">{errors.company}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
