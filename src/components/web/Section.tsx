import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    title: string;
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const Section = ({ title, children, className = "", delay = 0 }: Props) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`mb-12 ${className}`}
        >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
                {title}
                <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow" />
            </h2>
            {children}
        </motion.section>
    );
};
