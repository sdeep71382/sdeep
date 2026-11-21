import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

type CaseStudy = {
  slug?: string;
  title?: string;
  challenge?: string;
  contribution?: string;
  outcome?: string;
  stack?: string[];
  featured?: boolean;
};

describe("case-study content", () => {
  it("provides 18 complete, unique case studies and three homepage features", async () => {
    const studies = await readFile(join(process.cwd(), "data", "case-studies.json"), "utf8")
      .then((contents) => JSON.parse(contents) as CaseStudy[])
      .catch(() => []);

    expect(studies).toHaveLength(18);
    expect(studies.filter((study) => study.featured)).toHaveLength(3);
    expect(new Set(studies.map((study) => study.slug)).size).toBe(18);

    for (const study of studies) {
      expect(study.slug).toBeTruthy();
      expect(study.title).toBeTruthy();
      expect(study.challenge).toBeTruthy();
      expect(study.contribution).toBeTruthy();
      expect(study.outcome).toBeTruthy();
      expect(study.stack?.length).toBeGreaterThanOrEqual(2);
    }
  });
});
