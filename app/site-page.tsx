import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const navItems = [
    { label: "PROGRAMS", href: "/courses" },
    { label: "WHY CYBERUS", href: "/about" },
    { label: "LAB VIEW", href: "/#learning" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
];

export function ContactDock() {
    return (
        <nav className="contact-dock" aria-label="Contact options">
            <a className="contact-dock-link contact-dock-phone" href="tel:+15550142026" aria-label="Call Cyberus Academy">
                <img src="/phone.avif" alt="" />
                <span>CALL US</span>
            </a>
            <a className="contact-dock-link contact-dock-whatsapp" href="https://wa.me/15550142026" target="_blank" rel="noreferrer" aria-label="Message Cyberus Academy on WhatsApp">
                <img src="/whatsapp.avif" alt="" />
                <span>WHATSAPP</span>
            </a>
        </nav>
    );
}

export function SitePage({
    section,
    title,
    intro,
    children,
}: {
    section: string;
    title: React.ReactNode;
    intro: string;
    children: React.ReactNode;
}) {
    return (
        <main className="simple-site-shell">
            <header className="simple-navigation">
                <Link className="brand" href="/" aria-label="Cyberus Academy home">
                    <span>CYBERUS</span><strong>ACADEMY</strong><i aria-hidden="true" />
                </Link>
                <nav className="simple-nav" aria-label="Main navigation">
                    {navItems.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
                </nav>
                <Link className="simple-nav-cta" href="/contact">START LEARNING <span>↗</span></Link>
            </header>
            <div className="simple-page-grid" aria-hidden="true" />
            <section className="simple-hero">
                <p className="eyebrow"><span /> {section}</p>
                <h1>{title}</h1>
                <p className="simple-intro">{intro}</p>
            </section>
            <section className="simple-content">{children}</section>
            <footer className="simple-footer">
                <div className="simple-footer-main">
                    <div className="simple-footer-brand"><Link className="brand" href="/"><span>CYBERUS</span><strong>ACADEMY</strong><i aria-hidden="true" /></Link><p>Practical cybersecurity education for people ready to defend what matters.</p></div>
                    <div className="simple-footer-links"><div><span>EXPLORE</span><Link href="/courses">Programs</Link><Link href="/about">About Cyberus</Link><Link href="/blog">Blog</Link></div><div><span>SUPPORT</span><Link href="/contact">Contact</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/privacy-policy">Privacy</Link></div></div>
                    <div className="simple-footer-contact"><span>CONNECT</span><a className="contact-phone" href="tel:+15550142026"><FaPhone aria-hidden="true" /> +1 555 014 2026</a><a className="contact-whatsapp" href="https://wa.me/15550142026" target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> WhatsApp</a><div className="simple-socials"><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></a><a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X / Twitter"><FaXTwitter aria-hidden="true" /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram aria-hidden="true" /></a></div></div>
                </div>
                <div className="simple-footer-bottom"><span>© 2026 CYBERUS ACADEMY</span><span>BUILT FOR THE WORK AHEAD</span><Link href="/#top">BACK TO TOP ↑</Link></div>
            </footer>
            <ContactDock />
        </main>
    );
}

export function ContentBlock({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
    return <article className="content-block"><p className="content-label">{label}</p><h2>{title}</h2><div className="content-copy">{children}</div></article>;
}
