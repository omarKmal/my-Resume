import React from "react";
import styled from "styled-components";
import HImg from "../../images/header.png";
import BImg from "../../images/bg.jpg";
import Marginer from "../../containers/Marginer";
import { color, fonts } from "../../containers/tools";
import { Button } from "../Button/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { screenSize } from "../../containers/responsive";

const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  /* height: 700px; */
`;
const BackImage = styled.div`
  width: 100%;
  height: 400px;
  position: absolute;
  background: url(${BImg}) no-repeat;
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
`;
const Layer = styled.div`
  background: rgb(30, 30, 40);
  background: linear-gradient(
    0deg,
    rgba(30, 30, 40, 1) 0%,
    rgba(41, 41, 51, 0.9) 100%
  );
  width: 100%;
  height: 100%;
`;
const HeroWrapper = styled.div`
  width: 95%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${BImg}) no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 4;
  position: relative;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
`;
const LayerBox = styled.div`
  background: rgba(41, 41, 51, 0.6) 100%;
  width: 100%;
  height: 100%;
  position: absolute;
`;
const ImageBox = styled.div`
  width: 40%;
  height: 400px;
  z-index: 3;

  img {
    max-width: 100%;
    height: 100%;
  }
`;
const ContentBox = styled.div`
  width: 55%;
  height: 100%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: ${screenSize.desktop}px) {
    width: 100%;
    padding: 30px;
  }
  @media (max-width: ${screenSize.mobile}px) {
    width: 100%;
    padding: 15px;
    align-items: center;
  }
`;
const Header = styled.h1`
  font-size: ${fonts.lgFont};
  color: #fff;
  font-weight: 900;
  @media (max-width: ${screenSize.mobile}px) {
    text-align: center;
    font-size: 27px;
    line-height: 1.5;
  }
`;
const MoveBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${screenSize.mobile}px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CodeText = styled.span`
  color: ${color.mainColor};
  font-size: ${fonts.mdFont};
`;
const ExpText = styled.div`
  max-width: 210px;
  max-height: 30px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
const Word = styled.span`
  max-height: 30px;
  color: #fff;
  font-size: ${fonts.mdFont};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ECarousel = styled(Carousel)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li.slide {
    text-align: center;
  }
`;

const ExpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  padding-top: 30px;
`;
const Exp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${screenSize.mobile}px) {
    width: 100%;
  }
`;
const Num = styled.h2`
  color: ${color.mainColor};
  padding-right: 12px;
  font-size: ${fonts.mdFont};
`;
const Text = styled.span`
  color: #fff;
  font-size: ${fonts.smFont};
`;

function Hero({ isOpen, isDesktop }) {
  return (
    <HeroContainer isOpen={isOpen}>
      <BackImage>
        <Layer></Layer>
      </BackImage>
      <Marginer direction="vertical" margin={50} />
      <HeroWrapper>
        <LayerBox />
        {isDesktop && (
          <ImageBox>
            <img src={HImg} alt="omar" />
          </ImageBox>
        )}
        <ContentBox>
          <Header>Discover my Amazing Art Space!</Header>
          <MoveBox>
            <CodeText>&lt;Code&gt;</CodeText>

            <Word>I build</Word>
            <Marginer direction="horizontal" margin={10} />
            <ExpText>
              <ECarousel
                autoPlay={true}
                infiniteLoop={true}
                emulateTouch={true}
                interval={4000}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                transitionTime={2000}
                showThumbs={false}
              >
                <Word>Web Interfaces.</Word>
                <Word>Responsive Website</Word>
                <Word>Automation Tools</Word>
                <Word>React Website</Word>
                <Word>JQuery Website</Word>
                <Word>Clean Code</Word>
                <Word>Best Performance</Word>
              </ECarousel>
            </ExpText>
            <CodeText>&lt;/Code&gt;</CodeText>
          </MoveBox>
          <Marginer direction="vertical" margin={20} />
          <Button>explore now</Button>
        </ContentBox>
      </HeroWrapper>
      <ExpContainer>
        <Exp>
          <Num>1 + </Num>
          <Text> Years Experience</Text>
        </Exp>
        <Exp>
          <Num>3</Num>
          <Text>Completed Projects</Text>
        </Exp>
        <Exp>
          <Num>11</Num>
          <Text>Happy Customers</Text>
        </Exp>
        <Exp>
          <Num>20 +</Num>
          <Text>Honors and Awards</Text>
        </Exp>
      </ExpContainer>
    </HeroContainer>
  );
}

export default Hero;
