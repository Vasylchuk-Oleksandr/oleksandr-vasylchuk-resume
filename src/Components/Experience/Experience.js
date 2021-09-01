import React from "react";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Work from "../Work/Work";
import AdditionalEducation from "../AdditionalEducation/AdditionalEducation";
import { Main, Title } from "./Experience.styled";

export default function Experience() {
  return (
    <Main>
      <Title>Projects</Title>
      <Projects />

      <Title>Work Experience</Title>
      <Work />

      <Title>Education</Title>
      <Education />

      <Title>Additional education</Title>
      <AdditionalEducation />
    </Main>
  );
}
