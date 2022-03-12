import styled, { css } from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.black};
  height: 5rem;
  border-bottom: 1px solid #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  nav {
    margin-left: 5rem;
    height: 100%;
  }
`;

export const Logo = styled.img``;

export const Menu = styled.nav``;

type MenuItemType = {
  isActive: boolean;
};

export const MenuItem = styled.a<MenuItemType>`
  display: inline-block;
  position: relative;
  height: 100%;
  line-height: 5rem;
  transition: color 0.2s;
  color: ${(props) =>
    props.isActive ? "white" : props.theme.colors.lightGrey};
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? "700" : "400")};

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: white;
  }

  ${(props) =>
    props.isActive &&
    css`
      &::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        background: ${({ theme }) => theme.colors.orange};
      }
    `}
`;
