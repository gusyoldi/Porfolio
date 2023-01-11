import React from "react";
import Styles from "./AboutMe.module.css";
import SaxImage from './../../assets/images/sax.png'

export default function AboutMe() {
  return (
    <div className={Styles.container}>
      <h3>Sobre mí</h3>

    
    <div className={Styles.PhotoText}>
      
      <div className={Styles.photo}>
        <img src={SaxImage} alt="SaxPhoto" />
      </div>
      <div className={Styles.text}>
        <p>
          Hola! Gracias por entrar a mi portfolio. Después de terminar el curso
          Fullstack Web Developer en{" "}
          <a
            href="https://www.digitalhouse.com/ar/productos/programcion/programacion-web-full-stack"
            target="_blank"
            rel="noreferrer"
          >
            Digital House
          </a>
          , me dediqué a afianzar mis conocimientos en Frontend y Backend.
        </p>
        <p>
          Hice, con React, la landing page del grupo musical para eventos{" "}
          <a
            href="https://gusyoldi.github.io/landing-OchentaNoventa"
            target="_blank"
            rel="noreferrer"
          >
            Ochenta Noventa
          </a>{" "}
          con la cual tuve la posibilidad de tocar en varias oportunidades,
          fusionando así mi hobby de toda la vida con mi nueva pasión: la
          informática. Además, realicé 4 proyectos de{" "}
          <a
            href="https://www.frontendmentor.io/challenges"
            target="_blank"
            rel="noreferrer"
          >
            FrontendMentor
          </a>
          , para practicar mis habilidades con CSS. Por otro lado, hice un
          proyecto de backend con Node para{" "}
          <a
            href="https://www.alkemy.org/faqs"
            target="_blank"
            rel="noreferrer"
          >
            Alchemy
          </a>{" "}
          consumiendo la API de películas de Disney y usando una base de datos
          MySQL.{" "}
        </p>
        <p>
          Aprendí muchísimo en este último tiempo, pero soy consciente de que me
          queda aún un largo recorrido.
        </p>
        <p>
          EL CÓDIGO DE TODOS ESTOS PROYECTOS ESTÁ EN MI{" "}
          <a
            href="https://github.com/gusyoldi?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>{" "}
          PERSONAL.
        </p>
      </div>
    </div>
    </div>
  );
}
