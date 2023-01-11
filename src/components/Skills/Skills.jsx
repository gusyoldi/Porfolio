import React from "react";
import Styles from "./Skills.module.css";
import Technology from "../Technology/Technology";



export default function Skills() {
  return (
    <div className={Styles.container}>
        <h3>Tecnologías</h3>
      <div className={Styles.technologies}>
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
   {/* <Technology img={REACT_IMG} name="React" alt="React" />
        <Technology img={NODE_IMG} name="Node" alt="Node" />
        <Technology img={MYSQL_IMG} name="MySQL" alt="MySql" />
        <Technology img={GIT_IMG} name="Git" alt="Git" />
        <Technology img={BOOTSTRAP_IMG} name="Bootstrap" alt="Bootstrap" /> */}