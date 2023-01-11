import React from 'react'
import Styles from './ContactMe.module.css'
import { useForm, ValidationError } from '@formspree/react';

export default function ContactMe() {
  const [state, handleSubmit] = useForm("mzbwyjdd");
  if (state.succeeded) {
    return alert('Thanks for joining!');
}
  return (
    <div className={Styles.container}>
       <form onSubmit={handleSubmit}>
        <label htmlFor="name">
      Nombre <span>*</span>
    </label>
    <input
      id="name"
      type="text" 
      name="name"
    />
    <label htmlFor="email">
      Email <span>*</span>
    </label>
    <input
      id="email"
      type="email" 
      name="email"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
     <label htmlFor="message">
      Mensaje <span>*</span>
    </label>
    <textarea
      id="message"
      name="message"
      placeholder='Escriba su mensaje...' 
      cols="30" 
      rows="10"
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button type="submit" disabled={state.submitting}>
      Enviar
    </button>
  </form>
    </div>
   
    )
  }
  

  // <div id='ContactMe' className={Styles.container}>
    //   <h3>Contactame</h3>
    //   <form action="https://formspree.io/f/mzbwyjdd" method='POST'>
    //     <label htmlFor="name">Nombre <span>*</span></label>
    //     <input type="text" name='name'/>
    //     <label htmlFor="email">E-mail <span>*</span></label>
    //     <input type="text" name='email' />
    //     <label htmlFor="message">Mensaje <span>*</span></label>
    //     <textarea name="message" placeholder='Escriba su mensaje...' cols="30" rows="10"></textarea>
    //     <button type='submit'>Enviar correo</button>
    //   </form>
    // </div>