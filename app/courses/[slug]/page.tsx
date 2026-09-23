import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SitePage } from "../../site-page";
import courses from "../../courses.json";

type Course = (typeof courses)[number];
export function generateStaticParams() { return courses.map((course) => ({ slug: course.slug })); }
function getCourse(slug: string): Course | undefined { return courses.find((course) => course.slug === slug); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourse(slug);
    if (!course) return {};
    return { title: `${course.title} Course | Cyberus Academy`, description: course.description, keywords: course.keywords, alternates: { canonical: course.canonical }, openGraph: { title: `${course.title} Course | Cyberus Academy`, description: course.description, url: course.canonical, images: [{ url: course.image, alt: course.alt }], type: "article" }, twitter: { card: "summary_large_image", title: `${course.title} Course | Cyberus Academy`, description: course.description, images: [course.image] } };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = getCourse(slug);
    if (!course) notFound();
    return <SitePage section={`COURSE / ${course.code} / PRACTICAL PATHWAY`} title={<>{course.title}</>} intro={course.description}>
        <div className="course-detail"><img src={course.image} alt={course.alt} /><div><p className="content-label">OUTCOME / {course.outcome}</p><h2>Practice before pressure.</h2><p>{course.audience}</p><div className="course-meta"><div><span>LEVEL</span><b>{course.level}</b></div><div><span>DURATION</span><b>{course.duration}</b></div><div><span>FORMAT</span><b>{course.format}</b></div></div><h3>What you will practice</h3><ul>{course.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><Link className="button button-primary" href="/contact">START A CONVERSATION <span>→</span></Link></div></div>
        <div className="course-information"><div><p className="content-label">WHO THIS IS FOR</p><h2>Built for useful progress.</h2><p>{course.audience}</p><p><strong>Prerequisites:</strong> {course.prerequisites.join(" • ")}</p></div><div><p className="content-label">LEARNING OUTCOMES</p><ul>{course.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></div></div>
        <div className="course-modules"><p className="content-label">COURSE STRUCTURE</p><h2>Inside the pathway.</h2><div>{course.modules.map((module, index) => <article key={module}><span>0{index + 1}</span><h3>{module}</h3><p>Guided practice, useful context and a decision you can carry into the next exercise.</p></article>)}</div></div>
        <div className="course-information"><div><p className="content-label">TOOLS & ASSESSMENT</p><h2>Practice with purpose.</h2><p><strong>Tools:</strong> {course.tools.join(" • ")}</p><p><strong>Assessment:</strong> {course.assessment}</p><p><strong>Certificate:</strong> {course.certification}</p></div><div><p className="content-label">COMMON QUESTIONS</p>{course.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div>
    </SitePage>;
}
