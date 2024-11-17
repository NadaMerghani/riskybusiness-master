import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./aboutScreen.css";

function AboutScreen() {
  return (
    <div className="aboutScreen-container">
      <h1 className="aboutScreen-title">Risky Business: Startup Edition</h1>
      <h2>Interactive Text-Adventure Game</h2>
      <h3 className="aboutScreen-desc">Welcome to Risky Business, a startup adventure where you’ll juggle wild business ideas, customer interviews,
         and a dash of entrepreneurial chaos! Playing as a scrappy entrepreneur, you'll be making high-stakes decisions 
         with a low-stakes attitude. </h3>
      <div className="aboutScreen-linksContainer">
        
        <Link className="aboutScreen-link" to="/">
          {">"} Start Screen
        </Link>
        <Link className="aboutScreen-link" to="/description">
          {">"} Description
        </Link>
        <a
          className="aboutScreen-link"
          href="https://www.linkedin.com/in/nadamerghani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {">"} Original Template
        </a>
      </div>
      <a
        className="aboutScreen-personalLink"
        href="https://www.linkedin.com/in/nadamerghani/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {">"} Made by Nada Merghani {"<"}
      </a>
      <Footer />
    </div>
  );
}

export default AboutScreen;
