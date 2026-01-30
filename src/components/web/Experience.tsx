import { Section } from './Section';
import type { ResumeData } from '../../types';

interface Props {
    data: ResumeData;
}

import { motion } from 'framer-motion';

// ... imports

export const Experience = ({ data }: Props) => {
    return (
        <Section title="Work Experience">
            <motion.div
                className="space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                {data.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        className="group"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{job.role}</h3>
                                <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium">{job.company}</h4>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full h-fit mt-2 md:mt-0">
                                {job.period}
                            </span>
                        </div>
                        <ul className="space-y-3">
                            {job.description.map((point, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-blue-400" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};
