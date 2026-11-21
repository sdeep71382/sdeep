import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyGrid, { type CaseStudy } from "@/components/CaseStudyGrid";
import caseStudyData from "@/data/case-studies.json";
import projectData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Sandeep Singh",
  description: "Concise full-stack engineering project case studies from Sandeep Singh.",
};

export default function ProjectsPage() {
  const allCaseStudies = [
    ...(projectData as CaseStudy[]),
    ...(caseStudyData as CaseStudy[]),
  ];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" href="/" aria-label="Sandeep Singh, home">
            <span className="brand-mark" aria-hidden="true">SS</span>
            <span>Sandeep Singh</span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <a href="#case-studies">Case studies</a>
            <Link className="nav-cta" href="/#contact">Let&apos;s talk</Link>
          </nav>
        </div>
      </header>

      <main id="main" className="projects-page">
        <section className="projects-hero" id="top">
          <div className="hero-grid" aria-hidden="true"></div>
          <div className="shell projects-hero-layout">
            <div>
              <p className="eyebrow light"><span></span>Projects &amp; case studies</p>
              <h1>Experience shown<br /><em>through the work.</em></h1>
            </div>
            <div className="projects-hero-copy">
              <p>
                Each case study shows how I approach the interfaces, APIs, integrations,
                data, and production details behind full-stack products.
              </p>
              <dl className="project-page-stats" aria-label="Portfolio project summary">
                <div><dt>4</dt><dd>Named projects</dd></div>
                <div><dt>18</dt><dd>Additional cases</dd></div>
                <div><dt>22</dt><dd>Case studies</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section case-studies-section" id="case-studies">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span></span>Experience in practice</p>
                <h2>22 focused<br />case studies.</h2>
              </div>
              <p>
                Named project work and anonymized experience examples, each focused on the
                problem, my contribution, and the practical outcome without overstated claims.
              </p>
            </div>
            <CaseStudyGrid studies={allCaseStudies} />
          </div>
        </section>

        <section className="projects-contact">
          <div className="shell projects-contact-layout">
            <div>
              <p className="eyebrow light"><span></span>Need the full picture?</p>
              <h2>Let&apos;s discuss the work behind the cards.</h2>
            </div>
            <div>
              <p>I can walk through architecture, decisions, trade-offs, and the role I played.</p>
              <a className="button button-light" href="mailto:sdeep71382@gmail.com?subject=Full-stack%20opportunity">Start a conversation</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <p>© 2026 Sandeep Singh</p>
          <p>Full-stack projects and case studies</p>
          <Link href="/">Return home</Link>
        </div>
      </footer>
    </>
  );
}
