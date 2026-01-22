import {Fade} from "react-reveal";
import programmer from "../../assets/images/programmer.svg";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import "./Education.scss";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-container">
        <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
        <Fade right duration={1000}>
          <div className="skills-image-div">
            <img alt="Programmer" src={programmer}></img>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
