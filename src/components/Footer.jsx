import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        made with ❤ by{" "}
        <a className="github" href="https://github.com/chiomavera/">
          Vera
        </a>
      </p>
      <div>
        <a className="socials" href="https://twitter.com/nkanmuo_vera">
          twitter
        </a>
        <a
          className="socials"
          href="https://www.linkedin.com/in/chioma-vera-nkanmuo/"
        >
          linkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
