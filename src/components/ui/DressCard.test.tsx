// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it } from "vitest";
import DressCard from "./DressCard";
import type { Dress } from "../../types/dress";

const testDress: Dress = {
  id: 1,
  name: "Lace Garden Gown",
  size: "8",
  bust: 84,
  waist: 66,
  hip: 92,
  hollowToHem: 150,
  description: "Romantic lace wedding dress with a soft flowing shape.",
  images: {
    main: "/images/dresses/test-main.jpg",
    front: "/images/dresses/test-front.jpg",
    back: "/images/dresses/test-back.jpg",
  },
};

afterEach(() => {
  cleanup();
});

describe("DressCard", () => {
  it("displays the dress information", () => {
    render(
      <MemoryRouter>
        <DressCard dress={testDress} />
      </MemoryRouter>
    );

    expect(screen.getByText("Lace Garden Gown")).toBeInTheDocument();
    expect(screen.getByText(/Size:/i)).toBeInTheDocument();
    expect(screen.getByText(/Bust:/i)).toBeInTheDocument();
    expect(screen.getByText(/Waist:/i)).toBeInTheDocument();
    expect(screen.getByText(/Hip:/i)).toBeInTheDocument();
    expect(screen.getByText(/Hollow to Hem:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Romantic lace wedding dress/i)
    ).toBeInTheDocument();
  });

  it("shows measurements with cm", () => {
    render(
      <MemoryRouter>
        <DressCard dress={testDress} />
      </MemoryRouter>
    );

    expect(screen.getByText(/84 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/66 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/92 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/150 cm/i)).toBeInTheDocument();
  });

  it("links to the correct product detail page", () => {
    render(
      <MemoryRouter>
        <DressCard dress={testDress} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /view details/i });

    expect(link).toHaveAttribute("href", "/dresses/1");
  });
});
