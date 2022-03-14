import { screen } from "@testing-library/react";
import Posts from ".";
import { renderTestComponent } from "../../utils";

const POST_MOCK = [
  {
    id: 10,
    title: "Blog post #10",
    author: "Tandy Thiem",
    publish_date: "2016-11-29",
    slug: "blog-post-10",
    description: "Natum integre tractatos eu duo, ut falli scriptorem qui.",
    content: "",
  },
  {
    id: 6,
    title: "Blog post #6",
    author: "Merna Mitchel",
    publish_date: "2016-09-16",
    slug: "blog-post-6",
    description: "Velit doming vis te, ut vim fugit abhorreant.",
    content:
      "<p>Velit doming vis te, ut vim fugit abhorreant. Eirmod reformidans duo at, ne nam virtute commune, sit cu esse vidit zril.</p> <p>Iusto officiis eloquentiam cum ea, eu case interpretaris duo. Duis ancillae an pro, vel idque error alienum at. An nec graeco equidem, unum eripuit ea sit.</p>",
  },
];

describe("<Posts />", () => {
  beforeEach(() => {
    renderTestComponent(<Posts posts={POST_MOCK} />);
  });

  it("should render all posts", () => {
    const post = screen.getByText("Blog post #10");
    const post2 = screen.getByText("Blog post #6");
    expect(post2).toBeInTheDocument();
    expect(post).toBeInTheDocument();
  });
});
