import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Name, Submenu, Link, List, Bold, Experience } from "./Projects.styled";

export default function Projects() {
  return (
    <List>
      <Experience>
        <div>
          <Link target="_blank" href="https://stirnweiss-brenner.de/">
            stirnweiss-brenner.de
          </Link>

          <Link target="_blank" href="https://aisuperior.com/">
            aisuperior.com
          </Link>

          <Link target="_blank" href="https://scaleops.com/">
            scaleops
          </Link>
        </div>
        <Link target="_blank" href="https://multiverse.media/">
          multiverse.media
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, PHP, JS, JQUERY, AJAX, WordPress,
          ACF, Elementor
          <Bold>]</Bold>
        </Name>
        <Submenu>
          Sites for various companies. Business card sites to advertise
          programs.
        </Submenu>
      </Experience>
      <Experience>
        <div>
          <Link target="_blank" href="https://ein-des-ein.com/">
            ein-des-ein.com
          </Link>
        </div>
        <Link target="_blank" href="https://dooozen.io/">
          dooozen.io
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM, PHP, JS, JQUERY, WordPress,
          ACF, PUG<Bold>]</Bold>
        </Name>
        <Submenu>
          Corporate projects for EIN-DES-EIN. and business card sites to
          advertise apps.
        </Submenu>
      </Experience>
      <Experience>
        <div>
          <Link target="_blank" href="https://slotogate.com/">
            slotogate.com
          </Link>
        </div>
        <Link target="_blank" href="https://casinos-online.win/">
          casinos-online.win
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM, PHP, JS, JQUERY, WordPress,
          ACF, WPML <Bold>]</Bold>
        </Name>
        <Submenu>
          Projects for TRIONIKA. Responsive layout of WordPress templates based
          on layouts in Figma with effective optimization under Google
          Lighthouse. Extract Wordpress layout. creation of simple and medium
          JavaScript/jQuery scripts to implement additional functionality of the
          WordPress theme. Creation of custom post types, taxonomies.
        </Submenu>
      </Experience>
      <Experience>
        <Link
          target="_blank"
          href="https://oleksandrvasylchuk.github.io/coca-cola/">
          Coca-Cola
        </Link>
        <Link
          target="_blank"
          href="https://oleksandrvasylchuk.github.io/coca-cola/">
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, fullPage.js, GSAP.
          <Bold>]</Bold>
        </Name>
        <Submenu>Own project. Business card site</Submenu>
      </Experience>
      <Experience>
        <Link target="_blank" href="https://cabbage-project.netlify.app/">
          Kapusta
        </Link>
        <Link
          target="_blank"
          href="https://github.com/virysik/goit-final-project-kapusta-front">
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, Axios, React.js, React router,
          React hooks, Redux, Redux Toolkit, Async Thunk, Material-UI, React
          Hook Form, Yup, Node.js<Bold>]</Bold>
        </Name>
        <Submenu>Team Project. Web app for calculation your finances.</Submenu>
      </Experience>

      <Experience>
        <Link
          target="_blank"
          href="https://dmitry-karas.github.io/front-end__division--filmoteka/">
          Filmoteka
        </Link>
        <Link
          target="_blank"
          href="https://github.com/Dmitry-Karas/front-end__division--filmoteka/tree/main">
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM, JavaScript, Axios, Parcel,
          Handlebars <Bold>]</Bold>
        </Name>
        <Submenu>
          Team project. Filmoteka - help yourself with choosing a movie.
        </Submenu>
      </Experience>
    </List>
  );
}
