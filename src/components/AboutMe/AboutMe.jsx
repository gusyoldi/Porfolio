import React from "react";
import Styles from "./AboutMe.module.css";
import SaxImage from "./../../assets/images/sax.png";

export default function AboutMe() {
	return (
		<section className={Styles.section}>
			<h3>Sobre mí</h3>

			<div className={Styles.container}>
				<div className={Styles.photo}>
					<img src={SaxImage} alt="SaxPhoto" />
				</div>
				<div className={Styles.text}>
					<p>
						Hola! Gracias por entrar a mi portfolio. Después de terminar el
						curso Fullstack Web Developer en{" "}
						<a
							href="https://www.digitalhouse.com/ar/productos/programcion/programacion-web-full-stack"
							target="_blank"
							rel="noreferrer">
							Digital House
						</a>
						, me dediqué a afianzar mis conocimientos en Frontend y Backend.
					</p>
					<p>
						Hice, con React, la landing page del grupo musical para eventos{" "}
						<a
							href="https://ochentanoventa.com.ar"
							target="_blank"
							rel="noreferrer">
							Ochenta Noventa
						</a>{" "}
						con la cual tuve la posibilidad de tocar en varias oportunidades,
						fusionando así mi hobby de toda la vida con mi nueva pasión: la
						informática. Además, realicé 4 proyectos de{" "}
						<a
							href="https://www.frontendmentor.io/challenges"
							target="_blank"
							rel="noreferrer">
							FrontendMentor
						</a>
						, para practicar mis habilidades con CSS. Por otro lado, para
						ejercitar mis skills para resolver problemas realicé varios
						ejercicios en{" "}
						<a href="https://exercism.org/" target="_blank" rel="noreferrer">
							{" "}
							Exercism.org
						</a>{" "}
						en JavaScript.
					</p>
					<p>
						Lo último que hice en Enero de 2023 para entrenar mis habilidades
						fue el curso{" "}
						<a
							href="https://www.udemy.com/course/full-stack-crash-course/"
							target="_blank"
							rel="noreferrer">
							{" "}
							Full Stack Crash Course
						</a>{" "}
						en Udemy, dictado por Jonas Schmedtmann, de 12.5 horas de duración.
					</p>
					<p>
						Aprendí muchísimo en este último tiempo, pero soy consciente de que
						me queda aún un largo recorrido.
					</p>
					<p>
						Desde noviembre de 2022, formo parte del equipo de {" "}"
						<a
							href="https://www.edefi.com.ar/"
							target="_blank"
							rel="noreferrer">EDeFI
                </a>"{" "}
						como desarrollador frontend. Trabajo modelando componentes React con
						Tailwind CSS para replicar el mockup enviado por el diseñador.
					</p>
					<p>
						El código de todos estos proyectos está en mi {" "}
						<a
							href="https://github.com/gusyoldi?tab=repositories"
							target="_blank"
							rel="noreferrer">
							GitHub
						</a>{" "}
						personal.
					</p>
				</div>
			</div>
		</section>
	);
}
