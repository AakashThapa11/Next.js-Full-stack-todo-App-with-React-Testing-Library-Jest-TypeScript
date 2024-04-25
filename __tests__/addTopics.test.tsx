import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "@/app/addTopics/page";

// Mock useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe("Page Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Mock window.alert
  const originalAlert = window.alert;
  beforeAll(() => {
    window.alert = jest.fn();
  });
  afterAll(() => {
    window.alert = originalAlert;
  });

  it("renders without crashing", () => {
    render(<Page />);
  });

  it("displays an alert if title or description is empty on form submission", async () => {
    const { getByText } = render(<Page />);

    fireEvent.submit(getByText(/add/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Title and Description are required"
      );
    });
  });
});
