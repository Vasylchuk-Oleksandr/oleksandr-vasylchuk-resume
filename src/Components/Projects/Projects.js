import React from "react";
import {
  Dots,
  Name,
  Submenu,
  Link,
  List,
  Bold,
  Experience,
} from "./Projects.styled";

export default function Projects() {
  return (
    <List>
      <Experience>
        <Link href="https://sanya-phonebook.netlify.app/">Phonebook</Link>
        <Dots>................</Dots>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, React<Bold>]</Bold>
        </Name>
        <Submenu>
          Own Project. Application with the ability to register users and
          workwith private collections of contacts
        </Submenu>
      </Experience>
      <Experience>
        <Link href="https://sanyabatyushka-movies.netlify.app/">Filmoteka</Link>
        <Dots>.....................</Dots>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, Axios, React.js, React router,
          React hooks<Bold>]</Bold>
        </Name>
        <Submenu>
          Own Project. Filmoteka - help yourself with choosing a movie.
          Theapplication uses themoviedb.org API.
        </Submenu>
      </Experience>
      <Experience>
        <Link href="https://oleksandrvasylchuk.github.io/goit-react-hw-04-hooks-images/">
          Image Finder
        </Link>
        <Dots>..........</Dots>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, Axios<Bold>]</Bold>
        </Name>
        <Submenu>
          Own Project. Image finder - Keyword search image app. The public image
          searchservice Pixabay was used for HTTP requests.
        </Submenu>
      </Experience>
      <Experience>
        <Link href="https://dmitry-karas.github.io/front-end__division--filmoteka/">
          Filmoteka
        </Link>
        <Dots>......................</Dots>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM, JavaScript, Axios, Parcel,
          Handlebars <Bold>]</Bold>
        </Name>
        <Submenu>
          Team project. Filmoteka - help yourself with choosing a movie.
        </Submenu>
      </Experience>
      <Experience>
        <Link href="https://dmitry-karas.github.io/front-end__division--HellEN/">
          Hellen
        </Link>
        <Dots>..................................</Dots>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM <Bold>]</Bold>
        </Name>
        <Submenu>
          Team project. Responsive web page layout for HellEn - site for an
          Englishteacher.
        </Submenu>
      </Experience>
      <Experience>
        <Link href="https://olena-p.github.io/goit-markup-hw-08/">
          WebStudio
        </Link>
        <Dots>...................</Dots>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM <Bold>]</Bold>
        </Name>
        <Submenu>Own Project</Submenu>
      </Experience>
    </List>
  );
}
