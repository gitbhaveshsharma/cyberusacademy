"use client";

import { useEffect, useState } from "react";
import labCommandConfig from "./lab-commands.json";

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
  {
    code: "01",
    title: "Cybersecurity Foundations",
    description:
      "Build the essential knowledge behind secure systems, networks and modern threats.",
    image: "/courses/cyberus-academy-cybersecurity-fundamentals.avif",
  },
  {
    code: "02",
    title: "Ethical Hacking",
    description:
      "Think like an attacker to find weaknesses before they are exploited.",
    image: "/courses/cyberus-academy-ethical-hacking-penetration-testing.avif",
  },
  {
    code: "03",
    title: "Security Operations",
    description:
      "Investigate alerts, understand telemetry and respond with clarity.",
    image: "/courses/cyberus-academy-security-operations-soc.avif",
  },
  {
    code: "04",
    title: "Cloud Defense",
    description:
      "Secure cloud environments with practical controls, visibility and confidence.",
    image: "/courses/cyberus-academy-cloud-security.avif",
  },
  {
    code: "05",
    title: "Digital Forensics",
    description:
      "Trace activity, preserve evidence and turn signals into a defensible story.",
    image: "/courses/cyberus-academy-digital-forensics.avif",
  },
  {
    code: "06",
    title: "Governance & Risk",
    description:
      "Connect technical security work to policy, risk and resilient outcomes.",
    image:
      "/courses/cyberus-academy-cybersecurity-governance-risk-compliance.avif",
  },
];

function ProgramVisual({ image, code }: { image: string; code: string }) {
  return (
    <div className="program-visual">
      <img src={image} alt="" />
      <div className="program-image-shade" aria-hidden="true" />
      <div className="program-image-caption">
        <span>CYBERUS ACADEMY / {code}</span>
        <b>LIVE CLASS</b>
      </div>
      <span className="program-live">
        <i /> ONLINE CLASS
      </span>
      <span className="program-corner top-left" aria-hidden="true" />
      <span className="program-corner bottom-right" aria-hidden="true" />
    </div>
  );
}

type LabTone = "muted" | "ok" | "warn" | "error" | "highlight" | "prompt";
type LabLine = { text: string; tone: LabTone };
type LabTag = { text: string; tone: "info" | "low" | "med" | "high" };

const labCommands = [
  { label: "› trace", command: "trace --endpoint 192.168.48.12" },
  { label: "› scan", command: "scan --range 192.168.48.0/24" },
  { label: "› inspect", command: "inspect --event 7F:AA:91" },
  { label: "› mitre", command: "mitre --tactic DISCOVERY" },
  { label: "› exploit", command: "exploit --check CVE-2024-3811", highRisk: true },
  { label: "› report", command: "report --session 04" },
  { label: "› help", command: "help" },
  { label: "› echo", command: "echo cyberus" },
  { label: "› nmap", command: "nmap 192.168.48.0/24" },
];

const shellCommands = labCommandConfig.shell as Record<string, { lines: LabLine[] }>;

const labScenarios: Record<string, {
  lines: LabLine[];
  stats: { confidence: string; threat: string; threatLevel: number; completion: number };
  tags: LabTag[];
  nodes: string[];
}> = {
  "trace --endpoint 192.168.48.12": {
    lines: [
      { text: "analyst@cyberus:~$ trace --endpoint 192.168.48.12", tone: "prompt" },
      { text: "-> Resolving endpoint telemetry...", tone: "muted" },
      { text: "-> Querying ARP tables...", tone: "muted" },
      { text: "-> Checking EDR agent on host...", tone: "muted" },
      { text: "Host reachable - EDR agent v3.2.1 active", tone: "ok" },
      { text: "Found 1 active anomaly in process chain", tone: "warn" },
      { text: "HOST                 192.168.48.12\nOS                   WIN SERVER 2019\nOPEN PORTS           445, 3389, 80\nANOMALIES            1 FOUND", tone: "highlight" },
    ],
    stats: { confidence: "72.1%", threat: "MEDIUM", threatLevel: 35, completion: 20 },
    tags: [{ text: "SMB OPEN", tone: "med" }, { text: "RDP EXPOSED", tone: "med" }, { text: "EDR ACTIVE", tone: "low" }],
    nodes: ["active", "active", ""],
  },
  "scan --range 192.168.48.0/24": {
    lines: [
      { text: "analyst@cyberus:~$ scan --range 192.168.48.0/24", tone: "prompt" },
      { text: "-> Initiating SYN sweep across /24...", tone: "muted" },
      { text: "[1/5] 192.168.48.1 ALIVE\n[2/5] 192.168.48.12 ALIVE\n[3/5] 192.168.48.55 ALIVE\n[4/5] 192.168.48.88 ALIVE\n[5/5] 192.168.48.134 ALIVE", tone: "ok" },
      { text: "192.168.48.88 - unusual port 4444 open (possible C2)", tone: "warn" },
      { text: "HOSTS ALIVE          5\nPORTS SCANNED        65535\nANOMALY HOST          48.88\nRISK                  HIGH", tone: "highlight" },
    ],
    stats: { confidence: "89.3%", threat: "HIGH", threatLevel: 70, completion: 40 },
    tags: [{ text: "C2 SUSPECT", tone: "high" }, { text: "PORT 4444", tone: "high" }, { text: "5 LIVE HOSTS", tone: "info" }],
    nodes: ["active", "active", "active"],
  },
  "inspect --event 7F:AA:91": {
    lines: [
      { text: "analyst@cyberus:~$ inspect --event 7F:AA:91", tone: "prompt" },
      { text: "-> Fetching event from SIEM...", tone: "muted" },
      { text: "-> Correlating with threat intel feeds...", tone: "muted" },
      { text: "Event decoded - process injection detected", tone: "ok" },
      { text: "EVENT ID              7F:AA:91\nSEVERITY              MEDIUM\nMITRE TACTIC          DISCOVERY\nTECHNIQUE             T1057\nPROCESS               svchost.exe\nPARENT                cmd.exe", tone: "highlight" },
      { text: "cmd.exe spawned svchost - potential LOLBin abuse", tone: "warn" },
    ],
    stats: { confidence: "87.4%", threat: "MEDIUM", threatLevel: 50, completion: 55 },
    tags: [{ text: "T1057 PROCESS", tone: "med" }, { text: "LOLBIN ABUSE", tone: "med" }, { text: "DISCOVERY", tone: "info" }],
    nodes: ["active", "alert", ""],
  },
  "mitre --tactic DISCOVERY": {
    lines: [
      { text: "analyst@cyberus:~$ mitre --tactic DISCOVERY", tone: "prompt" },
      { text: "-> Querying MITRE ATT&CK DB...", tone: "muted" },
      { text: "Tactic: TA0007 - DISCOVERY", tone: "ok" },
      { text: "Techniques observed in this session:\nT1057  Process Discovery\nT1083  File & Directory Discovery\nT1016  System Network Config Discovery", tone: "muted" },
      { text: "TACTIC                DISCOVERY\nATT&CK ID             TA0007\nHITS IN SESSION       3\nRISK RATING           MEDIUM", tone: "highlight" },
    ],
    stats: { confidence: "91.0%", threat: "MEDIUM", threatLevel: 45, completion: 70 },
    tags: [{ text: "TA0007", tone: "info" }, { text: "3 TECHNIQUES", tone: "med" }, { text: "LATERAL RISK", tone: "med" }],
    nodes: ["active", "active", "active"],
  },
  "exploit --check CVE-2024-3811": {
    lines: [
      { text: "analyst@cyberus:~$ exploit --check CVE-2024-3811", tone: "prompt" },
      { text: "-> Fetching NVD record...", tone: "muted" },
      { text: "-> Cross-referencing with hosts in range...", tone: "muted" },
      { text: "2 hosts match vulnerable version", tone: "warn" },
      { text: "CVE                   2024-3811\nCVSS                  8.1 HIGH\nAFFECTED              48.12, 48.55\nPATCH                 NOT APPLIED", tone: "highlight" },
      { text: "CRITICAL - RCE possible on unpatched hosts", tone: "error" },
    ],
    stats: { confidence: "95.2%", threat: "CRITICAL", threatLevel: 85, completion: 85 },
    tags: [{ text: "CVE-2024-3811", tone: "high" }, { text: "RCE RISK", tone: "high" }, { text: "PATCH MISSING", tone: "high" }],
    nodes: ["alert", "alert", "alert"],
  },
  "report --session 04": {
    lines: [
      { text: "analyst@cyberus:~$ report --session 04", tone: "prompt" },
      { text: "-> Compiling session findings...", tone: "muted" },
      { text: "5 hosts enumerated\n3 MITRE techniques identified", tone: "ok" },
      { text: "1 CVE unpatched (CVSS 8.1)\nSuspect C2 beacon on 192.168.48.88:4444", tone: "warn" },
      { text: "TOTAL FINDINGS        4\nCRITICAL               1\nMEDIUM                 2\nRISK SCORE             78/100", tone: "highlight" },
      { text: "Report exported - LAB_04_REPORT.pdf", tone: "ok" },
    ],
    stats: { confidence: "98.0%", threat: "REVIEWED", threatLevel: 78, completion: 100 },
    tags: [{ text: "SESSION COMPLETE", tone: "low" }, { text: "REPORT READY", tone: "info" }],
    nodes: ["active", "active", "active"],
  },
};

function LabConsole() {
  const [activeTool, setActiveTool] = useState("terminal");
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [packets, setPackets] = useState(0);
  const [lines, setLines] = useState<LabLine[]>([
    { text: "Cyberus Threat Lab v4.2 - sandboxed session initialized.", tone: "muted" },
    { text: "Click a command above, or type below. All actions are simulated.", tone: "muted" },
    { text: "Ready.", tone: "muted" },
  ]);
  const [scenario, setScenario] = useState(labScenarios["inspect --event 7F:AA:91"]);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const packetTimer = window.setInterval(() => setPackets((value) => value + Math.floor(Math.random() * 22) + 3), 700);
    return () => window.clearInterval(packetTimer);
  }, []);

  const runCommand = async (value: string) => {
    const typed = value.trim();
    const key = typed.toLowerCase();
    if (!key || isRunning) return;
    if (key === "clear") {
      setLines([{ text: "Session cleared. Ready.", tone: "muted" }]);
      setScenario(labScenarios["inspect --event 7F:AA:91"]);
      setCommand("");
      setHistoryIndex(-1);
      return;
    }
    setHistory((items) => [typed, ...items.filter((item) => item !== typed)].slice(0, 20));
    setHistoryIndex(-1);
    setCommand("");
    setIsRunning(true);
    const nextScenario = labScenarios[key];
    if (nextScenario) {
      setScenario(nextScenario);
      setLines([{ text: `analyst@cyberus:~$ ${typed}`, tone: "prompt" }]);
      for (const line of nextScenario.lines.slice(1)) {
        await new Promise((resolve) => window.setTimeout(resolve, 90));
        setLines((items) => [...items, line]);
      }
    } else if (shellCommands[key]) {
      setLines([{ text: `analyst@cyberus:~$ ${typed}`, tone: "prompt" }]);
      for (const line of shellCommands[key].lines) {
        await new Promise((resolve) => window.setTimeout(resolve, 140));
        setLines((items) => [...items, line]);
      }
    } else if (labCommandConfig.aliases[key as keyof typeof labCommandConfig.aliases]) {
      const expanded = labCommandConfig.aliases[key as keyof typeof labCommandConfig.aliases];
      setIsRunning(false);
      await runCommand(expanded);
      return;
    } else if (key === "help") {
      setLines([{ text: `analyst@cyberus:~$ ${typed}`, tone: "prompt" },
      { text: "Cyberus Threat Lab commands", tone: "highlight" },
      { text: "echo  whoami  pwd  ls  cat notes.md  nmap  curl", tone: "muted" },
      { text: "trace  scan  inspect  mitre  exploit  report  clear", tone: "muted" },
      { text: "All actions are simulated inside this sandbox.", tone: "ok" },
      ]);
    } else if (key) {
      setLines([
        { text: `analyst@cyberus:~$ ${typed}`, tone: "prompt" },
        { text: `command not found: ${key.split(" ")[0]}`, tone: "error" },
        { text: "try: help or tab-complete a command", tone: "muted" },
      ]);
    }
    await new Promise((resolve) => window.setTimeout(resolve, 160));
    setIsRunning(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(nextIndex);
      setCommand(history[nextIndex] ?? "");
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(nextIndex);
      setCommand(nextIndex === -1 ? "" : history[nextIndex]);
    } else if (event.key === "Tab") {
      event.preventDefault();
      const known = [...Object.keys(shellCommands), ...Object.keys(labScenarios), "help", "clear"];
      const match = known.find((item) => item.startsWith(command.toLowerCase()));
      if (match) setCommand(match);
    }
  };

  const formatTime = (value: number) => `${String(Math.floor(value / 3600)).padStart(2, "0")}:${String(Math.floor((value % 3600) / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;

  return (
    <div className="lab-console" aria-label="Cyberus hands-on lab environment">
      <div className="console-header"><span><i /> LAB_SESSION_04</span><span>THREAT ANALYSIS / SANDBOX</span><span>{formatTime(elapsed)}</span></div>
      <div className="console-content">
        <div className="console-nav">
          <span className="console-mark">C</span>
          {[['terminal', "⌘", "Terminal", ""], ["scan", "◫", "Scan", "nmap 192.168.48.0/24"], ["network", "⌁", "Network", "trace --endpoint 192.168.48.12"], ["help", "?", "Help", "help"]].map(([key, icon, label, toolCommand]) => <button className={`console-tool ${activeTool === key ? "is-selected" : ""}`} key={key} title={label} onClick={() => { setActiveTool(key); if (toolCommand) void runCommand(toolCommand); }}>{icon}</button>)}
        </div>
        <div className="terminal-pane">
          <div className="pane-title"><span>INVESTIGATION TERMINAL</span><i>CONNECTED</i></div>
          <div className="log-area" aria-live="polite">{lines.map((line, index) => <div className={`log-line ${line.tone}`} key={`${line.text}-${index}`}>{line.text.split("\n").map((part, lineIndex) => <span key={lineIndex}>{lineIndex > 0 && <br />}{part}</span>)}</div>)}</div>
          <div className="hint-strip"><button className="hint-btn" onClick={() => runCommand("clear")}>› clear</button>{labCommands.map((item) => <button className={`hint-btn ${item.highRisk ? "h-high" : ""}`} key={item.command} onClick={() => runCommand(item.command)}>{item.label}</button>)}</div>
          <form className="input-row" onSubmit={(event) => { event.preventDefault(); void runCommand(command); }}><span className="lp">analyst@cyberus:~$</span><input value={command} onKeyDown={handleKeyDown} onChange={(event) => setCommand(event.target.value)} disabled={isRunning} autoComplete="off" spellCheck={false} placeholder={isRunning ? "processing sandbox telemetry..." : "enter command..."} aria-label="Terminal command input" /></form>
        </div>
        <div className="intel-pane">
          <div className="pane-title"><span>EVENT FLOW</span><i>LIVE</i></div>
          <div className="intel-visual"><img className="intel-gif" src="/adfc50fa990612670a07a508ed4e7470.gif" alt="Animated threat analysis dashboard" /><span className="scan-beam" aria-hidden="true" /></div>
          <div className="tag-row">{scenario.tags.map((tag) => <span className={`i-tag t-${tag.tone}`} key={tag.text}>{tag.text}</span>)}</div>
          <div className="intel-stat"><span>EVENT CONFIDENCE</span><b>{scenario.stats.confidence}</b></div>
          <div className="intel-stat"><div><div>THREAT LEVEL</div><div className="bar-track"><div className={`bar-fill threat-${scenario.stats.threat}`} style={{ width: `${scenario.stats.threatLevel}%` }} /></div></div><b>{scenario.stats.threat}</b></div>
          <div className="intel-stat"><span>LAB COMPLETION</span><b>{scenario.stats.completion}%</b></div>
          <div className="intel-stat"><span>PACKETS ANALYZED</span><b>{(scenario.stats.completion * 173 + packets).toLocaleString()}</b></div>
        </div>
      </div>
      <div className="console-footer"><span>SIMULATION MODE</span><span>YOU ARE SAFE TO EXPERIMENT</span><span>ENCRYPTED SESSION</span></div>
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
          <strong>ACADEMY</strong>
          <i aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <span className="system-status">
            <b /> SYSTEM ONLINE
          </span>
          <a className="start-link" href="#contact">
            START LEARNING <span>↗</span>
          </a>
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

        <nav
          id="mobile-menu"
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={() => setMenuOpen(false)}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a onClick={() => setMenuOpen(false)} href="#contact">
            START LEARNING ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> CYBERUS ACADEMY <b>/</b> SECURITY EDUCATION
          </p>
          <h1>
            BUILD THE SKILLS
            <br />
            TO <strong>DEFEND</strong>
            <br />
            WHAT MATTERS<span>.</span>
          </h1>
          <p className="intro">
            Practical cybersecurity education for the next generation of
            security professionals.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">
              EXPLORE PROGRAMS <span>→</span>
            </a>
            <a className="button button-secondary" href="#academy">
              VIEW ACADEMY <span>↗</span>
            </a>
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
            onLoadedMetadata={(event) => {
              event.currentTarget.playbackRate = 0.25;
            }}
            aria-label="A live view of the Cyberus Academy cybersecurity lab"
          >
            <source src="/hero-video.webm" type="video/webm" />
          </video>
          <div className="video-shade" aria-hidden="true" />
          <div className="scan-lines" aria-hidden="true" />
          <figcaption className="video-caption">
            <div>
              <span>CYBERUS ACADEMY / 01</span>
              <b>SECURITY STARTS HERE</b>
            </div>
            <div className="video-live">
              <i /> NOW PLAYING
            </div>
          </figcaption>
          <div className="video-corner top-left" aria-hidden="true" />
          <div className="video-corner bottom-right" aria-hidden="true" />
        </figure>
      </section>

      <section className="why-cyberus" id="why-cyberus">
        <div className="why-copy">
          <p className="eyebrow">
            <span /> 01 <b>/</b> WHY CYBERUS
          </p>
          <h2>
            THE WORK
            <br />
            COMES <em>FIRST.</em>
          </h2>
          <p className="why-intro">
            Security is a practice. Cyberus gives you the space, systems and
            structure to become useful from day one.
          </p>

          <div
            className="reason-list"
            role="tablist"
            aria-label="Why choose Cyberus Academy"
          >
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

        <div
          className="why-visual"
          aria-label="Interactive Cyberus training system visualization"
        >
          <div className="visual-grid" aria-hidden="true" />
          <div className="visual-topline">
            <span>CYBERUS TRAINING SYSTEM</span>
            <i>NODE_0{activeReason + 1}</i>
          </div>
          <div className="network-map" aria-hidden="true">
            <svg
              viewBox="0 0 640 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="map-line line-one"
                d="M64 334C166 334 160 187 291 187C420 187 409 109 568 109"
              />
              <path
                className="map-line line-two"
                d="M65 334C194 334 220 393 354 393C492 393 450 270 570 270"
              />
              <path className="map-line line-three" d="M292 187L354 393" />
              <circle cx="64" cy="334" r="7" className="map-node origin" />
              <circle
                cx="291"
                cy="187"
                r="9"
                className={`map-node ${activeReason === 0 ? "active" : ""}`}
              />
              <circle
                cx="354"
                cy="393"
                r="9"
                className={`map-node ${activeReason === 1 ? "active" : ""}`}
              />
              <circle
                cx="568"
                cy="109"
                r="9"
                className={`map-node ${activeReason === 2 ? "active" : ""}`}
              />
              <circle cx="570" cy="270" r="6" className="map-node" />
            </svg>
            <span className="map-label label-origin">START</span>
            <span
              className={`map-label label-one ${activeReason === 0 ? "is-active" : ""}`}
            >
              LIVE LAB
            </span>
            <span
              className={`map-label label-two ${activeReason === 1 ? "is-active" : ""}`}
            >
              SIMULATE
            </span>
            <span
              className={`map-label label-three ${activeReason === 2 ? "is-active" : ""}`}
            >
              DEPLOY
            </span>
          </div>
          <div className="reason-detail" aria-live="polite">
            <span>{reasons[activeReason].code}</span>
            <p>{reasons[activeReason].copy}</p>
          </div>
          <div className="visual-scale">
            <span>01001011</span>
            <span>ACCESS / VERIFIED</span>
          </div>
        </div>
      </section>

      <section className="lab-view" id="learning">
        <div className="lab-heading">
          <p className="eyebrow">
            <span /> 02 <b>/</b> LAB VIEW
          </p>
          <h2>
            TRAIN ON THE
            <br />
            <em>REAL WORK.</em>
          </h2>
          <p>
            Explore structured exercises that turn security concepts into
            repeatable decisions.
          </p>
        </div>
        <LabConsole />
      </section>

      <section className="programs" id="programs">
        <div className="programs-heading">
          <p className="eyebrow">
            <span /> 03 <b>/</b> PROGRAMS
          </p>
          <div className="programs-intro">
            <h2>
              CHOOSE YOUR <em>PATH.</em>
            </h2>
            <p>
              Purpose-built pathways for the work security teams need done now.
            </p>
          </div>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <a className="program-card" href="#academy" key={program.code}>
              <div className="program-card-top">
                <span>{program.code} / PROGRAM</span>
                <i>↗</i>
              </div>
              <ProgramVisual image={program.image} code={program.code} />
              <div className="program-card-copy">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
              <div className="program-card-footer">
                <span>EXPLORE PATH</span>
                <i>→</i>
              </div>
            </a>
          ))}
        </div>
        <div className="programs-footer">
          <span>06 PRACTICAL PATHWAYS / BUILT FOR THE WORK</span>
          <a className="programs-link" href="#academy">
            VIEW ALL PROGRAMS <i>→</i>
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-visual" aria-hidden="true">
          <img src="/why-us.gif" alt="" />
          <div className="about-index">
            <span>CYBERUS / PROTOCOL</span>
            <b>04</b>
            <span>EST. FOR PRACTICE</span>
          </div>
          <div className="about-gif-caption">
            <span>BUILD YOUR DEFENSE</span>
            <b>LEARN / TEST / DEFEND</b>
          </div>
          <div className="about-coordinates">
            <span>BLOCK_04 / VERIFIED</span>
            <span>SKILL / 18.02</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span /> 04 <b>/</b> ABOUT CYBERUS
          </p>
          <h2>
            SECURITY
            <br />
            IS A <em>PRACTICE.</em>
          </h2>
          <p>
            Cyberus Academy exists for people who want to do the work well. We
            combine a clear learning path with focused practice, useful feedback
            and the curiosity to keep improving.
          </p>
          <div className="about-principles">
            <div>
              <span>01</span>
              <b>Clarity over complexity</b>
            </div>
            <div>
              <span>02</span>
              <b>Practice over theory</b>
            </div>
            <div>
              <span>03</span>
              <b>Progress over posturing</b>
            </div>
          </div>
          <a className="text-link" href="#contact">
            MORE ABOUT CYBERUS <i>→</i>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">
            <span /> 05 <b>/</b> CONTACT
          </p>
          <h2>
            LET&apos;S BUILD
            <br />
            YOUR <em>NEXT MOVE.</em>
          </h2>
          <p>
            Tell us where you want to go. We&apos;ll help you find the right
            path to get there.
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            <span>01 / YOUR NAME</span>
            <input type="text" name="name" placeholder="Enter your name" />
          </label>
          <label>
            <span>02 / EMAIL ADDRESS</span>
            <input type="email" name="email" placeholder="you@company.com" />
          </label>
          <label className="message-field">
            <span>03 / WHAT WOULD YOU LIKE TO LEARN?</span>
            <textarea
              name="message"
              placeholder="Tell us a little about your goals"
              rows={3}
            />
          </label>
          <button className="contact-submit" type="submit">
            START THE CONVERSATION <i>→</i>
          </button>
          <p className="contact-note">
            <i /> YOUR INFORMATION STAYS PRIVATE.
          </p>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span>CYBERUS</span>
            <strong>ACADEMY</strong>
            <i aria-hidden="true" />
          </a>
          <p>
            Practical cybersecurity education for people ready to defend what
            matters.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            <a href="#programs">Programs</a>
            <a href="#why-cyberus">Why Cyberus</a>
            <a href="#learning">Lab View</a>
          </div>
          <div>
            <span>CONNECT</span>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CYBERUS ACADEMY</span>
          <span>BUILT FOR THE WORK AHEAD</span>
          <i>● SYSTEM ONLINE</i>
        </div>
      </footer>
    </main>
  );
}
