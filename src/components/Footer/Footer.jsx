import React from "react";
import styled from "styled-components";
import { GlobalPara } from "../../containers/Global";
import { screenSize } from "../../containers/responsive";
import { color } from "../../containers/tools";

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${color.boxColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  @media (max-width: ${screenSize.mobile}px) {
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }
`;
const Email = styled.a`
  color: ${color.grayFont};
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <GlobalPara>&copy; 2021 All Rights Reserved.</GlobalPara>
      <GlobalPara>
        Email:
        <Email href="mailto:‪omrkmal2828@gmail.com">
          omrkmal2828@gmail.com
        </Email>
      </GlobalPara>
    </FooterContainer>
  );
}

export default Footer;
