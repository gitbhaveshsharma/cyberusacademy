import type { Metadata } from "next";
import Link from "next/link";
import { SitePage } from "../site-page";

export const metadata: Metadata = {
    title: "Cybersecurity Courses | Cyberus Academy",
    description: "Explore practical cybersecurity courses in ethical hacking, cloud security, digital forensics, SOC operations and more.",
};

const courses = [
    ["cybersecurity-fundamentals", "Cybersecurity Fundamentals", "Build essential knowledge across systems, networks and modern threats.", "/courses/cyberus-academy-cybersecurity-fundamentals.avif"],
    ["ethical-hacking-penetration-testing", "Ethical Hacking & Penetration Testing", "Learn to find weaknesses, validate risk and communicate findings responsibly.", "/courses/cyberus-academy-ethical-hacking-penetration-testing.avif"],
    ["security-operations-soc", "Security Operations (SOC)", "Investigate alerts, understand telemetry and respond with clarity.", "/courses/cyberus-academy-security-operations-soc.avif"],
    ["cloud-security", "Cloud Security", "Secure cloud environments with practical controls and useful visibility.", "/courses/cyberus-academy-cloud-security.avif"],
    ["digital-forensics", "Digital Forensics", "Preserve evidence, trace activity and turn signals into a defensible story.", "/courses/cyberus-academy-digital-forensics.avif"],
    ["governance-risk-compliance", "Governance, Risk & Compliance", "Connect technical security work to policy, risk and resilient outcomes.", "/courses/cyberus-academy-cybersecurity-governance-risk-compliance.avif"],
];

export default function CoursesPage() {
    return <SitePage section="PROGRAMS / 06 PATHWAYS" title={<>CHOOSE YOUR <em>PATH.</em></>} intro="Purpose-built cybersecurity courses for people ready to practice the work security teams need done now.">
        <div className="course-list">{courses.map(([slug, title, description, image], index) => <Link className="course-list-card" href={`/courses/${slug}`} key={slug}><img src={image} alt="" /><div><p className="content-label">0{index + 1} / COURSE</p><h2>{title}</h2><p>{description}</p><span>VIEW COURSE →</span></div></Link>)}</div>
    </SitePage>;
}
