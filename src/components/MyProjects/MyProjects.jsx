import CompartiUnDatoImg from '../../assets/images/ProjectsImg/comparti-un-dato.png'
import EdefiImg from '../../assets/images/ProjectsImg/edefi-img.png'
import OchentaNoventaImg from '../../assets/images/ProjectsImg/ochentaNoventa.jpg'
import PigGameImg from '../../assets/images/ProjectsImg/pig-game-img.png'
import ReactPizzaImg from '../../assets/images/ProjectsImg/react-pizza.png'
import HTML_IMG from '../../assets/images/Technologies/html.png'
import REACT_IMG from '../../assets/images/Technologies/react.png'
import Card from './Card/Card'
import Styles from './MyProjects.module.css'

export default function MyProjects() {
  const usedTech = [REACT_IMG, HTML_IMG]
  return (
    <section className={Styles.section}>
      <h3>Últimos proyectos</h3>
      <div className={Styles.cardsContainer}>
        <Card
          title="React-Pizza"
          subtitle="E-commerce"
          image={ReactPizzaImg}
          toProject="https://react-pizza-gus.netlify.app/"
          toGithub="https://github.com/gusyoldi/react-pizza"
        />
        <Card
          title="Compartí un dato"
          subtitle="App conectada a Supabase"
          image={CompartiUnDatoImg}
          toProject="https://comparti-un-dato-gustavoyoldi.netlify.app/"
          toGithub="https://github.com/gusyoldi/Today-I-learned"
        />
        <Card
          title="Liga EDEFI"
          subtitle="Web pública"
          image={EdefiImg}
          toProject="https://web.edefi.com.ar/"
        />
        <Card
          title="Ochenta Noventa"
          subtitle="Landing page"
          image={OchentaNoventaImg}
          toProject="https://ochentanoventa.com.ar"
          toGithub="https://github.com/gusyoldi/landing-OchentaNoventa"
          usedTech={usedTech}
        />
        <Card
          title="Pig Game"
          subtitle="Juego PvP"
          image={PigGameImg}
          toProject="https://pig-game-gus.netlify.app/"
          toGithub="https://github.com/gusyoldi/pig-game"
          usedTech={usedTech}
        />
      </div>
    </section>
  )
}
