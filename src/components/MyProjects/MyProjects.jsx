import React from 'react'
import Styles from './MyProjects.module.css'
import Card from './Card/Card'
import OchentaNoventaImg from '../../assets/images/ProjectsImg/ochentaNoventa.jpg'
import PigGameImg from '../../assets/images/ProjectsImg/pig-game-img.png'
import EdefiImg from '../../assets/images/ProjectsImg/edefi-img.png'
import CompartiUnDatoImg from '../../assets/images/ProjectsImg/comparti-un-dato.png'
import PortfolioImg from '../../assets/images/ProjectsImg/portfolio-img.png'
import SocialProofImg from '../../assets/images/ProjectsImg/desktop-design-img.jpg'
import REACT_IMG from '../../assets/images/Technologies/react.png'
import HTML_IMG from '../../assets/images/Technologies/html.png'

export default function MyProjects() {
	const usedTech = [REACT_IMG, HTML_IMG]
	return (
		<section className={Styles.section}>
			<h3>Últimos proyectos</h3>
			<div className={Styles.cardsContainer}>
				<Card
					title='Compartí un dato'
					subtitle='App conectada a Supabase'
					image={CompartiUnDatoImg}
					toProject='https://comparti-un-dato-gustavoyoldi.netlify.app/'
					toGithub='https://github.com/gusyoldi/Today-I-learned'
				/>
				<Card
					title='Liga EDEFI'
					subtitle='Web pública'
					image={EdefiImg}
					toProject='https://web.edefi.com.ar/'
				/>
				<Card
					title='Ochenta/Noventa'
					subtitle='Landing page'
					image={OchentaNoventaImg}
					toProject='https://ochentanoventa.com.ar'
					toGithub='https://github.com/gusyoldi/landing-OchentaNoventa'
					usedTech={usedTech}
				/>
				<Card
					title='Pig Game'
					subtitle='Juego PvP'
					image={PigGameImg}
					toProject='https://pig-game-gus.netlify.app/'
					toGithub='https://github.com/gusyoldi/pig-game'
					usedTech={usedTech}
				/>
				<Card
					title='Social Proof'
					subtitle='Diseño Responsive'
					image={SocialProofImg}
					toProject='https://gusyoldi.github.io/social-proof-page-challenge/'
					toGithub='https://github.com/gusyoldi/social-proof-page-challenge'
				/>
			</div>
		</section>
	)
}
