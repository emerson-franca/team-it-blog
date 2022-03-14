import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

type renderTestComponentProps = JSX.Element;

export const renderTestComponent = (component: renderTestComponentProps) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
