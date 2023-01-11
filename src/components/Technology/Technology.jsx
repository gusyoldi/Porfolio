import React from "react";import Styles from './Technology.module.css'


export default function Technology({ name }) {
  return (
    <div className={Styles.tech}>
      <p>{name}</p>
    </div>
  );
}

{/* <div className={Styles.tech}>
      <img src={img} alt={alt} />
      <div className={Styles.name}>
        <p>{name}</p>
      </div>
    </div> */}