import React from "react"
import PersonalInformation from "./PersonalInformation"
import ProfileAndSkills from "./ProfileAndSkills"
import Resume from "../../assets/files/Resume.pdf"

function index() {
  return (
    <>
      <PersonalInformation
        Author={"Matteo Guadrini"}
        HeadTitle={"DevOps && Rust/Python Developer"}
        email={"matteo.guadrini@hotmail.it"}
        // phoneNumber={"+989138406080"}
        pdfLink={Resume}
      />
      <ProfileAndSkills />
    </>
  )
}

export default index
