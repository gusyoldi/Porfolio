import React from 'react'
import Styles from './ToDeepen.module.css'

export default function ToDeepen() {
  return (
    <div className={Styles.container}>
      <h4>Conceptos en los que deseo profundizar</h4>
      <div>
      <ul>
        <li>TypeScript</li>
        <li>Scrum/Agilidad</li>
        <li>Unit Testing</li>
        <li>Integración continua</li>
      </ul>
      </div>
    </div>
  )
}
