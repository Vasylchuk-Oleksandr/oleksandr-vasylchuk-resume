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
          <Company>Front-End Developer.</Company>
        </Time>
        <About>ASIA GROUP</About>
        <Time>
          Development of a new site. Developing existing sites, adding new
          pages, changing content. Work with Laravel, PHP, HTML, CSS, JS
        </Time>
        <Time>
          <About></About>November 2021 - up to now<Divider>|</Divider>
          Ukraine
        </Time>
        {/* 
        <Lists>
          <Item>teamwork and mutual assistance;</Item>
          <Item>computer literacy;</Item>
          <Item>communication with the population.</Item>
        </Lists> */}
      </Organisation>
      <Organisation>
        <Time>
          <Company>Search Engine Optimization WEB Developer.</Company>
        </Time>
        <About>Semalt</About>
        <Time>
          Analysis and detection of errors that hinder SEO promotion, their
          correction, as well as comprehensive optimization to improve
          visibility in search engines and attract the target audience. I have
          experience working with various CMS, and Docker, XAMPP and databases
        </Time>
        <Time>
          <About></About> June 2021 - November 2021
          <Divider>|</Divider>Ukraine
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
