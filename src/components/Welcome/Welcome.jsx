import React from "react";

import FOTO_CV from "../../assets/images/Foto-CV.jpg";
import CV from "../../assets/CurriculumVitae/GustavoYoldi-CV.pdf";

import Styles from "./Welcome.module.css";

export default function Welcome() {
	return (
		<section className={Styles.section} id="welcome">
			<div className={Styles.container}>
				<div className={Styles.image}>
					<img src={FOTO_CV} alt="CvPhoto" />
				</div>
				<div className={Styles.text}>
					<h1>Gustavo Yoldi</h1>
					<p>Músico y desarrollador</p>
					<div className={Styles.animations}>
						<div className={Styles.typewriterDeveloperContainer}>
							<div className={Styles.typewriterDeveloper}>
								<h4>Resolviendo problemas</h4>
							</div>
						</div>
						<div className={Styles.typewriterMusicianContainer}>
							<div className={Styles.typewriterMusician}>
								<h4>con lógica y groove.</h4>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={Styles.stickys}>
				<a href={CV} download="Gustavo Yoldi - CV">
					<button>CV ⬇</button>
				</a>
				<a href="#contactForm">
					<button>Contactame</button>
				</a>
			</div>
		</section>
	);
}
