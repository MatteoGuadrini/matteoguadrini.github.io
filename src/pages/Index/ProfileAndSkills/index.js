import React from "react"
import Skills from "./Skills"
import Summary from "./Summary"
import Experience from "./Experience"
import Education from "./Education"
import Interests from "./Interests"
import experiences from "../../../components/ProfileAndSkills/Experience/experiences"
import skills from "../../../components/ProfileAndSkills/Skills/skills"
import educations from "../../../components/ProfileAndSkills/Education/educations"
import interests from "../../../components/ProfileAndSkills/Interests/interests"

function index() {
  const summary =
    "For more than 15 years I have been involved in solving problems through technology, developing solutions using modern languages. All my applications are open-source and available to everyone."
  return (
    <div id="bd">
      <div id="yui-main">
        <div className="yui-b">
          <Summary summary={summary} />
          <Skills Skills={skills} />
          <Experience experiences={experiences} />
          <Education educations={educations} />
          <Interests interests={interests} />
        </div>
      </div>
    </div>
  )
}

export default index
