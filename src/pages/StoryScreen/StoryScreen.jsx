import { Link } from "react-router-dom";
import storyScreenHeaderImg from "../../assets/storyScreenHeaderImg.jpg";
import mayapitch from "../../assets/mayapitchpage.jpg"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./storyScreen.css";

function StoryScreen() {
  return (
    <div className="storyScreen-container">
      <img
        className="storyScreen-headerImg"
        src={mayapitch}
        alt="Futuristic skyscrapers"
      />
      <div className="storyScreen-textContainer">
        <h2>Here's the pitch...</h2>
        <p className="storyScreen-text">
        Meet Maya, a bold and brilliant woman on a mission to
        turn her neighborhood hair salon into the hottest spot 
        in town. With creativity, style, and a fierce determination, she’s ready to face the wild world of entrepreneurship head-on.
          <br></br>
          <br></br>
          But it’s not all haircuts and highlights—Maya must juggle quirky customer demands, market her salon to a finicky 
          audience, and make tough decisions that could either skyrocket her business or leave her brushing out a few knots. 
          <br></br>
          <br></br>
          Along the way, she’ll face hilarious mishaps like marketing mascots gone rogue,
          employee drama, and customer feedback she never saw coming.
          <br></br>
          <br></br>
          Through it all, you’ll guide Maya as she pivots, hustles, and navigates the unpredictable startup world.
           From interviewing customers about the latest hair trends to testing out bold new services (like a mobile salon!),
          every choice you make shapes her journey. Will Maya’s salon become a local legend, 
           or will her dreams get tangled up in business blunders? 
           One thing’s for sure: in Pitch Please!, every twist and turn is a chance to laugh, learn, and grow.
          <br></br>
          <br></br>
      
        </p>
        <h3>Are you ready to help Maya become the next big thing in hair care?</h3>
        <Link className="storyScreen-link" to="/game">
          {">>>"} Comb On In!
        </Link>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default StoryScreen;
