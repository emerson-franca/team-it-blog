import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Logo, Menu, MenuItem, Wrapper } from "./styles";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo src="/images/logo.svg" alt="Team.it logo" />
        </Link>

        <Menu>
          <Link href="/">
            <MenuItem data-testid="link" isActive={router.pathname === "/"}>
              Home
            </MenuItem>
          </Link>

          <Link href="posts">
            <MenuItem
              data-testid="link"
              isActive={router.pathname === "/posts"}
            >
              Posts
            </MenuItem>
          </Link>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;
