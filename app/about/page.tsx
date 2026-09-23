import type { Metadata } from "next";
import { ContentBlock, SitePage } from "../site-page";

export const metadata: Metadata = {
    title: "About Cyberus Academy | Practical Cybersecurity Education",
    description: "Learn how Cyberus Academy helps future security professionals build practical, job-ready cybersecurity skills.",
};

export default function AboutPage() {
    return <SitePage section="ABOUT CYBERUS" title={<>SECURITY IS A <em>PRACTICE.</em></>} intro="Cyberus Academy gives ambitious learners the environment, guidance and repetition needed to become useful in security work.">
        <ContentBlock label="01 / THE MISSION" title="Learn by doing the work."><p>Cyberus combines clear instruction with hands-on labs, realistic scenarios and feedback that helps concepts become dependable habits.</p><p>Our approach is practical by design: understand the system, investigate the signal, make a decision and explain what happened.</p></ContentBlock>
        <ContentBlock label="02 / THE METHOD" title="Clarity over complexity."><p>We build learning paths around the skills security teams use every day, from foundations and cloud defense to operations, forensics and governance.</p></ContentBlock>
        <div className="simple-actions"><a className="button button-primary" href="/courses">EXPLORE PROGRAMS <span>→</span></a><a className="button button-secondary" href="/contact">TALK TO CYBERUS <span>↗</span></a></div>
    </SitePage>;
}
