import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReactBootstrapModal from "./FormModal";

export default function FormspreeForm() {
	const [state, handleSubmit] = useForm("mzbwyjdd");
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const resetForm = () => {
		document.getElementById("contactForm").reset();
	};

	useEffect(() => {
		if (state.succeeded) {
			handleShowModal();
			resetForm();
		}
	}, [state.succeeded]);

	return (
		<form onSubmit={handleSubmit} id="contactForm">
			<label htmlFor="name">
				Nombre <span>*</span>
			</label>
			<input id="name" type="text" name="name" />
			<label htmlFor="email">
				Email <span>*</span>
			</label>
			<input id="email" type="" name="email" />
			<ValidationError prefix="Email" field="email" errors={state.errors} />

			<label htmlFor="message">
				Mensaje <span>*</span>
			</label>
			<textarea
				id="message"
				name="message"
				placeholder="Escriba su mensaje..."
				cols="30"
				rows="10"
			/>
			<ValidationError prefix="Message" field="message" errors={state.errors} />
			<ReactBootstrapModal state={state} showModal={showModal} setShowModal={setShowModal} />
			{/* <button type="submit" disabled={state.submitting}>
				Enviar
			</button> */}
		</form>
	);
}
