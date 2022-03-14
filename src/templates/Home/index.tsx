import {
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
          <HeroButton aria-label="button-hire-me">Click to hire me</HeroButton>
        </HeroSection>
        <Img src="images/womanIllustration.svg" alt="Woman coding" />
      </Wrapper>
    </Container>
  );
}
