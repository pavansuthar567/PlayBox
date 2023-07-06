import footerlogo from "../Assets/image/footer-logo.svg";
import instagram from "../Assets/image/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="footer-link-block">
            <ul className="footer-list">
              <li className="footer-item">
                <a href="!#" className="footer-link">
                  Stories
                </a>
              </li>
              <li className="footer-item">
                <a href="!#" className="footer-link">
                  About us
                </a>
              </li>
              <li className="footer-item">
                <a href="!#" className="footer-link">
                  Contact us
                </a>
              </li>
              <li className="footer-item">
                <a href="!#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-inner">
            <div className="footer-logo">
              <a href="/" className="footer-logo-link">
                <img src={footerlogo} alt="footer logo" />
              </a>
              <div className="footer-social-block">
                <h3 className="social-heading">Follow Our Socials</h3>
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
