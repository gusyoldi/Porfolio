import React from 'react'
import Styles from './MyProjects.module.css'
import Card from '../Card/Card'
import NodeImg from "../../assets/images/ProjectsImg/node-img.png";
import OchentaNoventaImg from "../../assets/images/ProjectsImg/ochentaNoventa.jpg";
import PortfolioImg from "../../assets/images/ProjectsImg/portfolio-img.png";
import EquilibriumImg from '../../assets/images/ProjectsImg/card-img.jpg'
import DesktopDesignImg from '../../assets/images/ProjectsImg/desktop-design-img.jpg'
import REACT_IMG from "../../assets/images/Technologies/react.png";
import HTML_IMG from "../../assets/images/Technologies/html.png";
// import CSS_IMG from "../../assets/images/Technologies/css.png";
// import JS_IMG from "../../assets/images/Technologies/js.png";
// import NODE_IMG from "../../assets/images/Technologies/node.png";
// import MYSQL_IMG from "../../assets/images/Technologies/sql.png";
// import GIT_IMG from "../../assets/images/Technologies/git.png";
// import BOOTSTRAP_IMG from "../../assets/images/Technologies/git.png";

export default function MyProjects() {

  const usedTech = [REACT_IMG, HTML_IMG]
  return (
    <div className={Styles.container}>
      <h3>Últimos Proyectos</h3>
      <div className={Styles.cardsContainer}>
        <Card
          title="Ochenta/Noventa"
          subtitle="Landing page"
          image={OchentaNoventaImg}
          url="https://gusyoldi.github.io/landing-OchentaNoventa"
          code="https://github.com/gusyoldi/landing-OchentaNoventa"
          usedTech={usedTech}
        />
      <Card
          title="Disney Backend"
          subtitle="Base de datos"
          image={NodeImg} 
          /* url="https://gusyoldi.github.io/nuevo-cv"
          code="https://github.com/gusyoldi/nuevo-cv" */
        />
        <Card
          title="Portfolio"
          subtitle="Usted está aquí!"
          image={PortfolioImg}
          url="https://gusyoldi.github.io/nuevo-cv"
          code="https://github.com/gusyoldi/nuevo-cv"
        />

           <Card
        title="Equilibrium"
        subtitle="Frontend Mentor"
        image={EquilibriumImg} 
        /*url="https://gusyoldi.github.io/nuevo-cv"
        code="https://github.com/gusyoldi/nuevo-cv" */
      />
      <Card
        title="Desktop Design"
        subtitle="Frontend Mentor"
        image={DesktopDesignImg} 
        /* url="https://gusyoldi.github.io/nuevo-cv"
        code="https://github.com/gusyoldi/nuevo-cv" */
      />
       <Card
          title="Ochenta/Noventa"
          subtitle="Landing page"
          image={OchentaNoventaImg}
          url="https://gusyoldi.github.io/Today-I-learned/"
          code="https://github.com/gusyoldi/Today-I-learned"
        />
      </div>
    </div>
  )
}
