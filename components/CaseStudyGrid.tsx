export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  challenge: string;
  contribution: string;
  outcome: string;
  stack: string[];
  featured: boolean;
};

type CaseStudyGridProps = {
  studies: CaseStudy[];
};

export default function CaseStudyGrid({ studies }: CaseStudyGridProps) {
  return (
    <div className="case-grid">
      {studies.map((study, index) => (
        <article className={`case-card case-tone-${index % 4}`} key={study.slug}>
          <div className="case-card-top">
            <span className="case-category">{study.category}</span>
            <div className="case-signal" aria-hidden="true"><i></i><i></i><i></i></div>
          </div>
          <h3>{study.title}</h3>
          <dl className="case-evidence">
            <div>
              <dt>Challenge</dt>
              <dd>{study.challenge}</dd>
            </div>
            <div>
              <dt>Contribution</dt>
              <dd>{study.contribution}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{study.outcome}</dd>
            </div>
          </dl>
          <ul className="tag-list" aria-label={`${study.title} technologies`}>
            {study.stack.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
