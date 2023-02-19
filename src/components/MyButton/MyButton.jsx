import Styles from "./MyButton.module.css";

export default function MyButton({content, url}) {
	return (
		<div className={Styles.myButton}>
			<a href={url} target="_blank" rel="noreferrer">
				<button>{content}</button>
			</a>
		</div>
	);
}
