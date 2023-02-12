import React from "react";
import Styles from "./Card.module.css";


export default function Card({ title, subtitle, image, url, code }) {
  
  return (
    
    <div className={Styles.card}>
      <h5 className={Styles.title}>{title}</h5>
      <h6 className={Styles.subtitle}>{subtitle}</h6>
      <img src={image} className={Styles.image} alt="project" />
      
        {/* <p>Utilicé:</p>
        <div className={Styles.usedTech}>
        {usedTech.map((tech, index) => {
          return <UsedTech img={tech} key={index} />
        })}
        
      </div> */}
      <div className={Styles.links}>
        <a href={url} target="_blank" rel="noreferrer" >
          <button >
            Proyecto
          </button>
        </a>
        <a href={code} target="_blank" rel="noreferrer" >
          <button >
            Código
          </button>
        </a>
      </div>
    </div>
  );
}
