import Head from 'next/head'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
 
export default function Main() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
