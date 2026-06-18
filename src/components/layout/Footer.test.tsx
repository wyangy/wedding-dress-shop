// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Footer from "./Footer";

let scrollToMock: ReturnType<typeof vi.spyOn>;

function renderFooter() {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Footer />

      <section id="about">About Section</section>
      <section id="how-it-works">How It Works Section</section>
      <section id="contact">Contact Section</section>
    </MemoryRouter>
  );

  const aboutSection = document.getElementById("about");
  const howItWorksSection = document.getElementById("how-it-works");
  const contactSection = document.getElementById("contact");

  if (!aboutSection || !howItWorksSection || !contactSection) {
    throw new Error("Expected test sections were not rendered");
  }

  const aboutScrollMock = vi.fn();
  const howItWorksScrollMock = vi.fn();
  const contactScrollMock = vi.fn();

  Object.defineProperty(aboutSection, "scrollIntoView", {
    configurable: true,
    writable: true,
    value: aboutScrollMock,
  });

  Object.defineProperty(howItWorksSection, "scrollIntoView", {
    configurable: true,
    writable: true,
    value: howItWorksScrollMock,
  });

  Object.defineProperty(contactSection, "scrollIntoView", {
    configurable: true,
    writable: true,
    value: contactScrollMock,
  });

  return {
    aboutScrollMock,
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

describe("Footer", () => {
  it("renders the footer and its main content", () => {
    renderFooter();

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Wedding Dress Shop",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("A bridal dress catalogue portfolio project.")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Quick Links",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Version 1 Scope",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Catalogue browsing and fitting requests only. No cart, checkout, or online payment."
      )
    ).toBeInTheDocument();
  });

  it("renders quick links with the correct destinations", () => {
    renderFooter();

    expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/shop"
    );

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/#about"
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

  it("scrolls to the top when the Shop link is clicked", async () => {
    const user = userEvent.setup();

    renderFooter();

    await user.click(screen.getByRole("link", { name: "Shop" }));

    expect(scrollToMock).toHaveBeenCalledOnce();
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("scrolls to the About section when its link is clicked", async () => {
    const user = userEvent.setup();
    const { aboutScrollMock, howItWorksScrollMock, contactScrollMock } =
      renderFooter();

    await user.click(screen.getByRole("link", { name: "About" }));

    await waitFor(() => {
      expect(aboutScrollMock).toHaveBeenCalledOnce();
    });

    expect(aboutScrollMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    expect(howItWorksScrollMock).not.toHaveBeenCalled();
    expect(contactScrollMock).not.toHaveBeenCalled();
  });

  it("scrolls to the How It Works section when its link is clicked", async () => {
    const user = userEvent.setup();
    const { aboutScrollMock, howItWorksScrollMock, contactScrollMock } =
      renderFooter();

    await user.click(screen.getByRole("link", { name: "How It Works" }));

    await waitFor(() => {
      expect(howItWorksScrollMock).toHaveBeenCalledOnce();
    });

    expect(howItWorksScrollMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    expect(aboutScrollMock).not.toHaveBeenCalled();
    expect(contactScrollMock).not.toHaveBeenCalled();
  });

  it("scrolls to the Contact section when its link is clicked", async () => {
    const user = userEvent.setup();
    const { aboutScrollMock, howItWorksScrollMock, contactScrollMock } =
      renderFooter();

    await user.click(screen.getByRole("link", { name: "Contact" }));

    await waitFor(() => {
      expect(contactScrollMock).toHaveBeenCalledOnce();
    });

    expect(contactScrollMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    expect(aboutScrollMock).not.toHaveBeenCalled();
    expect(howItWorksScrollMock).not.toHaveBeenCalled();
  });
});
