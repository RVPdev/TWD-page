import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Hero() {
  return (
    <section className="hero-margin-top">
      <div className="contianer">
        {/* Hero section */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="py-8 py-lg-0 text-center">
              <h1 className="display-2 fw-bold mb-3 text-primary">
                {/* text and styling here */}
                <span className="text-light px-3 px-md-0">TWD Buyers</span>
              </h1>
              {/* p for short about section */}
              <p className="mb-4 h2 text-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <Link to="/about" className="btn btn-light me-3">About</Link>
              <Link to="/contact" className="btn btn-outline-light me-2">Contact</Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
