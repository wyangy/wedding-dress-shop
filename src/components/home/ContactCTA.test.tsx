// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import ContactCTA from "./ContactCTA";

beforeEach(() => {
  render(<ContactCTA />);
});

afterEach(() => {
  cleanup();
});

describe("ContactCTA", () => {
  it("renders the contact section with the correct id", () => {
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Have questions?",
    });

    expect(heading.closest("section")).toHaveAttribute("id", "contact");
  });

  it("renders the contact heading", () => {
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Have questions?",
      })
    ).toBeInTheDocument();
  });

  it("renders the contact description", () => {
    expect(
      screen.getByText("We're here to help. Send us a message.")
    ).toBeInTheDocument();
  });

  it("renders the Contact Us link with the correct email address", () => {
    expect(screen.getByRole("link", { name: "Contact Us" })).toHaveAttribute(
      "href",
      "mailto:hello@example.com"
    );
  });
});
