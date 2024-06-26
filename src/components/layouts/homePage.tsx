import { Box, Paper, Theme, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { NAV_BAR_HEIGHT } from "../navBar.tsx";

const CAROUSEL_SX = (isMobileView) => {
  return isMobileView
    ? { width: "95%", height: "300px" }
    : { width: "65vw", height: "540px" };
};

export const HomePage = ({ scrollToPage }) => {

  const isMobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const homePageRef = useRef(null);
  const scrollPageInteView = () => {
    if (homePageRef !== null && homePageRef !== undefined) {
      // @ts-ignore
      homePageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const carouselImages = [
    require("../../images/clean-balance.jpg"),
    require("../../images/homePage/csapatkep.jpg"),
    require("../../images/homePage/csap.jpg"),
    require("../../images/homePage/csap2.jpg"),
    require("../../images/homePage/parkany.jpg"),
  ];

  useEffect(() => {
    if (scrollToPage) {
      scrollPageInteView();
    }
  }, [scrollToPage]);

  const  getBackgroundPosition = (index) => {
    if (index === 0 && isMobileView) {
      return "50%"
    }
  return index === 1 ? "25%" : ""
  }

  const getBackgroundSize = (index) => {

    if (isMobileView && index === 0) {
      return "100%"
    }
    if (index === 0) {
      return "50%"
    }

    if (index === 1 && !isMobileView) {
      return "75%"
    }

    return "cover"
  }

  return (
    <>
      <Box sx={{ mt: `${NAV_BAR_HEIGHT}px` }} ref={homePageRef}>
        <Carousel>
          {carouselImages.map((item, index) =>{

          return (
            <>
              <Paper
                sx={{
                  position: "relative",
                  backgroundImage: `url(${item})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: getBackgroundSize(index),
                  backgroundPositionX: "50%",
                  backgroundPositionY: getBackgroundPosition(index),
                  mx: "auto",
                  opacity: index === 0 ? 0.5 : 1,
                  ...CAROUSEL_SX(isMobileView),
                }}
              />
              {index === 0 && (
                <Typography
                  variant={isMobileView ? "h1": "h2"}
                  position="absolute"
                  top={0}
                  bottom={0}
                  right={50}
                  left={50}
                  textAlign="center"
                  fontSize={isMobileView ? "3rem" : '110px'}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  Üdvözlünk
                </Typography>
              )}
            </>
          );})}
        </Carousel>
      </Box>
    </>
  );
};
