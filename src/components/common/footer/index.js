import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-black"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0 max-width">
          {/* Section: Links */}
          <section className>
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Zomato-logo"
              className="header-logo"
            ></img>
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-bold text-black">
                  About Zomato
                </h6>
                <p className="text-gray-800">Who We Are</p>
                <p className="text-gray-800">Blog</p>
                <p className="text-gray-800">Work With Us</p>
                <p className="text-gray-800">Investor Relations</p>
                <p className="text-gray-800">Report Fraud</p>
                <p className="text-gray-800">Press Kit</p>
                <p className="text-gray-800">Contact Us</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-bold text-black">
                  Zomaverse
                </h6>
                <p className="text-gray-800">Zomato</p>
                <p className="text-gray-800">Blinkit</p>
                <p className="text-gray-800">Feeding India</p>
                <p className="text-gray-800">Hyperpure</p>
                <p className="text-gray-800">Zomaland</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-bold text-black">
                  For Restaurants
                </h6>
                <p className="text-gray-800">Partner with Us</p>
                <p className="text-gray-800">Apps for U</p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-bold text-black">
                  Learn More
                </h6>
                <p className="text-gray-800">Privacy</p>
                <p className="text-gray-800">Security</p>
                <p className="text-gray-800">Terms</p>
                <p className="text-gray-800">Sitemap</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-bold">
                  Social Links
                </h6>
                {/* Facebook */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
                {/* Linkedin */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                {/* Github */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
      {/* End of .container */}
    </div>
  );
}

export default Footer;
