import React from "react";
import Styles from "./ReactProjects.module.css";
import Card from "../../Card/Card";
import OchentaNoventaImg from "../../assets/images/ProjectsImg/ochentaNoventa.jpg";
import PortfolioImg from "../../assets/images/ProjectsImg/portfolio-img.png";

export default function ReactProjects() {
  return (
    <div id="reactProyects" className={Styles.container}>
        <h2>Proyectos React</h2>
      <div className={Styles.cardsContainer}>
        <Card
          title="Portfolio"
          subtitle="Usted está aquí!"
          image={PortfolioImg}
          url="https://gusyoldi.github.io/nuevo-cv"
          code="https://github.com/gusyoldi/nuevo-cv"
        />

        <Card
          title="Ochenta/Noventa"
          subtitle="Landing page"
          image={OchentaNoventaImg}
          url="https://gusyoldi.github.io/landing-OchentaNoventa"
          code="https://github.com/gusyoldi/landing-OchentaNoventa"
        />
      </div>
    </div>
  );
}
