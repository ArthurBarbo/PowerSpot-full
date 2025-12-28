import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer__full">
      <div className="footer__container">
        <p className="footer__text">©2025 PowerSpot -  Arthur Oliveira. All rights reserved.</p>
        <div className="footer__links-container">
          <a href="https://www.linkedin.com/in/arthur-barbosa-3519941ba/" className="footer__link"
            target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="footer__icon" />
            Linkedin
          </a>
          <a href="https://github.com/ArthurBarbo" className="footer__link"
            target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github" className="footer__icon" />
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}