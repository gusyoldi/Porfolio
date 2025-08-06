import Styles from "./Skills.module.css";



export default function Skills() {
  return (
    <section className={Styles.section}>
        <h3>Tecnologías</h3>
      <div className={Styles.container}>
      <Technology name='React'/>
      <Technology name='Storybook'/>
      <Technology name='Next.js'/>
      <Technology name='Node.js'/>
      <Technology name='TypeScript'/>
      <Technology name='Express'/>
      <Technology name='Tailwind'/>
      <Technology name='MySQL'/>
      <Technology name='Zod'/>
      <Technology name='Sequelize'/>
      </div>
    </section>
  );
}

 function Technology({ name }) {
  return (
    <div className={Styles.tech}>
      <p>{name}</p>
    </div>
  );
}
