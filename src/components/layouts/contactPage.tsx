import { Box, Grid, Modal, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useIsMobileView } from "../../utils/useIsMobileView.ts";
import { dataProtectionTokens } from "../../textTokens/dataProtectionTokens.ts";

export const ContactPage = ({ scrollToPage }) => {
  const contactPageRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const scrollPageInteView = () => {
    if (contactPageRef !== null && contactPageRef !== undefined) {
      // @ts-ignore
      contactPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { isMobileView } = useIsMobileView();

  useEffect(() => {
    if (scrollToPage) {
      scrollPageInteView();
    }
  }, [scrollToPage]);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "150px",
        backgroundColor: "#000000f0",
        mt: "250px",
        pb: "30px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontSize: "30px",
          textAlign: "center",
          my: "30px",
          pt: "20px",
        }}
      >
        Kapcsolat
      </Typography>
      <Grid
        container
        spacing={1}
        flexDirection={isMobileView ? "column" : "row"}
      >
        <Grid item lg={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <a
              style={{ color: "white", display: "flex", gap: "5px" }}
              color="white"
              href="https://www.facebook.com/profile.php?id=61559647685915"
            >
              <FacebookIcon
                sx={{ ":hover": { color: "blue" }, color: "white" }}
              />
              Facebook
            </a>
          </Box>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              mt: 2,
              fontWeight: "bold",
            }}
          >
            Az esetleges nyomtatási hibákért felelősséget nem vállalunk.
          </Typography>
          <Typography
            onClick={() => setIsModalOpen(true)}
            sx={{
              color: "white",
              textAlign: "center",
              mt: 2,
              textDecoration: "underline",
              cursor: "pointer",
              ":hover": { fontWeight: "bold" },
            }}
          >
            Adatvédelmi tájékoztató
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <MailOutlineIcon sx={{ color: "white" }} />
            <a href="mailto:cleanbalance.hu@gmail.com">
              cleanbalance.hu@gmail.com
            </a>
          </Box>
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <AddIcCallIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>
              Berkes Zsuzsanna
              <br />
              +36-30-712-0014
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              justifyContent: "center",
              [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                my: 4
              }
            }}
          >
            <img
              width={"75px"}
              src={require("../../images/generali-logo.png")}
              alt="logo"
            />
            <Typography sx={{ color: "white" }}>
              {" "}
              Felelősségbiztosítással rendelkezünk.
            </Typography>
          </Box>
        </Grid>
        <Grid ref={contactPageRef} item lg={4}>
          <Typography sx={{ color: "white", textAlign: "center" }}>
            1183 Budapest Kosztolányi Dezső utca
            <br />
            <br /> Külön irodával nem rendelkezünk, mert nem akarjuk annak
            fenntartási költségét áthárítani a vásárlókra.
          </Typography>
        </Grid>
      </Grid>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            backgroundColor: "white",
            width: "80vw",
            height: "70vh",
            m: "auto",
            mt: "10vh",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            p: 5,
            overflowY: "scroll",
            gap: "10px",
            position: "relative",
            [theme.breakpoints.down("md")]: {
              width: "100vw",
              height: "100%",
              mt: 0,
              borderRadius: 0,
            },
          }}
        >
          {dataProtectionTokens.map((item) => (
            <>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Typography>
              {item.sections.map((section) => (
                <>
                  <Typography sx={{ fontWeight: "bold", fontSize: "25px", my: 3 }}>
                    {section.title}
                  </Typography>
                  <Typography>
                    {!!section.description && section.description}
                  </Typography>
                  <Typography>
                    {!!section.descriptionsList?.length &&
                      section.descriptionsList.map((item) => (
                        <Box sx={{ display: "flex" }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            {item.title}
                          </Typography>
                          <Typography>{item.description}</Typography>
                        </Box>
                      ))}
                  </Typography>
                  {!!section.blocks &&
                    section.blocks.map((item) => (
                      <>
                        <Typography sx={{ fontWeight: "bold", my: 3 }}>
                          {item.blockTitle}
                        </Typography>
                        {item.descriptionsList.map((item) => (
                          <Box sx={{ display: "flex" }}>
                            <Typography>{item.title}</Typography>
                            <Typography>{item.description}</Typography>
                          </Box>
                        ))}
                      </>
                    ))}
                </>
              ))}
            </>
          ))}
        </Box>
      </Modal>
    </Box>
  );
};
