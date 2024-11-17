import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import descriptionScreenImage from "../../assets/mayaid1.jpg";
import { diagramLink } from "../../utils/diagramLink";
import "./descriptionScreen.css";

function DescriptionScreen() {
  return (
    <div className="descriptionScreen-container">
      <Header />
      <h2 className="descriptionScreen-header">Description</h2>
      <div className="descriptionScreen-text">
        <img
          className="descriptionScreen-image"
          src={descriptionScreenImage}
          alt="Futuristic towers"
        />
        <div>
          I made this game using a template made by Dimterion, which you can see below, as well as chatGPT and the help of my lovely partner Malcolm.{" "}
          <a
            className="descriptionScreen-link"
            href="https://medium.com/@dimterion/making-an-interactive-text-adventure-game-with-javascript-html-and-css-298b35c8ea96"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the template here
          </a>
          .
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DescriptionScreen;
