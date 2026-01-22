import {useContext} from "react";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import manOnTable from "../../assets/images/manOnTable.svg";
import landingPerson from "../../assets/lottie/landingPerson";
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import {greeting, illustration} from "../../portfolio";
import "./Greeting.scss";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  console.log("dark", isDark);
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                {illustration.animated && (
                  <span className="wave-emoji">{emoji("👋")}</span>
                )}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="My resume"
                    href={greeting.resumeLink}
                    className="download-link-button"
                    newTab
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img alt="man sitting on table" src={manOnTable}></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
