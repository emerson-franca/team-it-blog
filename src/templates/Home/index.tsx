import {
  ButtonLink,
  Container,
  HeroButton,
  HeroMessage,
  HeroMinorText,
  HeroSection,
  Img,
  Wrapper,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <HeroSection>
          <HeroMinorText>Hello!</HeroMinorText>
          <HeroMessage>
            News about the <span>Team.it</span> Test
          </HeroMessage>
          <HeroMinorText>Hire me =)</HeroMinorText>
          <ButtonLink
            href="https://www.linkedin.com/in/emerson-fran%C3%A7a-b5179179/"
            target="_blank"
          >
            <HeroButton aria-label="button-hire-me">
              Click to hire me
            </HeroButton>
          </ButtonLink>
        </HeroSection>
        <Img src="images/womanIllustration.svg" alt="Woman coding" />
      </Wrapper>
    </Container>
  );
}
