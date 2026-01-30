import { Section } from './Section';
import type { ResumeData } from '../../types';
import { motion } from 'framer-motion';

interface Props {
    data: ResumeData;
}

export const Skills = ({ data }: Props) => {
    return (
        <Section title="Technical Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.skills.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="p-6 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all"
                    >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-md font-medium border border-gray-100 dark:border-gray-600 cursor-default hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
