import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "@/app/layout";

jest.mock("@/components/NavBar", () => {
  return function DummyNavBar() {
    return <div>Dummy NavBar</div>;
  };
});

describe("RootLayout", () => {
  test("renders NavBar and children", () => {
    const { container } = render(
      <RootLayout>
        <div>Test child</div>
      </RootLayout>
    );

    expect(screen.getByText("Dummy NavBar")).toBeInTheDocument();
    expect(screen.getByText("Test child")).toBeInTheDocument();
    expect(container.querySelector("html")).toHaveAttribute("lang", "en");
  });
});
