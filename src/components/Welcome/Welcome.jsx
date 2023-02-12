import React from 'react'

import FOTO_CV from "../../assets/images/Foto-CV.jpg";
import CV from "../../assets/CurriculumVitae/GustavoYoldi-CV.pdf";

import Styles from './Welcome.module.css'

export default function Welcome() {
  return (
    <div className={Styles.container} id="welcome">
        <div className={Styles.image}>
            <img src={FOTO_CV} alt='CvPhoto' />
        </div>
        <h1>Gustavo Yoldi</h1>
        <p>Un buscador de soluciones</p>
        <div className={Styles.animations}>
        <div className={Styles.typewriterDeveloperContainer}>
            <div className={Styles.typewriterDeveloper}>
                <h4>Programador junior.</h4>            
            </div>
        </div>
        <div className={Styles.typewriterMusicianContainer}>
            <div className={Styles.typewriterMusician}>
                <h4>Músico senior.</h4>
            </div>
        </div>
        </div>
        <div className={Styles.links}>
       <a href={CV} download='Gustavo Yoldi - CV'><button>CV ⬇</button></a>
       <a href="#contactForm"><button>Contactame</button></a>
        </div>
    </div>
  )
}