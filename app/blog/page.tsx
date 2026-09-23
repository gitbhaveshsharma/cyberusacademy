import type { Metadata } from "next";
import Link from "next/link";
import { SitePage } from "../site-page";

export const metadata: Metadata = { title: "Cybersecurity Blog | Cyberus Academy", description: "Practical notes, learning guidance and security thinking from Cyberus Academy." };
const posts = [["01", "How to build a cybersecurity practice habit", "A useful loop for turning security concepts into repeatable decisions."], ["02", "What a good SOC investigation looks like", "Start with the signal, preserve context and communicate the next action."], ["03", "Learning security without losing the thread", "A focused approach to building capability across a wide technical field."]];
export default function BlogPage() { return <SitePage section="FIELD NOTES / BLOG" title={<>THINK. TEST. <em>DEFEND.</em></>} intro="Practical notes for people building the judgement and habits behind good security work."><div className="post-list">{posts.map(([number, title, excerpt]) => <article className="post-card" key={number}><p className="content-label">{number} / FIELD NOTE</p><h2>{title}</h2><p>{excerpt}</p><Link href="/contact">READ WITH CYBERUS →</Link></article>)}</div></SitePage>; }
