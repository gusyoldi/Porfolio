import Button from '../../Button/Button'
import Styles from './Card.module.css'

export default function Card({
  id,
  title,
  subtitle,
  image,
  toProject,
  toGithub,
  onOpenedDetail,
}) {
  function handleClickImage() {
    onOpenedDetail?.(id)
  }

  return (
    <div className={Styles.cardComponent}>
      <div className={Styles.container}>
        <div className={Styles.text}>
          <h5>{title}</h5>
          <h6>{subtitle}</h6>
        </div>

        <div className={Styles.image}>
          <div onClick={handleClickImage}>
            <img src={image} alt="projectImg" />
          </div>
        </div>

        <div className={Styles.buttons}>
          <Button content="Proyecto" url={toProject} />
          <Button content="Código" url={toGithub} />
        </div>
      </div>
    </div>
  )
}
