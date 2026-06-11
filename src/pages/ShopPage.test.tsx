// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it } from "vitest";
import ShopPage from "./ShopPage";
import { dresses } from "../data/dresses";

afterEach(() => {
  cleanup();
});

function renderShopPage() {
  return render(
    <MemoryRouter>
      <ShopPage />
    </MemoryRouter>
  );
}

describe("ShopPage", () => {
  it("displays dresses from the catalogue data", () => {
    renderShopPage();

    dresses.forEach((dress) => {
      expect(screen.getByText(dress.name)).toBeInTheDocument();
    });
  });

  it("shows a View Details link for each dress", () => {
    renderShopPage();

    const detailLinks = screen.getAllByRole("link", {
      name: /view details/i,
    });

    expect(detailLinks).toHaveLength(dresses.length);
  });

  it("links the first dress card to the correct product detail page", () => {
    renderShopPage();

    const detailLinks = screen.getAllByRole("link", {
      name: /view details/i,
    });

    expect(detailLinks[0]).toHaveAttribute("href", `/dresses/${dresses[0].id}`);
  });
});
