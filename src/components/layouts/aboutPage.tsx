import { Box, Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { AboutCard } from "../pricing/aboutCard.tsx";
import { AboutTextTokens } from "../../textTokens/aboutTextTokens.ts";
import { PageTitle } from "../pageTitle.tsx";

export const AboutPage = ({scrollToPage}) => {
  const theme = useTheme()
  const isMobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const aboutPageRef = useRef(null)
  const scrollPageInteView = () => {
    if (aboutPageRef !== null && aboutPageRef !== undefined) {
      // @ts-ignore
      aboutPageRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  };

  useEffect(() => {
    if (scrollToPage) {
      scrollPageInteView()
    }
   }, [scrollToPage])
  return (
    <Box
      sx={{
        width: "95vw",
        mx: "auto",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "15px",
        pb: "5vh",
      }}
      ref={aboutPageRef}
    >
      <PageTitle linePosition={-50} title={AboutTextTokens[0].title} />
      <Typography sx={{ fontSize: isMobileView ? "18px" : "30px", textAlign: "center", px: "5px" }}>
        {AboutTextTokens[0].subTitle}<br /><br />{AboutTextTokens[0].subTitle2}
      </Typography>
      <Grid container spacing={2} sx={{[theme.breakpoints.down('md')]: {justifyContent: "center"}  }} >
        
        {AboutTextTokens[0].aboutCard.map((text, index) => (
          <Grid item lg={3} >
          <AboutCard
            cardText={text}
            cardIndex={index}
            iconOrientation={isMobileView ? "top" : index % 2 ? "top" : "down"}
          />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
