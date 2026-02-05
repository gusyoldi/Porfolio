import { useEffect } from 'react'
import Card from '../Card/Card'
import projects from '../constants'
import Styles from './Detail.module.css'

const Detail = ({ projectId, detailRef }) => {
  const project = projects.find((p) => p.id === projectId)

  useEffect(() => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [projectId, detailRef])

  return (
    <section ref={detailRef} className={Styles.container}>
      <h3>Descripción del proyecto:</h3>

      <article className={Styles.article}>
        <Card {...project} />

        <div className={Styles.info}>
          <p className={Styles.description}>{project?.description}</p>

          <div className={Styles.techs}>
            <span>Core Techs:</span>

            {project.coreTechs.map((img) => (
              <img src={img} alt={img} key={img} height={20} width={20} />
            ))}
          </div>
          <div className={Styles.techs}>
            <span>Otras:</span>

            {!project.otherTechs
              ? '-'
              : project.otherTechs.map((img) => (
                  <img src={img} alt={img} key={img} height={20} width={20} />
                ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Detail
