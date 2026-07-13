import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { ResumeData } from '../../types';

interface Props {
  data: ResumeData;
}

export const Hero = ({ data }: Props) => (
  <header className="resume-hero">
    <div className="eyebrow">Senior software engineer</div>
    <h1>{data.name}</h1>
    <p className="hero-title">{data.title}</p>
    <p className="hero-summary">{data.summary}</p>

    <ul className="focus-list" aria-label="Career highlights">
      {data.focusAreas.map((area) => <li key={area}>{area}</li>)}
    </ul>

    <div className="contact-list" aria-label="Contact information">
      <a href={`mailto:${data.email}`}><Mail aria-hidden="true" />{data.email}</a>
      <span><MapPin aria-hidden="true" />{data.location}</span>
      <a href={data.linkedin.url} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" />LinkedIn</a>
      <a href={data.github.url} target="_blank" rel="noreferrer"><Github aria-hidden="true" />GitHub</a>
    </div>

    <a className="download-button" href={`${import.meta.env.BASE_URL}Ashish_Ranjan_Resume.pdf`} download>
      <Download aria-hidden="true" />Download Resume
    </a>
  </header>
);
