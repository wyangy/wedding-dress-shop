// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { afterEach, describe, expect, it } from "vitest";
import ProductDetailPage from "./ProductDetailPage";
import { dresses } from "../data/dresses";

afterEach(() => {
  cleanup();
});

function renderProductDetailPage(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/dresses/:id" element={<ProductDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("ProductDetailPage", () => {
  it("displays the selected dress details", () => {
    const dress = dresses[0];

    renderProductDetailPage(`/dresses/${dress.id}`);

    expect(
      screen.getByRole("heading", { name: dress.name })
    ).toBeInTheDocument();

    expect(screen.getByText(`Size: ${dress.size}`)).toBeInTheDocument();
    expect(screen.getByText(`Bust: ${dress.bust} cm`)).toBeInTheDocument();
    expect(screen.getByText(`Waist: ${dress.waist} cm`)).toBeInTheDocument();
    expect(screen.getByText(`Hip: ${dress.hip} cm`)).toBeInTheDocument();
    expect(
      screen.getByText(`Hollow to Hem: ${dress.hollowToHem} cm`)
    ).toBeInTheDocument();

    expect(
      screen.getByText("Detailed measurements: please see Notes to Tailor PDF.")
    ).toBeInTheDocument();
  });

  it("links to the correct request fitting page", () => {
    const dress = dresses[0];

    renderProductDetailPage(`/dresses/${dress.id}`);

    const link = screen.getByRole("link", { name: /request a fitting/i });

    expect(link).toHaveAttribute("href", `/request-fitting/${dress.id}`);
  });

  it("shows dress not found when the dress id does not exist", () => {
    renderProductDetailPage("/dresses/999");

    expect(
      screen.getByRole("heading", { name: /dress not found/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /back to shop/i })).toHaveAttribute(
      "href",
      "/shop"
    );
  });
});
