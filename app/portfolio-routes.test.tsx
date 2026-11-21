import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "./page";

afterEach(cleanup);

describe("portfolio routes", () => {
  it("keeps the homepage focused on three case studies and a projects-page action", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Learning Progress Dashboard" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Role-Based SaaS Workspace" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "E-Commerce API Workflows" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Secure Authentication Flow" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View all projects" })).toHaveAttribute("href", "/projects");
  });

  it("presents all 22 projects as case studies without live-project links", async () => {
    const routePath = "./projects/page";
    const routeModule = await import(/* @vite-ignore */ routePath).catch(() => ({
      default: () => null,
    }));
    const ProjectsPage = routeModule.default;

    render(<ProjectsPage />);

    expect(screen.getAllByRole("article")).toHaveLength(22);
    expect(screen.getByRole("heading", { name: "BLK Art Auction" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Production Debugging and Maintainability" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /visit/i })).not.toBeInTheDocument();
  });
});
