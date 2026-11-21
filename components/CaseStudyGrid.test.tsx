import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import caseStudies from "../data/case-studies.json";

describe("CaseStudyGrid", () => {
  it("renders only the supplied studies with their evidence sections", async () => {
    const componentPath = "./CaseStudyGrid";
    const componentModule = await import(/* @vite-ignore */ componentPath).catch(() => ({
      default: () => null,
    }));
    const CaseStudyGrid = componentModule.default;
    const featuredStudies = caseStudies.filter((study) => study.featured);

    render(<CaseStudyGrid studies={featuredStudies} />);

    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.getAllByText("Challenge")).toHaveLength(3);
    expect(screen.getAllByText("Contribution")).toHaveLength(3);
    expect(screen.getAllByText("Outcome")).toHaveLength(3);
    expect(screen.getByRole("heading", { name: "Learning Progress Dashboard" })).toBeInTheDocument();
  });
});
