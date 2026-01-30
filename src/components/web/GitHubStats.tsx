import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

interface Props {
    usernames: string[];
}

export const GitHubStats = ({ usernames }: Props) => {
    return (
        <section className="mb-12">
            <div className="space-y-8">
                {usernames.map((username, index) => (
                    <motion.div
                        key={username}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
                    >
                        <div className="w-full flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                @{username}
                            </h3>
                            <a
                                href={`https://github.com/${username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                View Profile
                            </a>
                        </div>

                        <div className="w-full overflow-x-auto pb-2 custom-scrollbar">
                            <GitHubCalendar
                                username={username}
                                colorScheme="light"
                                style={{ margin: '0 auto', maxWidth: '100%' }}
                                fontSize={12}
                                blockSize={12}
                                blockMargin={5}
                                theme={{
                                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
