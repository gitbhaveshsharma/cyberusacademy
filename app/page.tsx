"use client";

import { useState } from "react";

const navItems = [
  { label: "PROGRAMS", href: "#programs" },
  { label: "WHY CYBERUS", href: "#why-cyberus" },
  { label: "LAB VIEW", href: "#learning" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];
const heroPoints = ["PRACTICAL TRAINING", "HANDS-ON LABS", "INDUSTRY SKILLS"];
const reasons = [
  {
    number: "01",
    title: "Learn in the environment",
    copy: "Train against the systems, tools and scenarios security teams actually work with—not static slides.",
    code: "LAB_ENV / ACTIVE",
  },
  {
    number: "02",
    title: "Practice before pressure",
    copy: "Build judgement through guided, repeatable exercises before you are asked to make decisions in the field.",
    code: "SIMULATION / READY",
  },
  {
    number: "03",
    title: "Skills that transfer",
    copy: "Every pathway is shaped around practical capability: investigate, communicate, defend and keep learning.",
    code: "CAREER_PATH / OPEN",
  },
];
const programs = [
  { code: "01", title: "Cybersecurity Foundations", description: "Build the essential knowledge behind secure systems, networks and modern threats.", visual: "foundation" },
  { code: "02", title: "Ethical Hacking", description: "Think like an attacker to find weaknesses before they are exploited.", visual: "hacking" },
  { code: "03", title: "Security Operations", description: "Investigate alerts, understand telemetry and respond with clarity.", visual: "operations" },
  { code: "04", title: "Cloud Defense", description: "Secure cloud environments with practical controls, visibility and confidence.", visual: "cloud" },
  { code: "05", title: "Digital Forensics", description: "Trace activity, preserve evidence and turn signals into a defensible story.", visual: "forensics" },
  { code: "06", title: "Governance & Risk", description: "Connect technical security work to policy, risk and resilient outcomes.", visual: "governance" },
];

function ProgramVisual({ type }: { type: string }) {
  return (
    <div className={`program-visual ${type}`} aria-hidden="true">
      <div className="visual-noise" />
      {type === "foundation" && <><i className="stack-line one" /><i className="stack-line two" /><i className="stack-line three" /><b className="core-square">01</b></>}
      {type === "hacking" && <><i className="bracket left">[</i><i className="bracket right">]</i><b className="command-mark">&gt;_</b><span className="code-strip" /></>}
      {type === "operations" && <><i className="orbit orbit-one" /><i className="orbit orbit-two" /><b className="radar-core" /><span className="radar-sweep" /></>}
      {type === "cloud" && <><i className="cloud-shape" /><b className="cloud-lock">⌁</b><span className="cloud-route route-one" /><span className="cloud-route route-two" /></>}
      {type === "forensics" && <><i className="scan-frame" /><b className="scan-dot" /><span className="scan-row row-one" /><span className="scan-row row-two" /><span className="scan-row row-three" /></>}
      {type === "governance" && <><i className="shield-outline" /><b className="shield-check">✓</b><span className="risk-bar bar-one" /><span className="risk-bar bar-two" /><span className="risk-bar bar-three" /></>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReason, setActiveReason] = useState(0);

  return (
    <main className="site-shell">
      <div className="technical-grid" aria-hidden="true" />
      <header className="navigation">
        <a className="brand" href="#top" aria-label="Cyberus Academy home">
          <span>CYBERUS</span>
          <strong>ACADEMY</strong><i aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="nav-actions">
          <span className="system-status"><b /> SYSTEM ONLINE</span>
          <a className="start-link" href="#contact">START LEARNING <span>↗</span></a>
        </div>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /> <span />
          <em>MENU</em>
        </button>

        <nav id="mobile-menu" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.label} onClick={() => setMenuOpen(false)} href={item.href}>{item.label}</a>)}
          <a onClick={() => setMenuOpen(false)} href="#contact">START LEARNING ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> CYBERUS ACADEMY <b>/</b> SECURITY EDUCATION</p>
          <h1>BUILD THE SKILLS<br />TO <strong>DEFEND</strong><br />WHAT MATTERS<span>.</span></h1>
          <p className="intro">Practical cybersecurity education for the next generation of security professionals.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">EXPLORE PROGRAMS <span>→</span></a>
            <a className="button button-secondary" href="#academy">VIEW ACADEMY <span>↗</span></a>
          </div>
          <div className="capability-list" aria-label="Academy capabilities">
            {heroPoints.map((point, index) => (
              <div className="capability" key={point}>
                <span>0{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="lab-frame">
          <video
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={(event) => { event.currentTarget.playbackRate = 0.25; }}
            aria-label="A live view of the Cyberus Academy cybersecurity lab"
          >
            <source src="/hero-video.webm" type="video/webm" />
          </video>
          <div className="video-shade" aria-hidden="true" />
          <div className="scan-lines" aria-hidden="true" />
          <figcaption className="video-caption">
            <div><span>CYBERUS ACADEMY / 01</span><b>SECURITY STARTS HERE</b></div>
            <div className="video-live"><i /> NOW PLAYING</div>
          </figcaption>
          <div className="video-corner top-left" aria-hidden="true" />
          <div className="video-corner bottom-right" aria-hidden="true" />
        </figure>
      </section>

      <section className="why-cyberus" id="why-cyberus">
        <div className="why-copy">
          <p className="eyebrow"><span /> 01 <b>/</b> WHY CYBERUS</p>
          <h2>THE WORK<br />COMES <em>FIRST.</em></h2>
          <p className="why-intro">Security is a practice. Cyberus gives you the space, systems and structure to become useful from day one.</p>

          <div className="reason-list" role="tablist" aria-label="Why choose Cyberus Academy">
            {reasons.map((reason, index) => (
              <button
                className={`reason ${activeReason === index ? "is-active" : ""}`}
                key={reason.number}
                onClick={() => setActiveReason(index)}
                role="tab"
                aria-selected={activeReason === index}
              >
                <span>{reason.number}</span>
                <b>{reason.title}</b>
                <i>↗</i>
              </button>
            ))}
          </div>
        </div>

        <div className="why-visual" aria-label="Interactive Cyberus training system visualization">
          <div className="visual-grid" aria-hidden="true" />
          <div className="visual-topline"><span>CYBERUS TRAINING SYSTEM</span><i>NODE_0{activeReason + 1}</i></div>
          <div className="network-map" aria-hidden="true">
            <svg viewBox="0 0 640 470" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="map-line line-one" d="M64 334C166 334 160 187 291 187C420 187 409 109 568 109" />
              <path className="map-line line-two" d="M65 334C194 334 220 393 354 393C492 393 450 270 570 270" />
              <path className="map-line line-three" d="M292 187L354 393" />
              <circle cx="64" cy="334" r="7" className="map-node origin" />
              <circle cx="291" cy="187" r="9" className={`map-node ${activeReason === 0 ? "active" : ""}`} />
              <circle cx="354" cy="393" r="9" className={`map-node ${activeReason === 1 ? "active" : ""}`} />
              <circle cx="568" cy="109" r="9" className={`map-node ${activeReason === 2 ? "active" : ""}`} />
              <circle cx="570" cy="270" r="6" className="map-node" />
            </svg>
            <span className="map-label label-origin">START</span>
            <span className={`map-label label-one ${activeReason === 0 ? "is-active" : ""}`}>LIVE LAB</span>
            <span className={`map-label label-two ${activeReason === 1 ? "is-active" : ""}`}>SIMULATE</span>
            <span className={`map-label label-three ${activeReason === 2 ? "is-active" : ""}`}>DEPLOY</span>
          </div>
          <div className="reason-detail" aria-live="polite">
            <span>{reasons[activeReason].code}</span>
            <p>{reasons[activeReason].copy}</p>
          </div>
          <div className="visual-scale"><span>01001011</span><span>ACCESS / VERIFIED</span></div>
        </div>
      </section>

      <section className="lab-view" id="learning">
        <div className="lab-heading">
          <p className="eyebrow"><span /> 02 <b>/</b> LAB VIEW</p>
          <h2>TRAIN ON THE<br /><em>REAL WORK.</em></h2>
          <p>Explore structured exercises that turn security concepts into repeatable decisions.</p>
        </div>
        <div className="lab-console" aria-label="Cyberus hands-on lab environment preview">
          <div className="console-header"><span><i /> LAB_SESSION_04</span><span>THREAT ANALYSIS / SANDBOX</span><span>00:42:18</span></div>
          <div className="console-content">
            <div className="console-nav">
              <span className="console-mark">C</span>
              <span className="console-tool is-selected">⌘</span>
              <span className="console-tool">◫</span>
              <span className="console-tool">⌁</span>
              <span className="console-tool">?</span>
            </div>
            <div className="terminal-pane">
              <div className="pane-title"><span>INVESTIGATION TERMINAL</span><i>CONNECTED</i></div>
              <p><b>analyst@cyberus:~$</b> trace --endpoint <em>192.168.48.12</em></p>
              <p className="terminal-muted">Resolving endpoint telemetry...</p>
              <p className="terminal-muted">Found 1 active anomaly in process chain.</p>
              <p><b>analyst@cyberus:~$</b> inspect --event <em>7F:AA:91</em></p>
              <div className="terminal-result"><span>SEVERITY</span><b>MEDIUM</b><span>MITRE TACTIC</span><b>DISCOVERY</b></div>
              <p><b>analyst@cyberus:~$</b> <span className="terminal-cursor" /></p>
            </div>
            <div className="intel-pane">
              <div className="pane-title"><span>EVENT FLOW</span><i>LIVE</i></div>
              <div className="intel-visual"><span className="intel-node start">ACCESS</span><span className="intel-node middle">PROCESS</span><span className="intel-node end">REVIEW</span><i className="intel-line line-a" /><i className="intel-line line-b" /></div>
              <div className="intel-stat"><span>EVENT CONFIDENCE</span><b>87.4%</b></div>
              <div className="intel-stat"><span>LAB COMPLETION</span><b>62%</b></div>
            </div>
          </div>
          <div className="console-footer"><span>SIMULATION MODE</span><span>YOU ARE SAFE TO EXPERIMENT</span><span>ENCRYPTED SESSION</span></div>
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="programs-heading">
          <p className="eyebrow"><span /> 03 <b>/</b> PROGRAMS</p>
          <div className="programs-intro"><h2>CHOOSE YOUR <em>PATH.</em></h2><p>Purpose-built pathways for the work security teams need done now.</p></div>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <a className="program-card" href="#academy" key={program.code}>
              <div className="program-card-top"><span>{program.code} / PROGRAM</span><i>↗</i></div>
              <ProgramVisual type={program.visual} />
              <div className="program-card-copy"><h3>{program.title}</h3><p>{program.description}</p></div>
              <div className="program-card-footer"><span>EXPLORE PATH</span><i>→</i></div>
            </a>
          ))}
        </div>
        <div className="programs-footer"><span>06 PRACTICAL PATHWAYS / BUILT FOR THE WORK</span><a className="programs-link" href="#academy">VIEW ALL PROGRAMS <i>→</i></a></div>
      </section>

      <section className="about" id="about">
        <div className="about-visual" aria-hidden="true">
          <img src="/why-us.gif" alt="" />
          <div className="about-index"><span>CYBERUS / PROTOCOL</span><b>04</b><span>EST. FOR PRACTICE</span></div>
          <div className="about-gif-caption"><span>BUILD YOUR DEFENSE</span><b>LEARN / TEST / DEFEND</b></div>
          <div className="about-coordinates"><span>BLOCK_04 / VERIFIED</span><span>SKILL / 18.02</span></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> 04 <b>/</b> ABOUT CYBERUS</p>
          <h2>SECURITY<br />IS A <em>PRACTICE.</em></h2>
          <p>Cyberus Academy exists for people who want to do the work well. We combine a clear learning path with focused practice, useful feedback and the curiosity to keep improving.</p>
          <div className="about-principles"><div><span>01</span><b>Clarity over complexity</b></div><div><span>02</span><b>Practice over theory</b></div><div><span>03</span><b>Progress over posturing</b></div></div>
          <a className="text-link" href="#contact">MORE ABOUT CYBERUS <i>→</i></a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-heading"><p className="eyebrow"><span /> 05 <b>/</b> CONTACT</p><h2>LET&apos;S BUILD<br />YOUR <em>NEXT MOVE.</em></h2><p>Tell us where you want to go. We&apos;ll help you find the right path to get there.</p></div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label><span>01 / YOUR NAME</span><input type="text" name="name" placeholder="Enter your name" /></label>
          <label><span>02 / EMAIL ADDRESS</span><input type="email" name="email" placeholder="you@company.com" /></label>
          <label className="message-field"><span>03 / WHAT WOULD YOU LIKE TO LEARN?</span><textarea name="message" placeholder="Tell us a little about your goals" rows={3} /></label>
          <button className="contact-submit" type="submit">START THE CONVERSATION <i>→</i></button>
          <p className="contact-note"><i /> YOUR INFORMATION STAYS PRIVATE.</p>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand"><a className="brand" href="#top"><span>CYBERUS</span><strong>ACADEMY</strong><i aria-hidden="true" /></a><p>Practical cybersecurity education for people ready to defend what matters.</p></div>
        <div className="footer-links"><div><span>EXPLORE</span><a href="#programs">Programs</a><a href="#why-cyberus">Why Cyberus</a><a href="#learning">Lab View</a></div><div><span>CONNECT</span><a href="#about">About</a><a href="#contact">Contact</a><a href="#top">Back to top ↑</a></div></div>
        <div className="footer-bottom"><span>© 2026 CYBERUS ACADEMY</span><span>BUILT FOR THE WORK AHEAD</span><i>● SYSTEM ONLINE</i></div>
      </footer>
    </main>
  );
}
