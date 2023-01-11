import React from 'react'
import Styles from './NodeProjects.module.css'
import Card from '../../Card/Card'
import NodeImg from "../../assets/images/ProjectsImg/node-img.png";


export default function NodeProjects() {
  return (
    <div className={Styles.container}>
        <h2>Proyecto Node</h2>
      <div className={Styles.cardsContainer}>
        <Card
          title="Disney Backend"
          subtitle="Base de datos"
          image={NodeImg} 
          /* url="https://gusyoldi.github.io/nuevo-cv"
          code="https://github.com/gusyoldi/nuevo-cv" */
        />
      </div>
    </div>
  )
}
