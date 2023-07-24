import React from "react";
import logo from "./../assets/logo.png";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <div className="main-section-footer">
      <div>
        <div className="image-margin">
          <img src={logo} className="footer-image" alt="Error in image" />
        </div>
        <p className="text-base font-bold text-center logo-message">
          The smarter way to start your next idea
        </p>
      </div>
      <div>
        <div className="font-bold">How it Works</div>
        <div>Overview</div>
        <div>Pricing</div>
        <div>Service Areas</div>
      </div>
      <div>
        <div className="font-bold">Resources</div>
        <div>Customer Stories</div>
        <div>Knowledge Base</div>
        <div>Contact Us</div>
      </div>
      <div className="product-footer">
        <div className="font-bold">Products</div>
        <div>Corporate Partners</div>
        <div>Secure Identity</div>
        <div>Legal Help</div>
        <div>First Capital</div>
      </div>
      <div>
        <div className="font-bold">Company</div>
        <div>About Us</div>
        <div>Careers</div>
        <div>Terms of Use</div>
      </div>
    </div>
  );
};
export default Footer;