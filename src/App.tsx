import { resumeData } from './data/resume';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/web/Hero';
import { Experience } from './components/web/Experience';
import { Skills } from './components/web/Skills';
import { Education } from './components/web/Education';
import { Achievements } from './components/web/Achievements';
import { GitHubStats } from './components/web/GitHubStats';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <main className="max-w-4xl mx-auto px-6 py-8 md:px-12">
        <Hero data={resumeData} />
        <Experience data={resumeData} />
        <Skills data={resumeData} />
        <GitHubStats usernames={[resumeData.github, resumeData.secondGithub].filter(Boolean) as string[]} />
        <Achievements data={resumeData} />
        <Education data={resumeData} />

        <footer className="mt-20 py-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
