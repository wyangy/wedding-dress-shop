// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Header from "./Header";

let scrollToMock: ReturnType<typeof vi.spyOn>;

function renderHeader() {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />

      <section id="how-it-works">How It Works Section</section>
      <section id="contact">Contact Section</section>
    </MemoryRouter>
  );

  const howItWorksSection = document.getElementById("how-it-works");
  const contactSection = document.getElementById("contact");

  if (!howItWorksSection || !contactSection) {
    throw new Error("Expected test sections were not rendered");
  }

  const howItWorksScrollMock = vi.fn();
  const contactScrollMock = vi.fn();

  Object.defineProperty(howItWorksSection, "scrollIntoView", {
    configurable: true,
    value: howItWorksScrollMock,
  });

  Object.defineProperty(contactSection, "scrollIntoView", {
    configurable: true,
    value: contactScrollMock,
  });

  return {
    howItWorksScrollMock,
    contactScrollMock,
  };
}

beforeEach(() => {
  scrollToMock = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  scrollToMock.mockRestore();
  vi.clearAllMocks();
});

describe("Header", () => {
  it("renders the header and navigation landmarks", () => {
    renderHeader();

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders navigation links with the correct destinations", () => {
    renderHeader();

    expect(
      screen.getByRole("link", { name: "WEDDING DRESS SHOP" })
    ).toHaveAttribute("href", "/");

    expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/shop"
    );

    expect(screen.getByRole("link", { name: "How It Works" })).toHaveAttribute(
      "href",
      "/#how-it-works"
    );

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/#contact"
    );
  });

  it("scrolls to the top when the home link is clicked", async () => {
    const user = userEvent.setup();

    renderHeader();

    await user.click(screen.getByRole("link", { name: "WEDDING DRESS SHOP" }));

    expect(scrollToMock).toHaveBeenCalledOnce();
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("scrolls to the top when the Shop link is clicked", async () => {
    const user = userEvent.setup();

    renderHeader();

    await user.click(screen.getByRole("link", { name: "Shop" }));

    expect(scrollToMock).toHaveBeenCalledOnce();
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("scrolls to the How It Works section when its link is clicked", async () => {
    const user = userEvent.setup();
    const { howItWorksScrollMock, contactScrollMock } = renderHeader();

    await user.click(screen.getByRole("link", { name: "How It Works" }));

    await waitFor(() => {
      expect(howItWorksScrollMock).toHaveBeenCalledOnce();
    });

    expect(howItWorksScrollMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    expect(contactScrollMock).not.toHaveBeenCalled();
  });

  it("scrolls to the Contact section when its link is clicked", async () => {
    const user = userEvent.setup();
    const { howItWorksScrollMock, contactScrollMock } = renderHeader();

    await user.click(screen.getByRole("link", { name: "Contact" }));

    await waitFor(() => {
      expect(contactScrollMock).toHaveBeenCalledOnce();
    });

    expect(contactScrollMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    expect(howItWorksScrollMock).not.toHaveBeenCalled();
  });
});
