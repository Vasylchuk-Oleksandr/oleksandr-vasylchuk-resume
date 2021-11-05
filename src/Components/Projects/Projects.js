import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Name, Submenu, Link, List, Bold, Experience } from "./Projects.styled";

export default function Projects() {
  return (
    <List>
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
          An application for storing contacts, that has registration feature and
          can work with private collections of contacts. Contacts are stored on
          the separate backend. The app is written using React. State management
          is done using Redux. The app consists of several pages. Routing is
          implemented.
        </Submenu>
      </Experience>
      <Experience>
        <Link target="_blank" href="https://sanyabatyushka-movies.netlify.app/">
          Filmoteka
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
          A movie finder application with the ability to view movie information,
          cast and reviews. Routing is implemented. For the backend is using
          themoviedb.org API. Asynchronous JavaScript code loading is added.
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
          An image finder application with the ability to view images on a modal
          window. For the backend is using pixabay.com API
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
      <Experience>
        <Link
          target="_blank"
          href="https://dmitry-karas.github.io/front-end__division--HellEN/"
        >
          Hellen
        </Link>
        <Link
          target="_blank"
          href="https://github.com/Dmitry-Karas/front-end__division--HellEN"
        >
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM <Bold>]</Bold>
        </Name>
        <Submenu>
          Team project. A website with responsive layout for HellEn - site for
          an Englishteacher.
        </Submenu>
      </Experience>
      <Experience>
        <Link
          target="_blank"
          href="https://olena-p.github.io/goit-markup-hw-08/"
        >
          WebStudio
        </Link>
        <Link
          target="_blank"
          href="https://github.com/OleksandrVasylchuk/goit-markup-hw-08"
        >
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM <Bold>]</Bold>
        </Name>
        <Submenu>A website with responsive layout.</Submenu>
      </Experience>
    </List>
  );
}
