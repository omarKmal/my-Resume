import React, { useState, useEffect } from "react";
import InfoBar from "../components/InfoBar/InfoBar";
import GlobalStyle from "./Global";
import { Data } from "../Data";
import MenuBar from "../components/MenuBar/MenuBar";
import Hero from "../components/Hero/Hero";
import PageContainer, { WrapperContainer } from "./PageContainer";
import Marginer from "./Marginer";
import Services from "../components/Services/Services";
import { useMediaQuery } from "react-responsive";
import { screenSize } from "./responsive";
import NavBar from "../components/NavBar/NavBar";
import Recommendations from "../components/Recommendations/Recommendations";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";
import { Route } from "react-router";
import Portofolio from "../components/Portofolio/Portofolio";

function Home() {
  const [progressData, setProgressData] = useState([]);
  const [lodaing, setLodaing] = useState(true);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoOpen, setInfoOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: `${screenSize.mobile}px` });
  const isTablet = useMediaQuery({
    minWidth: `${screenSize.mobile}px`,
    maxWidth: `${screenSize.tablet}px`,
  });
  const isLaptop = useMediaQuery({
    minWidth: `${screenSize.laptop}px`,
    maxWidth: `${screenSize.desktop}px`,
  });
  const isDesktop = useMediaQuery({ minWidth: `${screenSize.desktop}px` });
  const isChangeView = useMediaQuery({
    maxWidth: `${screenSize.changeView}px`,
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleInfoOpen = () => {
    setInfoOpen(!isInfoOpen);
  };

  const handleClick = (e) => {
    if (e.current.classList.contains("menu")) {
      setIsOpen(false);
    } else {
      setInfoOpen(false);
    }
  };

  useEffect(() => {
    setProgressData(Data[0].progress);
    setLodaing(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      {isChangeView && (
        <NavBar
          handleInfoOpen={handleInfoOpen}
          handleOpen={handleOpen}
          isOpen={isOpen}
        />
      )}
      <InfoBar
        isChangeView={isChangeView}
        progressData={progressData}
        lodaing={lodaing}
        error={error}
        isInfoOpen={isInfoOpen}
        handleInfoOpen={handleInfoOpen}
        handleClick={handleClick}
      />
      <MenuBar
        handleClick={handleClick}
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
      <PageContainer isOpen={isOpen}>
        <Hero
          isDesktop={isDesktop}
          isOpen={isOpen}
          isChangeView={isChangeView}
        />
        <Marginer direction="vertical" margin={40} />
        <WrapperContainer>
          <Services isChangeView={isChangeView} />
          <Recommendations />
          <Brands />
          <Marginer direction="vertical" margin={40} />
          <Footer />
          <Marginer direction="vertical" margin={20} />
        </WrapperContainer>
      </PageContainer>
      {/* <Route
        path="/portofolio-1"
        render={() => <Portofolio handleClick={handleClick} />}
      /> */}
    </>
  );
}

export default Home;
