// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../data/dresses");
vi.mock("../ui/DressCard");

import { cleanup, render, screen } from "@testing-library/react";
import type { Dress } from "../../types/dress";
import FeaturedDresses from "./FeaturedDresses";
import * as dressModule from "../../data/dresses";
import DressCard from "../ui/DressCard";

const createMockDress = (id: number): Dress => ({
  id,
  name: `Test Dress ${id}`,
  size: ["8", "10", "6"][id - 1],
  bust: 82 + id * 2,
  waist: 64 + id * 2,
  hip: 90 + id * 2,
  hollowToHem: 149 + id,
  description: `Test dress ${id}`,
  images: {
    main: `/images/dresses/test-${id}-main.jpg`,
    front: `/images/dresses/test-${id}-front.jpg`,
    back: `/images/dresses/test-${id}-back.jpg`,
  },
});

const mockFeaturedDresses = [1, 2, 3].map(createMockDress);

vi.mocked(dressModule).featuredDresses = mockFeaturedDresses;
vi.mocked(DressCard).mockImplementation(({ dress }: { dress: Dress }) => (
  <div data-testid={`dress-card-${dress.id}`}>{dress.name}</div>
));

const getFeaturedSection = () =>
  screen.getByText("Featured Dresses").closest("section");

const getGridContainer = () => getFeaturedSection()?.querySelector(".grid");

afterEach(() => {
  cleanup();
});

describe("FeaturedDresses", () => {
  beforeEach(() => {
    render(<FeaturedDresses />);
  });

  it("renders section with correct id", () => {
    expect(getFeaturedSection()).toHaveAttribute("id", "shop");
  });

  it("renders all featured dress cards", () => {
    const cards = screen.getAllByTestId(/dress-card-/);
    expect(cards).toHaveLength(mockFeaturedDresses.length);

    mockFeaturedDresses.forEach((dress) => {
      expect(screen.getByTestId(`dress-card-${dress.id}`)).toBeInTheDocument();
    });
  });

  it("renders grid with correct layout classes", () => {
    expect(getGridContainer()).toHaveClass("grid", "gap-8", "md:grid-cols-3");
  });
});
