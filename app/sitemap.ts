import type { MetadataRoute } from "next";

const baseUrl = "https://cyberusacademy.com";
const courseSlugs = [
    "cybersecurity-fundamentals",
    "ethical-hacking-penetration-testing",
    "security-operations-soc",
    "cloud-security",
    "digital-forensics",
    "governance-risk-compliance",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ["", "about", "courses", "blog", "contact", "terms-and-conditions", "privacy-policy"];
    return [
        ...pages.map((path) => ({ url: `${baseUrl}/${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
        ...courseSlugs.map((slug) => ({ url: `${baseUrl}/courses/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ];
}
