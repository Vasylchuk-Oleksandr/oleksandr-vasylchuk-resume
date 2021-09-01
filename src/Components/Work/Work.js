import React from "react";
import {
  About,
  Company,
  Divider,
  Time,
  Organisation,
  List,
  // Item,
  // Lists,
} from "./Work.styled";

export default function Work() {
  return (
    <List>
      <Organisation>
        <Time>
          <Company>Search Engine Optimization WEB Developer.</Company>
        </Time>
        <About>Semalt</About>
        <Time>
          Analysis and detection of errors that hinder SEO promotion, as well as
          comprehensive optimization to improve visibility in search engines and
          attract the target audience.
        </Time>
        <Time>
          June 2021 - up to now <Divider>|</Divider>Ukraine
        </Time>
        {/* 
        <Lists>
          <Item>teamwork and mutual assistance;</Item>
          <Item>computer literacy;</Item>
          <Item>communication with the population.</Item>
        </Lists> */}
      </Organisation>
    </List>
  );
}
