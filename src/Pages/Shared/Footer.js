import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div
      style={{
        background: `url(${footer})`,
        backgroundSize: "contain",
      }}
    >
      <div className="sm:px-5 md:px-8 lg:px-20 pb-10">
        <footer className="footer p-10">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <div>
          <footer className="footer footer-center p-4 ">
            <div>
              <p>Copyright © {yearNow} - All right reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
