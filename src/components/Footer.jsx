import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
      <span>Copyright &copy; 2023.</span>
       <span> made with <span className="love">❤</span> by Vera</span>
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
        <a className="socials" href="https://github.com/chiomavera/">
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
