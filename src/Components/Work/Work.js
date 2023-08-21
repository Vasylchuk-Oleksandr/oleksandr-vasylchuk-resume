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
          <Company>
            Full Stack. <About>Smart Pipl</About>
          </Company>
        </Time>

        <Time>
          Development of new sites and landing pages. HTML5, CSS3, SASS, PHP,
          JS, JQUERY, AJAX, WordPress, ACF, Elementor
        </Time>
        <Time>
          <About></About>February 2023 - up to now<Divider>|</Divider>
          Ukraine
        </Time>
      </Organisation>
      <Organisation>
        <Time>
          <Company>
            Full Stack. <About>EIN-DES-EIN </About>
          </Company>
        </Time>

        <Time>
          Development of new sites and landing pages. PHP, HTML, CSS, JS,
          WordPress
        </Time>
        <Time>
          <About></About>October 2022 - February 2023<Divider>|</Divider>
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
          <Company>
            Full Stack. <About>TRIONIKA </About>
          </Company>
        </Time>

        <Time>Development of a new sites. PHP, HTML, CSS, JS, WordPress</Time>
        <Time>
          <About></About>February 2022 - October 2022<Divider>|</Divider>
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
          <Company>
            Front-End Developer. <About>ASIA GROUP</About>
          </Company>
        </Time>

        <Time>
          Development of a new site. Developing existing sites, adding new
          pages, changing content. Work with Laravel, PHP, HTML, CSS, JS
        </Time>
        <Time>
          <About></About>November 2021 - February 2022<Divider>|</Divider>
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
          <Company>
            Search Engine Optimization WEB Developer. <About>Semalt</About>
          </Company>
        </Time>

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
