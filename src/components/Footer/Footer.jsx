import React from 'react'
import Styles from './Footer.module.css'
import CV from "../../assets/CurriculumVitae/GustavoYoldi-CV.pdf";


export default function Footer() {
  return (
    <div className={Styles.container}>
      <p><span>E-mail:</span> yoldi.gustavo@gmail.com</p>
      <p><span>GitHub:</span> <a href="https://github.com/gusyoldi" target='_blank' rel='noreferrer'>github.com/gusyoldi</a></p>
      <p><span>Linkedin:</span> <a href="https://www.linkedin.com/in/gustavo-yoldi-760957156/" target='_blank' rel='noreferrer'>linkedin.com/in/gustavo-yoldi-760957156/</a></p>
      <button><a href={CV} download='Gustavo Yoldi - CV'>Descargar CV ⬇</a></button>
      {/* <button><a href="#welcome">Inicio</a></button> */}
    </div>
  )
}
