import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';
import type { ResumeData } from '../../types';

// Register fonts
Font.register({
    family: 'Inter',
    fonts: [
        { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-400-normal.woff', fontWeight: 400 },
        { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-500-normal.woff', fontWeight: 500 },
        { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-600-normal.woff', fontWeight: 600 },
        { src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-700-normal.woff', fontWeight: 700 },
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Inter',
        fontSize: 10,
        color: '#1f2937',
        lineHeight: 1.4,
        backgroundColor: '#ffffff',
        borderTopWidth: 5,
        borderTopColor: '#1e3a8a', // Dark Navy accent top border
    },

    // Header Styles
    header: {
        marginBottom: 20,
        paddingBottom: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#3b82f6',
        borderBottomStyle: 'solid',
    },
    name: {
        fontSize: 26,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 6,
        letterSpacing: 0.3,
    },
    title: {
        fontSize: 13,
        fontWeight: 500,
        color: '#3b82f6',
        marginBottom: 12,
        marginTop: 10,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        fontSize: 9,
        color: '#6b7280',
        alignItems: 'center',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    contactIcon: {
        width: 10,
        height: 10,
        marginRight: 3,
    },
    contactSeparator: {
        color: '#d1d5db',
        marginHorizontal: 4,
    },
    contactLink: {
        color: '#3b82f6',
        textDecoration: 'none',
    },

    // Section Styles
    section: {
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: 'uppercase',
        color: '#ffffff',
        backgroundColor: '#1e3a8a', // Dark Navy Background
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 8,
        marginLeft: -10,
        marginRight: -10,
        borderRadius: 2,
        letterSpacing: 0.8,
    },

    // Summary Styles
    summaryText: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#374151',
        textAlign: 'justify',
    },

    // Job/Experience Styles
    jobItem: {
        marginBottom: 10,
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 3,
    },
    jobLeft: {
        flex: 1,
    },
    companyName: {
        fontSize: 11,
        fontWeight: 700,
        color: '#111827',
    },
    jobRole: {
        fontSize: 10,
        fontWeight: 500,
        color: '#4b5563',
        marginTop: 1,
    },
    jobDate: {
        fontSize: 9,
        color: '#6b7280',
        fontWeight: 500,
    },
    bulletList: {
        marginTop: 4,
    },
    bulletItem: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    bulletMarker: {
        width: 10,
        fontSize: 8,
        color: '#1e3a8a', // Matching Dark Navy
        marginTop: 1,
    },
    bulletText: {
        flex: 1,
        fontSize: 9.5,
        lineHeight: 1.4,
        color: '#374151',
    },

    // Skills Styles
    skillsContainer: {
        gap: 5,
    },
    skillRow: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    skillCategory: {
        fontSize: 10,
        fontWeight: 700,
        color: '#111827',
        width: 160, // Increased from 110 to fix wrapping
    },
    skillList: {
        flex: 1,
        fontSize: 9.5,
        color: '#374151',
        lineHeight: 1.4,
    },

    // Education Styles
    educationItem: {
        marginBottom: 8,
    },
    educationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    institutionName: {
        fontSize: 11,
        fontWeight: 700,
        color: '#111827',
    },
    degreeName: {
        fontSize: 10,
        color: '#374151',
        marginTop: 1,
    },
    gradeInfo: {
        fontSize: 9,
        color: '#666',
        marginTop: 1,
    },
    // Achievement Styles
    achievementItem: {
        marginBottom: 4,
    },
    achievementHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
        alignItems: 'baseline',
    },
    achievementTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    achievementTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: '#111827',
    },
    achievementLink: {
        marginLeft: 4,
        textDecoration: 'none',
        fontSize: 8,
        color: '#2563EB',
    },
    achievementDate: {
        fontSize: 9,
        color: '#6B7280',
    },
    achievementDescription: {
        fontSize: 9,
        color: '#374151',
    },
});

interface Props {
    data: ResumeData;
}

export const ResumePDF = ({ data }: Props) => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.contactRow}>
                    <Text>{data.email}</Text>
                    <Text style={styles.contactSeparator}>•</Text>
                    <Text>{data.phone}</Text>
                    <Text style={styles.contactSeparator}>•</Text>
                    <Text>{data.location}</Text>
                    <Text style={styles.contactSeparator}>•</Text>
                    <Link src={`https://${data.linkedin}`} style={styles.contactLink}>
                        {data.linkedin}
                    </Link>
                    <Text style={styles.contactSeparator}>•</Text>
                    <Link src={`https://${data.github}`} style={styles.contactLink}>
                        {data.github}
                    </Link>
                </View>
            </View>

            {/* Professional Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.summaryText}>{data.summary}</Text>
            </View>

            {/* Work Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Work Experience</Text>
                {data.experience.map((job, index) => (
                    <View key={index} style={styles.jobItem}>
                        <View style={styles.jobHeader}>
                            <View style={styles.jobLeft}>
                                <Text style={styles.companyName}>{job.company}</Text>
                                <Text style={styles.jobRole}>{job.role}</Text>
                            </View>
                            <Text style={styles.jobDate}>{job.period}</Text>
                        </View>
                        <View style={styles.bulletList}>
                            {job.description.map((desc, i) => (
                                <View key={i} style={styles.bulletItem} wrap={false}>
                                    <Text style={styles.bulletMarker} wrap={false}>•</Text>
                                    <Text style={styles.bulletText} wrap={false}>{desc}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            {/* Technical Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technical Skills</Text>
                <View style={styles.skillsContainer}>
                    {data.skills.map((category, index) => (
                        <View key={index} style={styles.skillRow}>
                            <Text style={styles.skillCategory}>{category.title}:</Text>
                            <Text style={styles.skillList}>{category.skills.join(', ')}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Achievements Section */}
            {data.achievements && data.achievements.length > 0 && (
                <View style={styles.section} wrap={false}>
                    <Text style={styles.sectionTitle}>Certifications & Achievements</Text>
                    {data.achievements.map((achievement, index) => (
                        <View key={index} style={styles.achievementItem}>
                            <View style={styles.achievementHeader}>
                                <View style={styles.achievementTitleContainer}>
                                    {achievement.link ? (
                                        <Link src={achievement.link} style={{ textDecoration: 'none' }}>
                                            <Text style={{ ...styles.achievementTitle, color: '#2563EB', textDecoration: 'underline' }}>
                                                {achievement.title}
                                            </Text>
                                        </Link>
                                    ) : (
                                        <Text style={styles.achievementTitle}>
                                            {achievement.title}
                                        </Text>
                                    )}
                                </View>
                                <Text style={styles.achievementDate}>
                                    {achievement.date}
                                </Text>
                            </View>
                            <Text style={styles.achievementDescription}>
                                {achievement.issuer} • {achievement.description}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {data.education.map((edu, index) => (
                    <View key={index} style={styles.educationItem}>
                        <View style={styles.educationHeader}>
                            <Text style={styles.institutionName}>{edu.institution}</Text>
                            <Text style={styles.jobDate}>{edu.period}</Text>
                        </View>
                        <Text style={styles.degreeName}>{edu.degree}</Text>
                        <Text style={styles.gradeInfo}>{edu.grade}</Text>
                    </View>
                ))}
            </View>

        </Page>
    </Document>
);
