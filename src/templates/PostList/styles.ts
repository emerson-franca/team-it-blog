import styled from "styled-components";

export const Container = styled.main`
  padding-top: 80px;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.black};
`;

export const PostsWrapper = styled.section`
  max-width: 680px;
  margin: 0 auto;
`;
