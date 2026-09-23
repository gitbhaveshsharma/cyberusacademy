import type { Metadata } from "next";
import faqItems from "../faq.json";
import { SitePage } from "../site-page";

export const metadata: Metadata = {
    title: "Cybersecurity Training FAQ | Cyberus Academy",
    description: "Find answers about Cyberus Academy online and offline coaching, Zoom and Google Meet classes, hands-on labs, certificates and monthly industry specialist sessions.",
    keywords: ["cybersecurity training FAQ", "online cybersecurity coaching", "Zoom cybersecurity classes", "Google Meet cybersecurity training", "cybersecurity industry experts"],
    alternates: { canonical: "/faq" },
    openGraph: {
        title: "Cybersecurity Training FAQ | Cyberus Academy",
        description: "Answers about Cyberus Academy courses, live classes, labs, coaching and industry sessions.",
        url: "/faq",
        type: "website",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

export default function FaqPage() {
    return (
        <SitePage section="SUPPORT / FAQ" title={<>QUESTIONS. <em>ANSWERED.</em></>} intro="Clear answers about Cyberus Academy courses, live learning, coaching and the community around the work.">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="faq-list" aria-label="Frequently asked questions">
                {faqItems.map((item, index) => (
                    <details className="faq-item" key={item.id} open={index === 0}>
                        <summary><span>0{index + 1}</span><div><small>{item.category}</small><strong>{item.question}</strong></div><b>+</b></summary>
                        <div className="faq-answer"><p>{item.answer}</p><div className="faq-keywords">{item.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div></div>
                    </details>
                ))}
            </div>
        </SitePage>
    );
}
