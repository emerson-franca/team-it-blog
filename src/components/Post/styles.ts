import styled from "styled-components";

export const Container = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const PostDate = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 1rem;
`;

export const PostTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const PostDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 2rem;
`;
