import styled from "styled-components";

export const Container = styled.main`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.green};
`;

export const Wrapper = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-top: 2rem;
    flex-direction: column;
    height: 100vh;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: 520px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
    height: 400px;
  }
`;

export const HeroSection = styled.section`
  max-width: 680px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 50px;
  }
`;

export const HeroMinorText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const HeroMessage = styled.h1`
  font-weight: 900;
  font-size: 72px;
  line-height: 72px;
  margin: 2rem 0;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ButtonLink = styled.a`
  text-decoration: none;
`;

export const HeroButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 21px 55px;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  font-size: 1.2rem;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 5rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 2rem auto;
  }
`;
