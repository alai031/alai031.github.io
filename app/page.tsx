import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

export default function Main() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
