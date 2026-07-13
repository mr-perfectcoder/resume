import { ExternalLink } from 'lucide-react';
import type { ResumeData } from '../../types';
import { Section } from './Section';

interface Props {
  data: ResumeData;
}

export const Achievements = ({ data }: Props) => (
  <Section title="Recognition" eyebrow="Awards & certification">
    <div className="recognition-grid">
      {data.achievements.map((achievement) => (
        <article className="recognition-card" key={`${achievement.title}-${achievement.date}`}>
          <div>
            <h3>{achievement.title}</h3>
            <p>{achievement.issuer}</p>
          </div>
          <time>{achievement.date}</time>
          <p>{achievement.description}</p>
          <a href={achievement.link} target="_blank" rel="noreferrer">
            View credential <ExternalLink aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  </Section>
);
