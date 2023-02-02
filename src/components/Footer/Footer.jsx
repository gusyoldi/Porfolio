import React from 'react'
import Styles from './Footer.module.css'
import CV from "../../assets/CurriculumVitae/GustavoYoldi-CV.pdf";


export default function Footer() {
  return (
    <div className={Styles.container}>
      <p><span>E-mail:</span> yoldi.gustavo@gmail.com</p>
      <p><span>Perfil de LinkedIn: </span><a href='https://www.linkedin.com/in/gustavo-yoldi/' target='_blank' rel='noreferrer'>www.linkedin.com/in/gustavo-yoldi/</a></p>
      <p><span>GitHub:</span> <a href="https://github.com/gusyoldi" target='_blank' rel='noreferrer'>github.com/gusyoldi</a></p>
    </div>
  )
}
