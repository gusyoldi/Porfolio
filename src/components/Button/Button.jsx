import Styles from './Button.module.css'

export default function Button({ content, url }) {
  return (
    <div className={Styles.Button}>
      <a href={url} target="_blank" rel="noreferrer">
        <button>{content}</button>
      </a>
    </div>
  )
}
