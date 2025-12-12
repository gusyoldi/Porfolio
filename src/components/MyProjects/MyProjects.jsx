import { useRef, useState } from 'react'
import Card from './Card/Card'
import projects from './constants'
import Detail from './Detail/Detail'
import Styles from './MyProjects.module.css'

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const detailRef = useRef(null)

  function handleOpenedDetail(projectId) {
    setSelectedProject(projectId)
  }

  return (
    <section className={Styles.section}>
      <h3>Últimos proyectos</h3>

      <div className={Styles.cardsContainer}>
        {projects.map((project) => (
          <Card
            key={project.id}
            {...project}
            onOpenedDetail={handleOpenedDetail}
          />
        ))}
      </div>

      {selectedProject && (
        <div className={Styles.detailContainer}>
          <Detail projectId={selectedProject} detailRef={detailRef} />
        </div>
      )}
    </section>
  )
}
