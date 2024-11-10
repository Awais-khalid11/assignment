
const LogoSection = () => {
  return (
    <div className="container my-5">
      {/* Heading and Subheading */}
      <div className="text-center mb-4 p-5">
   <img src="/src/assets/images/trusted.png" alt="" />
      </div>

      {/* Row of 3 Images */}
      <div className="row justify-content-center p-5">
        
        <div className="col-12">
          <img
            src="src\assets\images\logos.png"
            alt="Image 3"
            className="img-fluid mb-3"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
