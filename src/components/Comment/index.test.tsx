import { screen } from "@testing-library/react";
import Comment from ".";
import { renderTestComponent } from "../../utils";

const COMMENT_MOCK = {
  id: 1,
  postId: 1,
  parent_id: null,
  user: "Amelia",
  date: "2016-02-23",
  content: "Nulla in nulla vel nisi faucibus scelerisque. Donec quis tortor.",
};

describe("<Comment />", () => {
  beforeEach(() => {
    renderTestComponent(<Comment {...COMMENT_MOCK} />);
  });

  it("should render the props user", () => {
    const user = screen.getByText("Amelia");
    expect(user).toBeInTheDocument();
  });

  it("should render the props date", () => {
    const date = screen.getByText("2016-02-23");
    expect(date).toBeInTheDocument();
  });

  it("should render the props content", () => {
    const content = screen.getByText(
      "Nulla in nulla vel nisi faucibus scelerisque. Donec quis tortor."
    );
    expect(content).toBeInTheDocument();
  });
});
