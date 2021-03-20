import React from "react";
import styled from "styled-components";
import { screenSize } from "./responsive";

const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: ${({ isOpen }) => (isOpen ? "20px" : "330px")};
  padding-right: ${({ isOpen }) => (isOpen ? "330px" : "110px")};
  padding-top: 25px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  @media (max-width: ${screenSize.changeView}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

function PageContainer({ isOpen, children }) {
  return <PageWrapper isOpen={isOpen}>{children}</PageWrapper>;
}

export const WrapperContainer = styled.div`
  width: 95%;
`;

export default PageContainer;
