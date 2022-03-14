import { screen } from "@testing-library/react";
import Home from ".";
import { renderTestComponent } from "../../utils";

describe("<Home />", () => {
  beforeEach(() => {
    renderTestComponent(<Home />);
  });

  it("should a render a Hero message", () => {
    const message = screen.getByText("Hello!");
    expect(message).toBeInTheDocument();
  });
  it("should a render a Hire me Button", () => {
    const button = screen.getByRole("button", { name: "button-hire-me" });
    expect(button).toBeInTheDocument();
  });
  it("should a render a Illustration img", () => {
    const img = screen.getByAltText("Woman coding");
    expect(img).toBeInTheDocument();
  });
});
