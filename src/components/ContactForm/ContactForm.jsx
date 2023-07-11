import React from "react";
import Styles from "./ContactForm.module.css";
import FormspreeForm from "./FormspreeForm";

export default function ContactForm() {
	return (
		<section className={Styles.section}>
			<FormspreeForm />
		</section>
	);
}
