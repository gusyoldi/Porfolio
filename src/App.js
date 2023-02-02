import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import MyProjects from "./components/MyProjects/MyProjects";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Welcome />
      <MyProjects/>
      <Skills />

      <AboutMe />
      
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
