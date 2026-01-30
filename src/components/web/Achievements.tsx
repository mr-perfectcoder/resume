import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { ResumeData } from '../../types';
import { Section } from './Section';

interface Props {
    data: ResumeData;
}

export const Achievements = ({ data }: Props) => {
    return (
        <Section title="Certifications & Achievements">
            <div className="space-y-6">
                {data.achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {achievement.title}
                                    </h3>
                                    {achievement.link && (
                                        <a
                                            href={achievement.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                            aria-label={`View ${achievement.title}`}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {achievement.issuer}
                                    {achievement.date && ` • ${achievement.date}`}
                                </p>
                                {achievement.description && (
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {achievement.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
