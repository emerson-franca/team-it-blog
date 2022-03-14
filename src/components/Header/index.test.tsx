import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from ".";
import theme from "../../styles/theme";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
    };
  },
}));

const renderComponent = () => {
  return render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

describe("<Header />", () => {
  it("should render menus Home", () => {
    const { container } = renderComponent();
    const url = screen.getByText("Home");
    const url2 = screen.getByText("Posts");
    expect(url).toBeInTheDocument();
    expect(url2).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should active link on the path", () => {
    renderComponent();
    const url = screen.getByText("Home");
    const url2 = screen.getByText("Posts");
    const styles = getComputedStyle(url);
    const styles2 = getComputedStyle(url2);
    expect(styles.fontWeight).toBe("700");
    expect(styles2.fontWeight).toBe("400");
  });
});
