import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import MyProjects from "./components/MyProjects/MyProjects";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Welcome />
			<MyProjects />
			<Skills />
			<AboutMe />
			<ContactForm />
			<Footer />
		</>
	);
}


export default App;
