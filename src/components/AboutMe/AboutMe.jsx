import Styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={Styles.section}>
      <h3>Sobre mí</h3>

      <div className={Styles.container}>
        <div className={Styles.text}>
          <p>
            Soy desarrollador Frontend con fuerte enfoque en experiencia de
            usuario, diseño prolijo y atención al detalle. Me especializo en{' '}
            <strong>React, Next.js y TypeScript</strong>, y disfruto crear
            interfaces claras, mantenibles y fáciles de escalar.
          </p>

          <p>
            Después de formarme como Fullstack Web Developer en{' '}
            <a
              href="https://www.digitalhouse.com/ar/productos/programcion/programacion-web-full-stack"
              target="_blank"
              rel="noreferrer"
            >
              Digital House
            </a>
            , trabajé dos años en Auronix, donde tuve la oportunidad de aprender
            de desarrolladores muy experimentados. Allí consolidé prácticas que
            hoy considero fundamentales: código limpio, buena cobertura de
            tests, documentación clara y procesos de trabajo ordenados junto a
            equipos de UX/UI, Producto y QA.
          </p>

          <p>
            En el último tiempo estuve explorando e incorporando{' '}
            <strong>IA aplicada al desarrollo Frontend</strong>, trabajando con
            modelos LLM para generar variantes de contenido, automatizar flujos
            dentro de aplicaciones y mejorar la experiencia de usuario. También
            experimenté con herramientas como{' '}
            <strong>MCP (Model Context Protocol)</strong> e integraciones con
            GitHub para crear entornos más inteligentes y asistidos durante el
            desarrollo.
          </p>

          <p>
            Hoy sigo creciendo como Frontend, buscando siempre escribir mejor
            código, aprender nuevas prácticas y aportar a equipos que valoren la
            calidad, la claridad y los buenos procesos de desarrollo.
          </p>
        </div>
      </div>
    </section>
  )
}
