import { screen } from "@testing-library/react";
import Post from ".";
import { renderTestComponent } from "../../utils";

const POST_MOCK = {
  id: 10,
  title: "Blog post #10",
  author: "Tandy Thiem",
  publish_date: "2016-11-29",
  slug: "blog-post-10",
  description: "Natum integre tractatos eu duo, ut falli scriptorem qui.",
  content: "",
};

describe("<Post />", () => {
  beforeEach(() => {
    renderTestComponent(<Post {...POST_MOCK} />);
  });

  it("should render the props date", () => {
    const date = screen.getByText("2016-11-29");
    expect(date).toBeInTheDocument();
  });

  it("should render the props title", () => {
    const title = screen.getByText("Blog post #10");
    expect(title).toBeInTheDocument();
  });

  it("should render the props description", () => {
    const description = screen.getByText(
      "Natum integre tractatos eu duo, ut falli scriptorem qui."
    );
    expect(description).toBeInTheDocument();
  });
});
