import type { ReactNode } from 'react';

interface Props {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ title, eyebrow, children, className = '' }: Props) => (
  <section className={`resume-section ${className}`}>
    <div className="section-heading">
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
    {children}
  </section>
);
