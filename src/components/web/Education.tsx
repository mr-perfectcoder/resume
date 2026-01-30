import { Section } from './Section';
import type { ResumeData } from '../../types';

interface Props {
    data: ResumeData;
}

import { motion } from 'framer-motion';

// ... imports

export const Education = ({ data }: Props) => {
    return (
        <Section title="Education">
            <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                {data.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row md:justify-between items-start md:items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{edu.institution}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right md:text-right">
                            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{edu.period}</span>
                            <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                                {edu.grade}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};
