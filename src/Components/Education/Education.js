import React from "react";
import {
  About,
  Company,
  Divider,
  Time,
  Organisation,
  List,
} from "./Education.styled";

export default function Education() {
  return (
    <List>
      <Organisation>
        <Time>
          <Company>National Pedagogical Dragomanov University</Company>
        </Time>
        <About>
          Practical psychologist, Valeologist, physical rehabilitation
          specialist
        </About>
        <Time>
          2015 - 2020 <Divider>|</Divider> Ukraine
        </Time>
      </Organisation>
    </List>
  );
}
