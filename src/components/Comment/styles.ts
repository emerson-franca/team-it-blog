import styled from "styled-components";

export const Container = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
`;

export const CommentAvatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentInfosWrapper = styled.div``;

export const CommentName = styled.p``;

export const CommentDate = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 1rem;
`;

export const CommentContent = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
