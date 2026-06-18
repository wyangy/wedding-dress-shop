// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ScrollToHash from "./ScrollToHash";

let scrollToSpy: ReturnType<typeof vi.spyOn>;
let scrollIntoViewMock: ReturnType<typeof vi.fn>;
let originalScrollIntoViewDescriptor: PropertyDescriptor | undefined;

function renderWithPath(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ScrollToHash />
      <div id="contact">Contact</div>
      <div id="shop">Shop</div>
    </MemoryRouter>
  );
}

beforeEach(() => {
  scrollToSpy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});

  vi.stubGlobal(
    "requestAnimationFrame",
    vi.fn((callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    })
  );

  originalScrollIntoViewDescriptor = Object.getOwnPropertyDescriptor(
    Element.prototype,
    "scrollIntoView"
  );

  scrollIntoViewMock = vi.fn();

  Object.defineProperty(Element.prototype, "scrollIntoView", {
    configurable: true,
    writable: true,
    value: scrollIntoViewMock,
  });
});

afterEach(() => {
  cleanup();
  scrollToSpy.mockRestore();
  vi.unstubAllGlobals();

  if (originalScrollIntoViewDescriptor) {
    Object.defineProperty(
      Element.prototype,
      "scrollIntoView",
      originalScrollIntoViewDescriptor
    );
  } else {
    Reflect.deleteProperty(Element.prototype, "scrollIntoView");
  }
});

describe("ScrollToHash", () => {
  it("scrolls to the top when no hash is present", () => {
    renderWithPath("/");

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });

  it("scrolls the matching element into view when a hash is present", () => {
    renderWithPath("/#contact");

    expect(scrollIntoViewMock).toHaveBeenCalledOnce();
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    expect(scrollToSpy).not.toHaveBeenCalled();
  });

  it("does nothing when the hash target does not exist", () => {
    expect(() => renderWithPath("/#missing")).not.toThrow();

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
    expect(scrollToSpy).not.toHaveBeenCalled();
  });
});
