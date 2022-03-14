import styled from "styled-components";

export const Container = styled.main`
  max-width: 680px;
  margin: 0 auto;
  padding-top: 80px;

  @media (max-width: 768px) {
    margin: 0 60px;
  }
`;

export const PostPageTitle = styled.h1`
  font-size: 3.5rem;
`;

export const PostPageDate = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 2rem;
`;

export const PostPageAuthor = styled.h3`
  margin-bottom: 3rem;
`;

export const PostPageContent = styled.section`
  font-weight: 400;
  font-size: 1.12rem;
  line-height: 30px;

  p {
    margin-top: 2rem;
  }
`;

export const PostPageComments = styled.section`
  margin-top: 2rem;
`;

export const PostPageCommentsTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
