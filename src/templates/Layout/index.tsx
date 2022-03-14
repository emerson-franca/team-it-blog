import Header from "../../components/Header";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
