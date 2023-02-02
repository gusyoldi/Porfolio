import React from "react";
import Styles from "./Skills.module.css";



export default function Skills() {
  return (
    <div className={Styles.container}>
        <h3>Tecnologías</h3>
      <div className={Styles.main}>
      <Technology name='JavaScript'/>
      <Technology name='React'/>
      <Technology name='NodeJS'/>
      <Technology name='ChakraUI'/>
      <Technology name='Express'/>
      <Technology name='Bootstrap'/>
      <Technology name='Sequelize'/>
      <Technology name='CSS'/>
      <Technology name='MySQL'/>
      <Technology name='Git'/>
      </div>
    </div>
  );
}

 function Technology({ name }) {
  return (
    <div className={Styles.tech}>
      <p>{name}</p>
    </div>
  );
}
