import React from "react";
import Olena from "../Images/photo.png";
import { Absolute, Name, Photo, Target, Job, Column } from "./Absolute.styled";

export default function Asside() {
  return (
    <Absolute>
      <Column>
        <Photo src={Olena} alt="My photo" />
      </Column>
      <Column>
        <Job>Frontend Developer</Job>
        <Name>Oleksandr Vasylchuk</Name>
        <Target>
          I am a Front-End developer looking for a full-time position in a
          company that's aimed at making both everyday life and business easier,
          more productive and user-friendly. I have sound knowledge of HTML,
          CSS, JavaScript, React and Figma. I am a fast learner, responsible,
          and ready for challenging tasks.
        </Target>
      </Column>
    </Absolute>
  );
}
