
const MyCardSection = () => {
  return (
    <div className="container my-4 p-3 mt-5" >
      <div className="row p-5">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card mb-3 border-0">
           
          <div className="d-flex align-items-center p-3 ">
              <img
                src="src\assets\images\lock.png"
                alt="Avatar"
                className="rounded-circle me-3"
            width="64"
                height="64"
              />
              <div>
                <h5 className="mb-1">24/7 Support</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card mb-3 border-0">
          <div className="d-flex align-items-center p-3">
              <img
                src="src\assets\images\stats.png"
                alt="Avatar"
                className="rounded-circle me-3"
                 width="64"
                height="64"
              />
              <div>
                <h5 className="mb-1">1000+ of reviews</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card mb-3 border-0">
          <div className="d-flex align-items-center p-3">
              <img
                src="src\assets\images\Torphy.png"
                alt="Avatar"
                className="rounded-circle me-3"
                width="64"
                height="64"
              />
              <div>
                <h5 className="mb-1">And more!</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardSection;
