import type { ResumeData } from '../../types';
import { Section } from './Section';

interface Props {
  data: ResumeData;
}

export const Skills = ({ data }: Props) => (
  <Section title="Technical Skills" eyebrow="Core toolkit">
    <div className="skills-grid">
      {data.skills.map((category) => (
        <article className={category.title === 'AI Integration' ? 'skill-card secondary' : 'skill-card'} key={category.title}>
          <h3>{category.title}</h3>
          <p>{category.skills.join(' · ')}</p>
        </article>
      ))}
    </div>
  </Section>
);
