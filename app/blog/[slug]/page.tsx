import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SitePage } from "../../site-page";
import posts from "../../blog.json";

type Post = (typeof posts)[number];
function getPost(slug: string): Post | undefined { return posts.find((post) => post.slug === slug); }
export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = getPost(slug); if (!post) return {}; return { title: `${post.title} | Cyberus Academy`, description: post.description, keywords: post.keywords, alternates: { canonical: `/blog/${post.slug}` }, authors: [{ name: post.author.name }], openGraph: { title: `${post.title} | Cyberus Academy`, description: post.description, url: `/blog/${post.slug}`, type: "article", publishedTime: post.date, modifiedTime: post.updated, authors: [post.author.name] }, twitter: { card: "summary", title: post.title, description: post.description } }; }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = getPost(slug); if (!post) notFound(); return <SitePage section={`${post.category.toUpperCase()} / FIELD NOTE`} title={<>{post.title}</>} intro={post.description}><article className="blog-article"><div className="blog-article-meta"><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time><span>UPDATED {new Date(post.updated).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span><span>{post.readingTime}</span><span>BY {post.author.name.toUpperCase()}</span></div><div className="blog-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="blog-article-links">{post.links.map((link) => <Link className="button button-primary" href={link.href} key={link.href}>{link.label} <span>→</span></Link>)}</div></article></SitePage>; }
