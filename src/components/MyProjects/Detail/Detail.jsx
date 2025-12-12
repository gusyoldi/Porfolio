import { useEffect } from 'react'
import Card from '../Card/Card'
import projects from '../constants'
import Styles from './Detail.module.css'

const Detail = ({ projectId, detailRef }) => {
  const project = projects.find((p) => p.id === projectId)

  useEffect(() => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [projectId])

  return (
    <div ref={detailRef}>
      <h3>Descripción del proyecto:</h3>

      <div className={Styles.container}>
        <Card {...project} />

        <p>{project?.description}</p>

        <div className={Styles.techImg}>
          <p>Usé:</p>
          <span>
            {project.usedTech.map((img) => (
              <img src={img} alt={img} key={img} height={20} width={20} />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Detail
