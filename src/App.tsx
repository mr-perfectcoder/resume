import { Achievements } from './components/web/Achievements';
import { Education } from './components/web/Education';
import { Experience } from './components/web/Experience';
import { Hero } from './components/web/Hero';
import { Skills } from './components/web/Skills';
import { ThemeToggle } from './components/ThemeToggle';
import { resumeData } from './data/resume';

function App() {
  return (
    <div className="site-shell">
      <ThemeToggle />
      <main>
        <Hero data={resumeData} />
        <Skills data={resumeData} />
        <Experience data={resumeData} />
        <Achievements data={resumeData} />
        <Education data={resumeData} />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} {resumeData.name}. Built around clear, verifiable engineering work.</p>
      </footer>
    </div>
  );
}

export default App;
