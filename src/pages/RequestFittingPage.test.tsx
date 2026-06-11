// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import { afterEach, describe, expect, it } from "vitest";
import RequestFittingPage from "./RequestFittingPage";

afterEach(() => {
  cleanup();
});

function renderRequestFittingPage() {
  return render(
    <MemoryRouter initialEntries={["/request-fitting/1"]}>
      <Routes>
        <Route path="/request-fitting/:id" element={<RequestFittingPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("RequestFittingPage", () => {
  it("displays the request fitting form", () => {
    renderRequestFittingPage();

    expect(
      screen.getByRole("heading", { name: /request a fitting/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /submit request/i })
    ).toBeInTheDocument();
  });

  it("shows an error when phone number is invalid", async () => {
    const user = userEvent.setup();

    renderRequestFittingPage();

    await user.type(screen.getByLabelText(/name/i), "Jane Bride");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/phone/i), "hello phone");
    await user.type(
      screen.getByLabelText(/message/i),
      "I would like to request a fitting."
    );

    await user.click(screen.getByRole("button", { name: /submit request/i }));

    expect(
      screen.getByText(/please enter a valid phone number/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/your fitting request has been received/i)
    ).not.toBeInTheDocument();
  });

  it("shows a success message when the form is valid", async () => {
    const user = userEvent.setup();

    renderRequestFittingPage();

    await user.type(screen.getByLabelText(/name/i), "Jane Bride");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/phone/i), "+64 21 123 4567");
    await user.type(
      screen.getByLabelText(/message/i),
      "I would like to request a fitting."
    );

    await user.click(screen.getByRole("button", { name: /submit request/i }));

    expect(
      screen.getByText(/your fitting request has been received/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/please enter a valid phone number/i)
    ).not.toBeInTheDocument();
  });
});
