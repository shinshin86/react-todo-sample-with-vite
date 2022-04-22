import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Simple working test", () => {
  test("Should render correctly", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("The title is visible", () => {
    render(<App />);
    expect(screen.getByText("Your TODO")).toBeInTheDocument();
  });
});
