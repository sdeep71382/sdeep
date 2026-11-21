import { describe, expect, it } from "vitest";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const requestedProjectTitles = [
  "BLK Art Auction",
  "Whizlabs",
  "Alero",
  "Tech Point Services",
];

describe("portfolio project data", () => {
  it("presents each named project as a complete case study without a live URL", async () => {
    const projects = await readFile(join(process.cwd(), "data", "projects.json"), "utf8")
      .then((contents) => JSON.parse(contents) as Array<Record<string, unknown>>)
      .catch(() => []);
    const titles = projects.map((project) => project.title);

    expect(titles).toEqual(requestedProjectTitles);
    expect(new Set(titles).size).toBe(requestedProjectTitles.length);

    for (const project of projects) {
      expect(project).not.toHaveProperty("url");
      expect(project).toEqual(expect.objectContaining({
        slug: expect.any(String),
        category: expect.any(String),
        challenge: expect.any(String),
        contribution: expect.any(String),
        outcome: expect.any(String),
        stack: expect.any(Array),
        featured: expect.any(Boolean),
      }));
    }
  });
});
