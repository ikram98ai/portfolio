import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ClientForm from './components/ClientForm';

const App = () => {
  return (
    <div className="font-sans text-apple-text bg-white antialiased selection:bg-apple-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Expertise />
        <Projects />
        <Experience />
      </main>
      <Contact />
      <ClientForm />
    </div>
  );
};

export default App;