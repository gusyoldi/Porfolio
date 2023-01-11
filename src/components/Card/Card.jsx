import React from "react";
import Styles from "./Card.module.css";
import UsedTech from "../UsedTech/UsedTech"


export default function Card({ title, subtitle, image, url, code, usedTech }) {
  console.log(code)
  return (
    
    <div className={Styles.card}>
      <h5 className={Styles.title}>{title}</h5>
      <h6 className={Styles.subtitle}>{subtitle}</h6>
      <img src={image} className={Styles.image} alt="project" />
      
        <p>Utilicé:</p>
        <div className={Styles.usedTech}>
        {/* {usedTech.map((tech, index) => {
          return <UsedTech img={tech} key={index} />
        })} */}
        
      </div>
      <div className={Styles.links}>
        <button className={Styles.button}>
          <a href={url} target="_blank" rel="noreferrer">
            Proyecto
          </a>
        </button>
        <button className={Styles.button}>
          <a href={code} target="_blank" rel="noreferrer">
            Código
          </a>
        </button>
      </div>
    </div>
  );
}
