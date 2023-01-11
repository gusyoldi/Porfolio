import React from 'react'
import Card from '../../Card/Card'
import Styles from './CssProjects.module.css'
import CardImg from '../../assets/images/ProjectsImg/card-img.jpg'
import DesktopDesignImg from '../../assets/images/ProjectsImg/desktop-design-img.jpg'

export default function CssProjects() {
  return (
    <div className={Styles.container}>
      <h2>Proyectos CSS</h2>
    <div className={Styles.cardsContainer}>
      <Card
        title="Equilibrium Card Design"
        subtitle="Frontend Mentor"
        image={CardImg} 
        /*url="https://gusyoldi.github.io/nuevo-cv"
        code="https://github.com/gusyoldi/nuevo-cv" */
      />
      <Card
        title="Desktop Design Challenge"
        subtitle="Frontend Mentor"
        image={DesktopDesignImg} 
        /* url="https://gusyoldi.github.io/nuevo-cv"
        code="https://github.com/gusyoldi/nuevo-cv" */
      />
    </div>
  </div>
  )
}
