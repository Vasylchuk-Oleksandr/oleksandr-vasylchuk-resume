import React from "react";

import { Absolute, Name, Target, Job, Column } from "./Absolute.styled";

export default function Asside() {
  return (
    <Absolute>
      <Column>
        <Name>Oleksandr Vasylchuk</Name>
        <Job>Frontend Developer</Job>
        <Target>
          I am a Front-End developer looking for a full-time position in a
          company that's aimed at making both everyday life and business easier,
          more productive and user-friendly. I want to be in a good team to
          improve my skills and use them for interesting tasks I have sound
          knowledge of HTML, CSS, JavaScript, React and Figma. I am a fast
          learner, responsible, and ready for challenging tasks.
        </Target>
      </Column>
    </Absolute>
  );
}
