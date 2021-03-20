import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { GlobalHeader, GlobalPara } from "../../containers/Global";
import Marginer from "../../containers/Marginer";
import { screenSize } from "../../containers/responsive";
import { color, fonts } from "../../containers/tools";
import { PriceData, servicesData } from "../../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ServicesContainer = styled.div`
  width: 100%;
  /* height: 700px; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const BoxContainer = styled.div`
  width: calc(95% / ${({ isChangeView }) => (isChangeView ? 2 : 3)});
  min-height: 260px;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  background-color: ${color.boxColor};
  padding: 30px;
  &:not(:nth-of-type(${({ isChangeView }) =>
          isChangeView ? "2n+ 2" : "3n + 3"})) {
    margin-right: 2.5%;
  }
  &:not(:last-of-type) {
    margin-bottom: 2.5%;
  }
  @media (max-width: ${screenSize.mobile}px) {
    width: 100%;
    &:not(:nth-of-type(${({ isChangeView }) =>
            isChangeView ? "2n+ 2" : "3n + 3"})) {
      margin-right: 0;
    }
  }
`;
const OrderNowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  &:hover svg {
    transform: translate(20px, 0px) rotate(90deg);
  }
`;
const OrderNow = styled.span`
  color: ${color.mainColor};
  text-transform: uppercase;
  font-size: ${fonts.smFont};
  margin-right: 2.5%;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 3px rgb(250 250 252 / 40%);
  }
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${color.mainColor};
  font-size: ${fonts.smFont};
  transition: all 0.5s ease-in-out;
`;

const GlobalHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const EBoxConatainer = styled(BoxContainer)`
  width: calc(95% / ${({ isChangeView }) => (isChangeView ? 2 : 3)});
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &:not(:last-of-type) {
    margin-bottom: 2.5%;
  }
  @media (max-width: ${screenSize.mobile}px) {
    width: 100%;
    &:not(:nth-of-type(${({ isChangeView }) =>
            isChangeView ? "2n+ 2" : "3n + 3"})) {
      margin-right: 0;
    }
  }
  &:nth-of-type(2) {
    padding-top: 40px;
    padding-bottom: 40px;
    &:before {
      content: "popular";
      color: #000;
      width: 100%;
      font-weight: 500;
      text-align: center;
      font-size: ${fonts.xsFont};
      position: absolute;
      text-transform: uppercase;
      background-color: ${color.mainColor};

      transform: translate(41%, 80%) rotate(45deg);
      top: 5px;
      right: 5px;
    }
  }
  &:first-of-type {
    &:after {
      content: "* Free only when ordering paid services";
      color: ${color.grayFont};
      font-size: 10px;
      position: absolute;
      bottom: 5px;
    }
  }
`;
const BoxPrice = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const Price = styled.h2`
  color: ${color.mainColor};
  font-size: ${fonts.lgFont};
`;
const PriceIcon = styled(FontAwesomeIcon)`
  color: ${color.mainColor};
  margin-right: 10px;
  width: 100%;
`;
const OPrag = styled(GlobalPara)`
  opacity: 0.5;
`;
const OPIcon = styled(PriceIcon)`
  opacity: 0.5;
`;
const EOrderBox = styled(OrderNowContainer)`
  justify-content: center;
`;
function Services({ isChangeView }) {
  const [SData, SetSData] = useState([]);

  useEffect(() => {
    SetSData(servicesData);
  }, []);

  return (
    <>
      <GlobalHeaderContainer>
        <GlobalHeader>My Services</GlobalHeader>
      </GlobalHeaderContainer>
      <Marginer direction="vertical" margin={40} />
      <ServicesContainer>
        {SData.map((item, index) => (
          <BoxContainer isChangeView={isChangeView} key={index}>
            <GlobalHeader>{item.title}</GlobalHeader>
            <Marginer direction="vertical" margin={30} />
            <GlobalPara>{item.content}</GlobalPara>
            <Marginer direction="vertical" margin={30} />
            <OrderNowContainer>
              <OrderNow>Order now</OrderNow>
              <Icon icon={faChevronRight} />
            </OrderNowContainer>
          </BoxContainer>
        ))}
      </ServicesContainer>
      <Marginer direction="vertical" margin={20} />
      <GlobalHeaderContainer>
        <GlobalHeader>Price Plans</GlobalHeader>
      </GlobalHeaderContainer>
      <Marginer direction="vertical" margin={40} />
      <ServicesContainer>
        {PriceData.map((item, index) => (
          <EBoxConatainer isChangeView={isChangeView} key={index}>
            <GlobalHeader>{item.priceTitle}</GlobalHeader>
            <Marginer direction="vertical" maring={20} />
            <BoxPrice>
              <GlobalPara>$</GlobalPara>
              <Marginer margin={10} />
              <Price>{item.price}</Price>
              <Marginer margin={10} />
              <GlobalPara>hour</GlobalPara>
            </BoxPrice>
            {item.FServ.map((item, index) => (
              <Fragment key={index}>
                <BoxPrice>
                  <PriceIcon icon={faCheck} />
                  <GlobalPara>{item}</GlobalPara>
                </BoxPrice>
                <Marginer direction="vertical" margin={10} />
              </Fragment>
            ))}
            {item.PServ.map((item, index) => (
              <Fragment key={index}>
                <BoxPrice>
                  <OPIcon icon={faTimes} />
                  <OPrag>{item}</OPrag>
                </BoxPrice>
                <Marginer direction="vertical" margin={10} />
              </Fragment>
            ))}
            <Marginer direction="vertical" margin={30} />
            <EOrderBox>
              <OrderNow>Order now</OrderNow>
              <Icon icon={faChevronRight} />
            </EOrderBox>
          </EBoxConatainer>
        ))}
      </ServicesContainer>
    </>
  );
}

export default Services;
