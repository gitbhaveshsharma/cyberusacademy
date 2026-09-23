import type { Metadata } from "next";
import Link from "next/link";
import { SitePage } from "../site-page";
import courses from "../courses.json";

export const metadata: Metadata = {
    title: "Cybersecurity Courses | Cyberus Academy",
    description: "Explore practical cybersecurity courses in ethical hacking, cloud security, digital forensics, SOC operations and more.",
    keywords: ["cybersecurity courses", "cybersecurity training", "ethical hacking course", "SOC analyst course", "cloud security training"],
    alternates: { canonical: "/courses" },
    openGraph: { title: "Cybersecurity Courses | Cyberus Academy", description: "Choose a practical cybersecurity learning path built around live classes and guided labs.", url: "/courses", type: "website" },
};

export default function CoursesPage() {
    return <SitePage section="PROGRAMS / 06 PATHWAYS" title={<>CHOOSE YOUR <em>PATH.</em></>} intro="Purpose-built cybersecurity courses for people ready to practice the work security teams need done now.">
        <div className="course-list">{courses.map((course) => <Link className="course-list-card" href={course.canonical} key={course.slug}><img src={course.image} alt={course.alt} /><div><p className="content-label">{course.code} / COURSE</p><h2>{course.title}</h2><p>{course.shortDescription}</p><span>VIEW COURSE →</span></div></Link>)}</div>
    </SitePage>;
}
