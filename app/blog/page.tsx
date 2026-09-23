import type { Metadata } from "next";
import Link from "next/link";
import { SitePage } from "../site-page";
import posts from "../blog.json";

export const metadata: Metadata = { title: "Cybersecurity Blog | Cyberus Academy", description: "Practical notes, learning guidance and security thinking from Cyberus Academy.", keywords: ["cybersecurity blog", "security learning", "SOC analysis", "cybersecurity career advice"], alternates: { canonical: "/blog" }, openGraph: { title: "Cybersecurity Blog | Cyberus Academy", description: "Practical notes for people building the judgement and habits behind good security work.", url: "/blog", type: "website" } };

export default function BlogPage() { return <SitePage section="FIELD NOTES / BLOG" title={<>THINK. TEST. <em>DEFEND.</em></>} intro="Practical notes for people building the judgement and habits behind good security work."><div className="post-list">{posts.map((post) => <article className="post-card" key={post.slug}><p className="content-label">{post.number} / {post.category.toUpperCase()}</p><h2>{post.title}</h2><p>{post.excerpt}</p><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time><Link href={`/blog/${post.slug}`}>READ FIELD NOTE →</Link></article>)}</div></SitePage>; }
