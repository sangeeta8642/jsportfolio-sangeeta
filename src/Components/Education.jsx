import React from "react";
import image from "../images/bg4.webp";

const Education = () => {
  return (
    <section className="min-height education" id="education">
      <h2>Education</h2>
      <div className="educationmain">
        <div className="div2">
          <div className="div2main">
            <div>
              <h3>Secondary Education</h3>
              <p>i have completed my SSC with 77.60%</p>
            </div>
            <div>
              <h3>Higher Education</h3>
              <p>i have completed my HSC with 86%</p>
              <p>In Science Scream</p>
            </div>
            <div>
              <h3>Graduation</h3>
              <p>I have recently gratuated in BSc IT-2024</p>
              <p>with the GPA-9.7/10 and CGPA-9.75/10</p>
            </div>
          </div>
        </div>
        <div className="div1">
          <img src={image} alt="text" />
        </div>
      </div>
    </section>
  );
};

export default Education;
