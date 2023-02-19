import React from "react";
import Styles from "./Card.module.css"; 
import MyButton from '../../MyButton/MyButton'

export default function Card({ title, subtitle, image, toProject, toGithub}) {
	return (
		<div className={Styles.cardComponent}>
			<div className={Styles.container}>
				<div className={Styles.text}>
					<h5>{title}</h5>
					<h6>{subtitle}</h6>
				</div>
				<div className={Styles.image}>
					<img src={image} alt="projectImg" />
				</div>

				{/* <p>Utilicé:</p>
        <div className={Styles.usedTech}>
        {usedTech.map((tech, index) => {
          return <UsedTech img={tech} key={index} />
        })}
        
      </div> */}
				<div className={Styles.buttons}>
        <MyButton content="Proyecto" url={toProject}/>
        <MyButton content="Código" url={toGithub}/>
					{/* <a href={url} target="_blank" rel="noreferrer">
						<button>Proyecto</button>
					</a>
					<a href={code} target="_blank" rel="noreferrer">
						<button>Código</button>
					</a> */}
				</div>
			</div>
		</div>
	);
}


