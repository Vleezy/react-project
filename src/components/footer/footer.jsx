import React from "react";

import "./styles.css";

const Footer = () => {
  // TODO: use css grid on the page layout
  return (
    <div>
      <footer className="footer">
        <div className="social">
          <a href="https://facebook.com" className="link facebook" target="_parent">
            <span className="fa fa-facebook-square"></span>
          </a>
          <a href="https://twitter.com/" className="link twitter" target="_parent">
            <span className="fa fa-twitter"></span>
          </a>
          <a
            href="https://plus.google.com/"
            className="link google-plus"
            target="_parent"
          >
            <span className="fa fa-google-plus-square"></span>
          </a>
          <p>2020 &copy; Hyper Machine</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
