import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useIsMobileView } from "../../utils/useIsMobileView.ts";

export const ContactPage = ({scrollToPage}) => {
  const contactPageRef = useRef(null)
  const scrollPageInteView = () => {
    if (contactPageRef !== null && contactPageRef !== undefined) {
      // @ts-ignore
      contactPageRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  };

  const {isMobileView} = useIsMobileView()

  useEffect(() => {
    if (scrollToPage) {
      scrollPageInteView()
    }
   }, [scrollToPage])
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "150px",
        backgroundColor: "#000000f0",
        mt: "250px",
        pb: "30px"
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "white", fontSize: "30px", textAlign: "center", my: "30px", pt: "20px" }}
      >
        Kapcsolat
      </Typography>
      <Grid container spacing={1} flexDirection={isMobileView ? 'column' : 'row'}>
        <Grid item lg={4}>
          <Box sx={{ display: "flex",  justifyContent: "center" }} >
          <a style={{color: "white", display: "flex", gap: "5px"}} color="white"  href="https://www.facebook.com/profile.php?id=61559647685915">
            <FacebookIcon sx={{ ":hover": {color: "blue"}, color: "white" }} />
            Facebook</a>
          </Box>
          <Typography sx={{ color: "white", textAlign: "center", mt: 2, fontWeight: 'bold' }}>Az esetleges nyomtatási hibákért felelősséget nem vállalunk.</Typography>
        </Grid>
        <Grid item lg={4}>
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                <MailOutlineIcon sx={{ color: "white" }} />
          <a href="mailto:cleanbalance.hu@gmail.com">cleanbalance.hu@gmail.com</a>
          </Box>
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <AddIcCallIcon sx={{ color: "white" }} /> 
            <Typography sx={{ color: "white" }}>Berkes Zsuzsanna<br />+36-30-712-0014</Typography>
          </Box>
        </Grid >
        <Grid ref={contactPageRef} item lg={4}><Typography sx={{ color: "white", textAlign: "center" }}>1183 Budapest, Kosztolányi Dezső utca 1 <br /><br /> Külön irodával nem rendelkezünk, mert nem akarjuk annak fenntartási költségét áthárítani a vásárlókra.</Typography></Grid>
      </Grid>
    </Box >
  );
};
