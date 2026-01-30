import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import type { ResumeData } from '../../types';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from '../pdf/ResumePDF';
import { TypewriterText } from '../TypewriterText';

interface Props {
    data: ResumeData;
}

export const Hero = ({ data }: Props) => {
    return (
        <section className="min-h-[60vh] flex flex-col justify-center mb-16 pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-600 font-semibold tracking-wider text-sm mb-2 block uppercase"
                >
                    Resume
                </motion.span>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-50 mb-6 tracking-tight min-h-[1.2em]">
                    <TypewriterText text={data.name} delay={4} />
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light min-h-[1.5em]">
                    <TypewriterText text={data.title} delay={20} className="text-gray-600 dark:text-gray-300" />
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-justify">
                    {data.summary}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="flex flex-wrap gap-4 md:gap-8 mb-10 text-gray-600 dark:text-gray-400"
                >
                    <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Mail size={18} />
                        {data.email}
                    </a>
                    <a href={`tel:${data.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Phone size={18} />
                        {data.phone}
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        {data.location}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="flex gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://${data.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://${data.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        <Github size={24} />
                    </motion.a>

                    <PDFDownloadLink
                        document={<ResumePDF data={data} />}
                        fileName="Ashish_Ranjan_Resume.pdf"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg ml-auto md:ml-4"
                    >
                        {({ loading }) => (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2"
                            >
                                <Download size={20} />
                                {loading ? 'Preparing...' : 'Download Resume'}
                            </motion.div>
                        )}
                    </PDFDownloadLink>
                </motion.div>
            </motion.div>
        </section>
    );
};
