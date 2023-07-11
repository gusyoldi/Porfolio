import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Styles from './ContactForm.module.css'

export default function ReactBootstrapModal({ state, showModal, setShowModal }) {
  const handleCloseModal = () => setShowModal(false);
	return (
		<>
			<button type="submit" disabled={state.submitting} >
				Enviar
			</button>

			<Modal
				show={showModal}
				onHide={handleCloseModal}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Mensaje enviado</Modal.Title>
				</Modal.Header>
				<Modal.Body>Gracias por contactarme!</Modal.Body>
				<Modal.Footer>
					<Button  className={Styles.modal} color="flat" onClick={handleCloseModal}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
