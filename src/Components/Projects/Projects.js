import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Name, Submenu, Link, List, Bold, Experience } from "./Projects.styled";

export default function Projects() {
  return (
    <List>
      <Experience>
        <div>
          <Link target="_blank" href="https://free-slot.win/">
            free-slot.win
          </Link>
        </div>
        <div>
          <Link target="_blank" href="https://casino-online.ph/">
            casino-online.ph
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
          href="https://oleksandrvasylchuk.github.io/coca-cola/"
        >
          Coca-Cola
        </Link>
        <Link
          target="_blank"
          href="https://oleksandrvasylchuk.github.io/coca-cola/"
        >
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, fullPage.js, GSAP.
          <Bold>]</Bold>
        </Name>
        <Submenu>Own project. Business card site</Submenu>
      </Experience>
      <Experience>
        <Link
          target="_blank"
          href="https://oleksandrvasylchuk.github.io/test-sayama/"
        >
          Sayama Real
        </Link>
        <Link
          target="_blank"
          href="https://github.com/OleksandrVasylchuk/test-sayama"
        >
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, GSAP.<Bold>]</Bold>
        </Name>
        <Submenu>Own project. Business card site</Submenu>
      </Experience>
      <Experience>
        <Link target="_blank" href="https://cabbage-project.netlify.app/">
          Kapusta
        </Link>
        <Link
          target="_blank"
          href="https://github.com/virysik/goit-final-project-kapusta-front"
        >
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
        <Link target="_blank" href="https://sanya-phonebook.netlify.app/">
          Phonebook
        </Link>
        <Link
          target="_blank"
          href="https://github.com/OleksandrVasylchuk/goit-react-hw-08-phonebook"
        >
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, React<Bold>]</Bold>
        </Name>
        <Submenu>
          Own project. An application for storing contacts, that has
          registration feature and can work with private collections of
          contacts. Contacts are stored on the separate backend. The app is
          written using React. State management is done using Redux. The app
          consists of several pages. Routing is implemented.
        </Submenu>
      </Experience>
      <Experience>
        <Link target="_blank" href="https://sanyabatyushka-movies.netlify.app/">
          Movies
        </Link>
        <Link
          target="_blank"
          href="https://github.com/OleksandrVasylchuk/goit-react-hw-05-movies"
        >
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, Axios, React.js, React router,
          React hooks<Bold>]</Bold>
        </Name>
        <Submenu>
          Own project. A movie finder application with the ability to view movie
          information, cast and reviews. Routing is implemented. For the backend
          is using themoviedb.org API. Asynchronous JavaScript code loading is
          added.
        </Submenu>
      </Experience>
      <Experience>
        <Link
          target="_blank"
          href="https://oleksandrvasylchuk.github.io/goit-react-hw-04-hooks-images/"
        >
          Image Finder
        </Link>
        <Link
          target="_blank"
          href="https://github.com/OleksandrVasylchuk/goit-react-hw-04-hooks-images"
        >
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, Axios<Bold>]</Bold>
        </Name>
        <Submenu>
          Own project. An image finder application with the ability to view
          images on a modal window. For the backend is using pixabay.com API
        </Submenu>
      </Experience>
      <Experience>
        <Link
          target="_blank"
          href="https://dmitry-karas.github.io/front-end__division--filmoteka/"
        >
          Filmoteka
        </Link>
        <Link
          target="_blank"
          href="https://github.com/Dmitry-Karas/front-end__division--filmoteka/tree/main"
        >
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
