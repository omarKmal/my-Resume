import React, { useState, useRef } from "react";
import styled from "styled-components";
import { color } from "../../containers/tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { screenSize } from "../../containers/responsive";
import useOutSideClick from "../../containers/useOusSideClick";

const MenuBarContainer = styled.div`
  position: fixed;
  background-color: ${color.barColor};
  width: ${({ isOpen }) => (isOpen ? "300px" : "80px")};
  max-height: 100%;
  top: 25px;
  bottom: 25px;
  right: 15px;
  /* transform: translate(0%, -50%); */
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  transition: all 0.5s ease-in-out;
  z-index: 888;
  @media (max-width: ${screenSize.changeView}px) {
    width: 300px;
    right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
    top: 0;
    bottom: 0;
  }
`;
const MenuBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const TopSection = styled.div`
  width: 100%;
  height: 70px;
  min-height: 70px;
  background-color: ${color.boxColor};
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? "flex-end" : "center")};
  align-items: center;
  padding-right: ${({ isOpen }) => (isOpen ? "10%" : "0")};
  transition: all 0.5s ease-in-out;
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${color.grayFont};
  transition: all 0.5s ease-in-out;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
const Hello = styled.div`
  color: ${color.grayFont};
  text-transform: uppercase;
  font-weight: 500;
  transform: rotate(90deg);
  transition: all 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding: 40px; */
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.5s ease-in-out;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: ${color.grayFont};
  font-weight: 500;
  padding: 5px 40px;
  transition: all 0.5s ease-in-out;
  margin-bottom: 10px;
  font-size: 20px;
  text-transform: uppercase;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: #fff;
    svg {
      color: #fff;
    }
  }
  }
`;
const OpenList = styled.div`
  width: 100vw;
  background-color: ${color.backColor};
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  pointer-events: ${({ openPortfolio, openBlog }) =>
    openPortfolio || openBlog ? "all" : "none"};
  max-height: ${({ openPortfolio, openBlog }) =>
    openPortfolio || openBlog ? "500px" : "0"};
  opacity: ${({ openPortfolio, openBlog }) =>
    openPortfolio || openBlog ? "1" : "0"};
`;
const IconContainer = styled.div`
  transform: rotate(
    ${({ openPortfolio, openBlog }) =>
      openPortfolio || openBlog ? "90deg" : "0deg"}
  );
  transition: all 0.5s ease-in-out;
`;

function MenuBar({ isOpen, handleOpen, handleClick }) {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);

  const handlePortofolio = (e) => {
    setOpenPortfolio(!openPortfolio);
  };
  const handleBlog = () => {
    setOpenBlog(!openBlog);
  };
  const WrapperRef = useRef(null);
  useOutSideClick(WrapperRef, handleClick);
  return (
    <MenuBarContainer className="menu" ref={WrapperRef} isOpen={isOpen}>
      <MenuBarWrapper>
        <TopSection isOpen={isOpen}>
          <Icon onClick={handleOpen} icon={isOpen ? faTimes : faBars} />
        </TopSection>
        <Hello isOpen={isOpen}>Hello</Hello>
        <ContentSection isOpen={isOpen}>
          <Links to="/">Home</Links>
          <Links to="/" onClick={handlePortofolio}>
            portfolio
            <IconContainer openPortfolio={openPortfolio}>
              <Icon icon={faChevronRight} />
            </IconContainer>
          </Links>
          <OpenList openPortfolio={openPortfolio}>
            <Links to="/portofolio-1">portofolio 1</Links>
            <Links to="/portofolio-2">portofolio 2</Links>
            {/* <Links to="/">portofolio 3</Links> */}
          </OpenList>
          <Links to="/history">history</Links>
          <Links to="/blog" onClick={handleBlog}>
            Blog
            <IconContainer openBlog={openBlog}>
              <Icon icon={faChevronRight} />
            </IconContainer>
          </Links>
          <OpenList openBlog={openBlog}>
            <Links to="/">Blog 1</Links>
            <Links to="/">Blog 2</Links>
            <Links to="/">Blog 3</Links>
          </OpenList>
          <Links to="/contacts">contacts</Links>
          <Links to="/education">education</Links>
        </ContentSection>
      </MenuBarWrapper>
    </MenuBarContainer>
  );
}

export default MenuBar;
