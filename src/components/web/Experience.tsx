import type { ResumeData } from '../../types';
import { Section } from './Section';

interface Props {
  data: ResumeData;
}

export const Experience = ({ data }: Props) => (
  <Section title="Professional Experience" eyebrow="Selected impact">
    <div className="timeline">
      {data.experience.map((job) => (
        <article className="role" key={`${job.company}-${job.period}`}>
          <div className="role-heading">
            <div>
              <h3>{job.role}</h3>
              <p>{job.company}</p>
            </div>
            <time>{job.period}</time>
          </div>
          <ul>
            {job.description.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);
