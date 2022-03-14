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
    const description = screen.getByText("2016-11-29");
    expect(description).toBeInTheDocument();
  });

  it("should render the props title", () => {
    const description = screen.getByText("Blog post #10");
    expect(description).toBeInTheDocument();
  });

  it("should render the props description", () => {
    const description = screen.getByText(
      "Natum integre tractatos eu duo, ut falli scriptorem qui."
    );
    expect(description).toBeInTheDocument();
  });
});
