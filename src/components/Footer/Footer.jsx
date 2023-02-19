import React from "react";
import Styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

import ShowTooltip from './MailTooltip';

export default function Footer() {
	return (
		<section className={Styles.section}>
			<div className={Styles.container}>
        <ShowTooltip />
        
				<a
					href="https://www.linkedin.com/in/gustavo-yoldi/"
					target="_blank"
					rel="noreferrer">
					<FaLinkedin className={Styles.linkeIcon}color="#0077b5" fontSize="1.5em"/>
				</a>

				<a href="https://github.com/gusyoldi" target="_blank" rel="noreferrer">
					<GoMarkGithub className={Styles.gitIcon} />
				</a>
			</div>
		</section>
	);
}





