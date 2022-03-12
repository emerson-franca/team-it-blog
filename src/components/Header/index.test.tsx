import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from ".";
import theme from "../../styles/theme";

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
});
