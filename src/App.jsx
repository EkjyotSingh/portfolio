import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/effects/CursorGlow";
import ScrollProgress from "./components/effects/ScrollProgress";
import PageLoader from "./components/effects/PageLoader";

function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CursorGlow />
      <div className="app-shell w-full overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
