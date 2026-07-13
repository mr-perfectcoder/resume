import type { ResumeData } from '../../types';
import { Section } from './Section';

interface Props {
  data: ResumeData;
}

export const Education = ({ data }: Props) => (
  <Section title="Education">
    {data.education.map((education) => (
      <article className="education" key={education.institution}>
        <div>
          <h3>{education.degree}</h3>
          <p>{education.institution}</p>
        </div>
        <p><span>{education.period}</span>{education.grade}</p>
      </article>
    ))}
  </Section>
);
