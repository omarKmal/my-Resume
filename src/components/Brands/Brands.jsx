import React from "react";
import styled from "styled-components";
import imgOne from "../../images/brand-1-232x256 (1).png";
import imgTwo from "../../images/brand-2-229x256.png";
import imgThree from "../../images/brand-3-228x256.png";
import { screenSize } from "../../containers/responsive";
const BrandsContainer = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${screenSize.mobile}px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 150px;
  height: 150px;

  img {
    max-width: 100%;
    max-height: 100%;
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;

function Brands() {
  return (
    <BrandsContainer>
      <ImgContainer>
        <img src={imgOne} alt="bone" />
      </ImgContainer>
      <ImgContainer>
        <img src={imgTwo} alt="btwo" />
      </ImgContainer>
      <ImgContainer>
        <img src={imgThree} alt="bthree" />
      </ImgContainer>
      <ImgContainer>
        <img src={imgOne} alt="bone" />
      </ImgContainer>
    </BrandsContainer>
  );
}

export default Brands;
