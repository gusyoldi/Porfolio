import Styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={Styles.section}>
      <h3>Sobre mí</h3>

      <div className={Styles.container}>
        <div className={Styles.text}>
          <p>
            Hola! Gracias por entrar a mi portfolio. Después de terminar el
            curso Fullstack Web Developer en{' '}
            <a
              href="https://www.digitalhouse.com/ar/productos/programcion/programacion-web-full-stack"
              target="_blank"
              rel="noreferrer"
            >
              Digital House
            </a>
            , me dediqué a afianzar mis conocimientos en Frontend y Backend.
          </p>
          <p>
            Desde entonces tuve la suerte de trabajar para Auronix por un
            período de dos años, en donde aprendí muchísimo sobre desarrollo y
            trabajo en equipo.
          </p>
          <div>
            <p>
              En la planing se estimaban las historias de usuario entre todos y
              se definían los criterios de aceptacion, tambien el equipo de QA
              dejaba acentado los casos de uso para poder hacer test más
              completos.
            </p>
            <p>
              Luego el equipo de UI/UX se encargaba de adjuntar el Figma
              correspondiente a la UI a desarrollar y a veces un flow que
              definía la experiencia del usuario.
            </p>
          </div>
          <p>
            Más allá de lo técnico, me llevé algo que para mí es igual de
            importante: el valor de trabajar con procesos claros, escribir
            código que otros puedan entender, y pensar siempre en cómo mejorar
            la experiencia de quien usa lo que hacemos.
          </p>
          <p>
            Hoy sigo aplicando todo eso en los proyectos que encaro, buscando
            crecer como desarrollador y como parte de un equipo.
          </p>
        </div>
      </div>
    </section>
  )
}
