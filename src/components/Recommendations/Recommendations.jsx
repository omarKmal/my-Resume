import React from "react";
import { color, fonts } from "../../containers/tools";
import Marginer from "../../containers/Marginer";
import styled from "styled-components";
import { GlobalHeader, GlobalPara } from "../../containers/Global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { sliderData } from "../../Data";
import { Carousel } from "react-responsive-carousel";
import { screenSize } from "../../containers/responsive";

const RecContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-bottom: 0;
`;

const SliderContainer = styled.div`
  width: 95%;
  margin-right: 20px;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);

  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${color.boxColor};
  position: relative;

  @media (max-width: ${screenSize.mobile}px) {
    margin-right: 5px;
    padding: 15px;
    padding-top: 25px;
    justify-content: center;
    border-radius: 5px;
  }
`;
const ImgContainer = styled.div`
  width: 65px;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 20px;
  transform: translate(-15px, -17px);

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: ${screenSize.mobile}px) {
    width: 50px;
    height: 50px;
    right: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const StartsContainer = styled.div`
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #1f1f29;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(FontAwesomeIcon)`
  margin: 1px;
  color: ${color.mainColor};
  font-size: ${fonts.xsFont};
`;
const ECarousel = styled(Carousel)`
  height: 100%;
  width: 100%;
  position: relative;

  li.slide {
    text-align: unset;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .axis-horizontal,
  .carousel-slider {
    overflow: visible;
  }
`;

function Recommendations() {
  return (
    <>
      <Marginer direction="vertical" margin={20} />
      <GlobalHeader>Recommendations</GlobalHeader>
      <Marginer direction="vertical" margin={10} />

      <RecContainer>
        <SliderWrapper>
          <ECarousel
            showArrows={false}
            showIndicators={false}
            centerMode={true}
            emulateTouch={true}
            // infiniteLoop={true}
            showThumbs={false}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={5000}
            autoPlay={true}
            showStatus={false}
            transitionTime={500}
          >
            {sliderData.map((item, index) => (
              <SliderContainer key={index}>
                <ImgContainer>
                  <img src={item.img} alt={item.name} />
                </ImgContainer>
                <GlobalHeader>{item.name}</GlobalHeader>
                <GlobalPara>
                  <i>{item.title}</i>
                </GlobalPara>
                <Marginer direction="vertical" margin={20} />
                <GlobalPara>{item.content}</GlobalPara>
                <Marginer direction="vertical" margin={20} />
                <StartsContainer>
                  <Icon icon={faStar} />
                  <Icon icon={faStar} />
                  <Icon icon={faStar} />
                  <Icon icon={faStar} />
                  <Icon icon={faStar} />
                </StartsContainer>
              </SliderContainer>
            ))}
          </ECarousel>
        </SliderWrapper>
      </RecContainer>
    </>
  );
}

export default Recommendations;
