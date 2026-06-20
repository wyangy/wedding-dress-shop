// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Hero from "./Hero";

describe("Hero", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the hero section with the correct heading", () => {
    expect(screen.getByText(/find the dress/i)).toBeInTheDocument();
    expect(screen.getByText(/that feels like/i)).toBeInTheDocument();
    expect(screen.getByText(/^you\.$/i)).toBeInTheDocument();
  });

  it("renders the hero description text", () => {
    expect(
      screen.getByText(
        /designer sample dresses, seriously loved\.\s*one-of-a-kind bridal pieces ready for a new moment\./i
      )
    ).toBeInTheDocument();
  });

  it("renders the decorative hero image with the correct attributes", () => {
    const heroImage = screen.getByRole("presentation", {
      hidden: true,
    });

    expect(heroImage).toHaveAttribute("src", "/images/hero/hero.jpg");
    expect(heroImage).toHaveAttribute("alt", "");
    expect(heroImage).toHaveAttribute("aria-hidden", "true");
    expect(heroImage).toHaveAttribute("loading", "eager");
    expect(heroImage).toHaveAttribute("decoding", "async");
  });

  it("renders the Shop the Archive link with the correct destination", () => {
    const shopLink = screen.getByRole("link", {
      name: /shop the archive/i,
    });

    expect(shopLink).toHaveAttribute("href", "/shop");
  });

  it("renders the Request a Fitting link as a same-page contact anchor", () => {
    const fittingLink = screen.getByRole("link", {
      name: /request a fitting/i,
    });

    expect(fittingLink).toHaveAttribute("href", "#contact");
  });
});
