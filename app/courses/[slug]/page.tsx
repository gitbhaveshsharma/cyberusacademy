import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SitePage } from "../../site-page";

const courses = {
    "cybersecurity-fundamentals": { title: "Cybersecurity Fundamentals", description: "Build the essential knowledge behind secure systems, networks and modern threats.", image: "/courses/cyberus-academy-cybersecurity-fundamentals.avif", outcome: "Build a dependable foundation for every security pathway." },
    "ethical-hacking-penetration-testing": { title: "Ethical Hacking & Penetration Testing", description: "Think like an attacker to find weaknesses before they are exploited.", image: "/courses/cyberus-academy-ethical-hacking-penetration-testing.avif", outcome: "Practice reconnaissance, validation and responsible reporting." },
    "security-operations-soc": { title: "Security Operations (SOC)", description: "Investigate alerts, understand telemetry and respond with clarity.", image: "/courses/cyberus-academy-security-operations-soc.avif", outcome: "Turn noisy signals into confident security decisions." },
    "cloud-security": { title: "Cloud Security", description: "Secure cloud environments with practical controls, visibility and confidence.", image: "/courses/cyberus-academy-cloud-security.avif", outcome: "Design stronger visibility and control across cloud workloads." },
    "digital-forensics": { title: "Digital Forensics", description: "Trace activity, preserve evidence and turn signals into a defensible story.", image: "/courses/cyberus-academy-digital-forensics.avif", outcome: "Build an evidence-led approach to investigation." },
    "governance-risk-compliance": { title: "Governance, Risk & Compliance", description: "Connect technical security work to policy, risk and resilient outcomes.", image: "/courses/cyberus-academy-cybersecurity-governance-risk-compliance.avif", outcome: "Translate security priorities into accountable action." },
} as const;

type CourseSlug = keyof typeof courses;
export function generateStaticParams() { return Object.keys(courses).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const course = courses[slug as CourseSlug]; return course ? { title: `${course.title} Course | Cyberus Academy`, description: course.description } : {}; }

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = courses[slug as CourseSlug];
    if (!course) notFound();
    return <SitePage section="COURSE / PRACTICAL PATHWAY" title={<>{course.title}</>} intro={course.description}>
        <div className="course-detail"><img src={course.image} alt={`${course.title} course`} /><div><p className="content-label">OUTCOME / {course.outcome}</p><h2>Practice before pressure.</h2><p>Work through structured lessons, guided exercises and realistic lab decisions designed to make the next step feel concrete.</p><ul><li>Scenario-led practical exercises</li><li>Guided lab environments</li><li>Feedback built around useful decisions</li></ul><Link className="button button-primary" href="/contact">START A CONVERSATION <span>→</span></Link></div></div>
    </SitePage>;
}
