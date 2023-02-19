import React from "react";
import Styles from "./ContactForm.module.css";

import FormspreeForm from "./FormspreeForm";

export default function ContactForm() {
	return (
		<section className={Styles.section}>
			{/* <h3>Contactame</h3> */}
			<FormspreeForm />
		</section>
	);
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
