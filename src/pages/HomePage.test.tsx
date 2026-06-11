// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import HomePage from "./HomePage";

vi.mock("../components/layout/Header", () => ({
  default: () => <header data-testid="header">Header</header>,
}));

vi.mock("../components/home/Hero", () => ({
  default: () => <section data-testid="hero">Hero</section>,
}));

vi.mock("../components/home/FeaturedDresses", () => ({
  default: () => (
    <section data-testid="featured-dresses">Featured Dresses</section>
  ),
}));

vi.mock("../components/home/About", () => ({
  default: () => <section data-testid="about">About</section>,
}));

vi.mock("../components/home/HowItWorks", () => ({
  default: () => <section data-testid="how-it-works">How It Works</section>,
}));

vi.mock("../components/home/ContactCTA", () => ({
  default: () => <section data-testid="contact-cta">Contact CTA</section>,
}));

vi.mock("../components/layout/Footer", () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

afterEach(() => {
  cleanup();
});

describe("HomePage", () => {
  it("renders the main homepage sections", () => {
    render(<HomePage />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("featured-dresses")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("how-it-works")).toBeInTheDocument();
    expect(screen.getByTestId("contact-cta")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders Featured Dresses before About", () => {
    render(<HomePage />);

    const featuredDresses = screen.getByTestId("featured-dresses");
    const about = screen.getByTestId("about");

    expect(
      featuredDresses.compareDocumentPosition(about) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it("renders Contact CTA before Footer", () => {
    render(<HomePage />);

    const contactCta = screen.getByTestId("contact-cta");
    const footer = screen.getByTestId("footer");

    expect(
      contactCta.compareDocumentPosition(footer) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });
});
