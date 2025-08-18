import CV from '../../assets/CurriculumVitae/GustavoYoldi-CV.pdf'
import FOTO_CV from '../../assets/images/Foto-CV.jpg'

import Styles from './Welcome.module.css'

export default function Welcome() {
  return (
    <section className={Styles.section} id="welcome">
      <div className={Styles.container}>
        <div className={Styles.image}>
          <img src={FOTO_CV} alt="CvPhoto" />
        </div>
        <div className={Styles.text}>
          <h1>Gustavo Yoldi</h1>
          <p>Desarrollador front-end</p>
          <div className={Styles.animations}>
            <div className={Styles.typewriterDeveloperContainer}>
              <div className={Styles.typewriterDeveloper}>
                <h4>Transformando ideas</h4>
              </div>
            </div>
            <div className={Styles.typewriterMusicianContainer}>
              <div className={Styles.typewriterMusician}>
                <h4>en experiencias digitales.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.stickys}>
        <a href={CV} download="Gustavo Yoldi - CV">
          <button>CV ⬇</button>
        </a>
      </div>
    </section>
  )
}
