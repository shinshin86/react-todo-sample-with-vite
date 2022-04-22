import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import Filter, { FilterType } from "./Filter";

import { render, screen } from "@testing-library/react";

describe("Simple working test", () => {
  const selectedFilter = "all";
  const emptySetFilter = (filter: FilterType) => console.log(filter);

  test("Should render correctly", () => {
    const { container } = render(
      <Filter filter={selectedFilter} setFilter={emptySetFilter} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("The text is visible", () => {
    render(<Filter filter={selectedFilter} setFilter={emptySetFilter} />);
    expect(screen.getByText("Choose task filter")).toBeInTheDocument();
  });

  test("Should checked all checkbox", () => {
    const { container } = render(
      <Filter filter={selectedFilter} setFilter={emptySetFilter} />,
    );
    expect(container.querySelector("#all")).toBeChecked();
  });

  test("Should active and complete are unchecked in the initial display", () => {
    const { container } = render(
      <Filter filter={selectedFilter} setFilter={emptySetFilter} />,
    );
    expect(container.querySelector("#active")).not.toBeChecked();
    expect(container.querySelector("#completed")).not.toBeChecked();
  });
});
