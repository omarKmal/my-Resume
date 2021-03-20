import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import imageOne from "../../images/01.png";
import Marginer from "../../containers/Marginer";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color } from "../../containers/tools";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faTelegramPlane,
  faRedditAlien,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { screenSize } from "../../containers/responsive";
import useOutSideClick from "../../containers/useOusSideClick";

const { mainColor, grayFont, barColor } = color;

const InfoBarContainer = styled.div`
  width: 290px;
  max-height: 100%;
  top: 25px;
  bottom: 25px;
  left: 15px;
  /* transform: translate(0%, -50%); */
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  overflow: hidden;
  z-index: 100;
  transition: all 0.5s ease-in-out;
  @media (max-width: ${screenSize.changeView}px) {
    left: ${({ isInfoOpen }) => (isInfoOpen ? "0" : "-305px")};
    top: 0;
    bottom: 0;
  }
`;
const TopSection = styled.div`
  width: 100%;
  min-height: 235px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #23232e;
  padding: 20px;
  position: relative;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
`;
const CloseIcon = styled(FontAwesomeIcon)`
  color: ${color.grayFont};
  right: 20px;
  top: 20px;
  position: absolute;
  font-size: 20px;
  margin-left: 10%;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
const PersontImage = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  background: url(${imageOne}) no-repeat;
  background-size: cover;
  background-position: center;
`;
const dot = keyframes`
  0% {
    box-shadow: 0px 0px 0px 0px ${mainColor};
  }
  50% {
    box-shadow: 0px 0px 3px 1px ${mainColor};
    /* border: 1px solid ${mainColor}; */
  }
  100% {
    box-shadow: 0px 0px 5px 2px ${mainColor};
  }
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  background-color: #ffc107;
  border-radius: 50%;
  bottom: 50%;
  right: 50%;
  transform: translate(36px, 9px);
  animation: ${dot} 1s infinite linear;
`;
const Name = styled.h4`
  color: #fff;
  font-weight: 500;
`;
const Title = styled.span`
  color: ${grayFont};
  font-size: 13px;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${barColor};
  overflow-y: scroll;
  box-sizing: content-box;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  padding: 15px;
`;
const AboutBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
const Text = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${grayFont};
`;

const AllSkillsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const SkillContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${mainColor};
  margin-right: 10px;
`;
const InfoFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #23232e;
  position: flex;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
`;
const FooterWrapper = styled.div`
  min-width: 100%;
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SochialLinks = styled.a`
  text-decoration: none;
`;
const SochialIcon = styled(FontAwesomeIcon)`
  color: ${grayFont};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`;
const CVButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Button = styled.a`
  padding: 10px 30px;
  text-decoration: none;
  font-family: "Courier Prime", monospace;
  font-size: 20px;
  text-transform: uppercase;
  color: ${color.mainColor};
  background-color: ${color.boxColor};
  cursor: pointer;
  border: none;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: contrast(80%);
    transform: translate(0, -5px);
  }
  @media (max-width: ${screenSize.mobile}px) {
    padding: 15px 20px;
  }
`;

function InfoBar({
  progressData,
  lodaing,
  error,
  handleClick,
  isChangeView,
  handleInfoOpen,
  isInfoOpen,
}) {
  const WrapperRef = useRef(null);
  useOutSideClick(WrapperRef, handleClick);

  return (
    <InfoBarContainer className="info" ref={WrapperRef} isInfoOpen={isInfoOpen}>
      <TopSection>
        {isChangeView && <CloseIcon icon={faTimes} onClick={handleInfoOpen} />}
        <PersontImage>
          <Circle />
        </PersontImage>
        <Marginer direction="vertical" margin={5} />
        <Name>Omar Kamal</Name>
        <Title>Front-end Web Developer</Title>
        <Title>Ui/Ux Designer</Title>
      </TopSection>
      <ContentContainer>
        <ContentWrapper>
          <AboutBox>
            <TextBox>
              <Text>Residence: </Text>
              <Title>Egypt</Title>
            </TextBox>
            <Marginer direction="vertical" margin={5} />
            <TextBox>
              <Text>City: </Text>
              <Title>Mansoura</Title>
            </TextBox>
            <Marginer direction="vertical" margin={5} />
            <TextBox>
              <Text>Age: </Text>
              <Title>26</Title>
            </TextBox>
          </AboutBox>
          <Marginer direction="vertical" margin={20} />
          <Line />
          <Marginer direction="vertical" margin={20} />
          {progressData.map((item, index) => (
            <Progress item={item} key={index} />
          ))}
          <Marginer direction="vertical" margin={20} />
          <Line />
          <Marginer direction="vertical" margin={20} />
          <AllSkillsContainer>
            <SkillContainer>
              <Icon icon={faCheck} />
              <Title>BootStrab, Materialize</Title>
            </SkillContainer>
            <Marginer direction="vertical" margin={5} />

            <SkillContainer>
              <Icon icon={faCheck} />
              <Title>Stylus, Sass, Style-components</Title>
            </SkillContainer>
            <Marginer direction="vertical" margin={5} />

            <SkillContainer>
              <Icon icon={faCheck} />
              <Title>Gulp, Webpack, Grunt</Title>
            </SkillContainer>
            <Marginer direction="vertical" margin={5} />
            <SkillContainer>
              <Icon icon={faCheck} />
              <Title>GIT knowledge</Title>
            </SkillContainer>
          </AllSkillsContainer>
          <Marginer direction="vertical" margin={20} />
          <Line />
          <Marginer direction="vertical" margin={20} />

          <CVButton>
            <Button
              href="https://drive.google.com/file/d/1w-cJnRJpR5-w5ipPb-xslznrADutUIwz/view?usp=sharing"
              target="_blank"
            >
              Download My CV
            </Button>
          </CVButton>
        </ContentWrapper>
      </ContentContainer>
      <InfoFooter>
        <FooterWrapper>
          <SochialLinks
            href="https://twitter.com/OmarKmalElDain"
            target="_blank"
          >
            <SochialIcon icon={faTwitter} />
          </SochialLinks>

          <SochialLinks href="https://github.com/omarKmal" target="_blank">
            <SochialIcon icon={faGithub} />
          </SochialLinks>

          <SochialLinks
            href="https://www.linkedin.com/in/omar-kamal-8a61861a1/"
            target="_blank"
          >
            <SochialIcon icon={faLinkedinIn} />
          </SochialLinks>

          <SochialLinks href="https://t.me/Omrkmal‏" target="_blank">
            <SochialIcon icon={faTelegramPlane} />
          </SochialLinks>

          <SochialLinks
            href="https://www.reddit.com/user/OmarKmal"
            target="_blank"
          >
            <SochialIcon icon={faRedditAlien} />
          </SochialLinks>
        </FooterWrapper>
      </InfoFooter>
    </InfoBarContainer>
  );
}
export default InfoBar;
