import React from "react";
import { Container, Logo, Menu, MenuItem, Wrapper } from "./styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src="/images/logo.svg" />
        <Menu>
          <MenuItem data-testid="link" isActive>
            Home
          </MenuItem>
          <MenuItem data-testid="link" isActive={false}>
            Posts
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;
