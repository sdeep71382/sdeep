import CaseStudyGrid, { type CaseStudy } from "@/components/CaseStudyGrid";
import caseStudyData from "@/data/case-studies.json";
import Link from "next/link";

const featuredCaseStudies = caseStudyData.filter((study) => study.featured).slice(0, 3) as CaseStudy[];

const experience = [
  {
    date: "Sep 2025 — Present",
    company: "Softweaver Technologies",
    role: "Software Developer",
    work: [
      "Reusable React and TypeScript interfaces with feature-based architecture",
      "Node.js and Express API functionality with REST workflows",
      "Authentication, validation, role-aware experiences, and async data fetching",
    ],
  },
  {
    date: "Feb 2024 — Sep 2025",
    company: "Miracle Websoft",
    role: "Full Stack Developer",
    work: [
      "Production e-commerce features and API-driven workflows",
      "REST and GraphQL integrations, webhooks, and third-party platforms",
      "Storefront usability, responsive behavior, and performance optimization",
    ],
  },
  {
    date: "Dec 2022 — Nov 2023",
    company: "Noctua Webworks",
    role: "Web Developer",
    work: [
      "Responsive interfaces with JavaScript, HTML, and CSS",
      "Cross-browser fixes, mobile layouts, and collaborative delivery",
    ],
  },
];

const skillGroups = [
  {
    label: "Frontend",
    title: "Interfaces people enjoy using",
    skills: "React.js · Next.js · TypeScript · JavaScript · Tailwind CSS · React Router · TanStack Query",
  },
  {
    label: "Backend",
    title: "Systems that hold up behind them",
    skills: "Node.js · Express.js · REST · GraphQL · Authentication · Authorization · Webhooks",
  },
  {
    label: "Data",
    title: "Models built around the workflow",
    skills: "PostgreSQL · MySQL · MongoDB · SQL · NoSQL · Data modeling · CRUD operations",
  },
  {
    label: "Delivery",
    title: "Production-aware from day one",
    skills: "Git · GitHub · Docker · Postman · Vite · Debugging · Performance optimization",
  },
  {
    label: "Commerce",
    title: "Specialized where business happens",
    skills: "Shopify Liquid · Admin API · Shopify Flow · Shopify Functions · Third-party integrations",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="Sandeep Singh, home">
            <span className="brand-mark" aria-hidden="true">SS</span>
            <span>Sandeep Singh</span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a className="nav-cta" href="#contact">Let&apos;s talk</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true"></div>
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow light"><span></span>Full Stack Developer · Rajpura, Punjab</p>
              <h1>I build web products that work <em>all the way through.</em></h1>
              <p className="hero-lede">
                From polished React and Next.js interfaces to reliable Node.js APIs and data layers,
                I turn complex workflows into fast, maintainable software.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work</a>
                <a className="button button-secondary" href="/Sandeep-Singh-Resume.pdf" download>
                  Download résumé
                </a>
              </div>
              <dl className="hero-stats" aria-label="Career highlights">
                <div><dt>4+</dt><dd>Years building</dd></div>
                <div><dt>60+</dt><dd>Projects contributed to</dd></div>
                <div><dt>3×</dt><dd>Employee of the Month</dd></div>
              </dl>
            </div>

            <div className="hero-visual" aria-label="Full-stack development overview">
              <div className="orbit orbit-one" aria-hidden="true"></div>
              <div className="orbit orbit-two" aria-hidden="true"></div>
              <div className="code-window">
                <div className="code-topbar"><span></span><span></span><span></span><p>portfolio.tsx</p></div>
                <pre><code><span className="code-dim">const</span> developer = {`{`}<br />
  name: <span className="code-string">&quot;Sandeep Singh&quot;</span>,<br />
  builds: [<br />
    <span className="code-string">&quot;interfaces&quot;</span>,<br />
    <span className="code-string">&quot;APIs&quot;</span>,<br />
    <span className="code-string">&quot;data systems&quot;</span><br />
  ],<br />
  framework: <span className="code-accent">&quot;Next.js&quot;</span><br />
{`}`};</code></pre>
                <div className="code-footer"><span className="pulse-dot"></span><span>Production-minded</span><span>TypeScript</span><span>Node.js</span></div>
              </div>
              <span className="floating-chip chip-react">React 19</span>
              <span className="floating-chip chip-api">REST / GraphQL</span>
              <span className="floating-chip chip-db">PostgreSQL</span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Core technologies">
          <div className="marquee-track">
            {Array.from({ length: 2 }).flatMap((_, copy) =>
              ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Shopify"].map((skill) => (
                <span key={`${copy}-${skill}`}>{skill}<i aria-hidden="true"></i></span>
              )),
            )}
          </div>
        </div>

        <section className="section work-section" id="work">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span></span>Projects &amp; case studies</p>
                <h2>How I approach<br />real product work.</h2>
              </div>
              <p>
                Three concise examples of how I translate product needs into maintainable
                interfaces, APIs, integrations, and data workflows.
              </p>
            </div>
            <CaseStudyGrid studies={featuredCaseStudies} />
            <div className="work-actions">
              <Link className="button button-dark" href="/projects">View all projects</Link>
              <p>Explore four live projects and all 18 experience-based case studies.</p>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="shell experience-layout">
            <div className="experience-intro">
              <p className="eyebrow light"><span></span>Experience</p>
              <h2>Four years of shipping, learning, and raising the bar.</h2>
              <p>
                I&apos;ve grown from responsive frontend delivery into end-to-end product work—owning
                interfaces, APIs, integrations, data, debugging, and the details that make software reliable.
              </p>
              <div className="recognition">
                <span className="award-mark" aria-hidden="true">★</span>
                <div><strong>3× Employee of the Month</strong><small>Miracle Websoft</small></div>
              </div>
            </div>

            <ol className="timeline" aria-label="Career history">
              {experience.map((job) => (
                <li key={job.company}>
                  <div className="timeline-date">{job.date}</div>
                  <div className="timeline-content">
                    <p>{job.company}</p>
                    <h3>{job.role}</h3>
                    <ul>{job.work.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span></span>Technical toolkit</p>
                <h2>Comfortable across the stack.<br />Focused on the outcome.</h2>
              </div>
              <p>
                My toolkit covers the full delivery path: interface architecture, application logic,
                integrations, databases, deployment workflows, and production debugging.
              </p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article key={group.label}>
                  <span className="skill-label">{group.label}</span>
                  <h3>{group.title}</h3>
                  <p>{group.skills}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section">
          <div className="shell about-layout">
            <p className="eyebrow"><span></span>How I work</p>
            <blockquote>
              Good full-stack work isn&apos;t about touching every layer. It&apos;s about making every layer
              support the same clear, reliable experience.
            </blockquote>
            <div className="principles">
              <p><span>Understand</span><strong>Start with the workflow</strong> before choosing the architecture.</p>
              <p><span>Structure</span><strong>Design reusable boundaries</strong> so products stay maintainable.</p>
              <p><span>Resolve</span><strong>Debug the system, not the symptom</strong> when production gets messy.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout">
            <div>
              <p className="eyebrow light"><span></span>Open to opportunities</p>
              <h2>Looking for a developer who can connect the dots?</h2>
            </div>
            <div className="contact-side">
              <p>
                I&apos;m interested in full-stack roles where thoughtful frontend work and dependable
                backend engineering matter equally.
              </p>
              <a className="contact-email" href="mailto:sdeep71382@gmail.com">sdeep71382@gmail.com</a>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:sdeep71382@gmail.com?subject=Full-stack%20opportunity">Start a conversation</a>
                <a className="text-link" href="/Sandeep-Singh-Resume.pdf" download>Download résumé</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <p>© 2026 Sandeep Singh</p>
          <p>Built locally with Next.js and TypeScript</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
