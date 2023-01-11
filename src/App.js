import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import MyProjects from "./components/MyProjects/MyProjects";
// import ReactProjects from "./components/ReactProjects/ReactProjects";
// import NodeProjects from "./components/NodeProjects/NodeProjects";
// import CssProjects from "./components/CssProjects/CssProjects";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import ToDeepen from "./components/Backup/ToDeepen/ToDeepen";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Welcome />
      <MyProjects/>
      <Skills />
      {/* <ReactProjects />
      <NodeProjects />
      <CssProjects /> */}
      <AboutMe />
      {/* <ToDeepen /> */}
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
