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
    return <SitePage section={<>03 <b>/</b> PROGRAMS</>} title={<>CHOOSE YOUR <em>PATH.</em></>} intro="Purpose-built cybersecurity courses for people ready to practice the work security teams need done now.">
        <div className="course-list">{courses.map((course) => <Link className="course-list-card" href={course.canonical} key={course.slug}><div className="course-list-visual"><img src={course.image} alt={course.alt} /><div className="course-list-image-shade" aria-hidden="true" /><div className="course-list-image-caption"><span>CYBERUS ACADEMY / {course.code}</span><b>LIVE CLASS</b></div><span className="course-list-live"><i /> ONLINE CLASS</span><span className="course-list-corner course-list-corner-top" aria-hidden="true" /><span className="course-list-corner course-list-corner-bottom" aria-hidden="true" /></div><div className="course-list-copy"><p className="content-label">{course.code} / COURSE</p><h2>{course.title}</h2><p>{course.shortDescription}</p><div className="course-list-footer"><span>VIEW COURSE</span><i>→</i></div></div></Link>)}</div>
    </SitePage>;
}
