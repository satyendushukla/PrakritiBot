import "../Styles/Footer.css";
import Logo from "/home/satyendushukla/Downloads/prakriti_Determin/frontend/src/Assets/logo.png";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <a href="#">
                <img src={Logo} width={200} alt="Website's Logo" />
              </a>
            </p>
            <p className="ft-description">
              Your all encompassing excursion to Ayurvedic prosperity. Tackle
              the insight of Ayurveda with our chatbot, intended to customize
              your way to wellbeing. Find your Prakriti, bring your doshas into
              balance, and embrace a life that is harmonious.
            </p>
          </div>
        </div>

        <div className="ft-copyright">
          <p>© 2023 AyurVision. All rights reserved.</p>
        </div>
        <div className="ft-developlist">
          Developed by Satyendu Shukla,Vishal Singh and Sangam Yadav.
        </div>
      </div>
    </div>
  );
}

export default Footer;
