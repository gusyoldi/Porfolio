import React from 'react'
import Styles from './MyProjects.module.css'
import Card from '../Card/Card'
import OchentaNoventaImg from "../../assets/images/ProjectsImg/ochentaNoventa.jpg";
import CompartiUnDatoImg from "../../assets/images/ProjectsImg/comparti-un-dato.png"
import PortfolioImg from "../../assets/images/ProjectsImg/portfolio-img.png";
import SocialProofImg from '../../assets/images/ProjectsImg/desktop-design-img.jpg'
import REACT_IMG from "../../assets/images/Technologies/react.png";
import HTML_IMG from "../../assets/images/Technologies/html.png";
// import NodeImg from "../../assets/images/ProjectsImg/node-img.png";
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
          title="Portfolio"
          subtitle="Usted está aquí!"
          image={PortfolioImg}
          url="https://porfolio-gustavoyoldi.netlify.app/"
          code="https://github.com/gusyoldi/Porfolio.git"
        />
            <Card
               title="Compartí un dato"
               subtitle="App conectada a Supabase"
               image={CompartiUnDatoImg}
               url="https://comparti-un-dato-gustavoyoldi.netlify.app/"
               code="https://github.com/gusyoldi/Today-I-learned"
             />
          <Card
            title="Ochenta/Noventa"
            subtitle="Landing page"
            image={OchentaNoventaImg}
            url="https://ochentanoventa.com.ar"
            code="https://github.com/gusyoldi/landing-OchentaNoventa"
            usedTech={usedTech}
          />

      {/* <Card
          title="Disney Backend"
          subtitle="Base de datos"
          image={NodeImg} 
          url="https://gusyoldi.github.io/nuevo-cv"
          code="https://github.com/gusyoldi/nuevo-cv" 
        /> */}
           <Card
        title="Social Proof"
        subtitle="Diseño Responsive"
        image={SocialProofImg} 
        url="https://gusyoldi.github.io/social-proof-page-challenge/"
        code="https://github.com/gusyoldi/social-proof-page-challenge" 
      />
      {/* <Card
        title="Desktop Design"
        subtitle="Frontend Mentor"
        image={SocialProofImg} 
         url="https://gusyoldi.github.io/nuevo-cv"
        code="https://github.com/gusyoldi/nuevo-cv" 
      /> */}
      </div>
    </div>
  )
}
