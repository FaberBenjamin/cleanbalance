import {
  Box,
  Grid,
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { PageTitle } from "../pageTitle.tsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useIsMobileView } from "../../utils/useIsMobileView.ts";
// import {példa} from "../../images/galeryImages/Példa.jpg"

export const GaleryPage = ({ scrollToPage }) => {
  const [isModalOpen, setIsModalOpen] = useState({ open: false, imgSrc: "" });
  const galeryPageRef = useRef(null);
  const scrollPageInteView = () => {
    if (galeryPageRef !== null && galeryPageRef !== undefined) {
      // @ts-ignore
      galeryPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pictureFileLinks: string[] = [
    require("../../images/galeryImages/ajto.jpg"),
    require("../../images/galeryImages/felfa.jpg"),
    require("../../images/galeryImages/kapcsolo.jpg"),
    require("../../images/galeryImages/ajto-teljes.jpg"),
    require("../../images/galeryImages/parkany.jpg"),
    require("../../images/galeryImages/csap-vizko.jpg"),
    require("../../images/galeryImages/kilincs.jpg"),
    require("../../images/galeryImages/redony-parkany.jpg"),
    require("../../images/galeryImages/mosdokagylo.jpg"),
    require("../../images/galeryImages/wc.jpg"),
    require("../../images/galeryImages/gozoles.jpg"),
  ];

  const { isMobileView } = useIsMobileView();

  useEffect(() => {
    if (scrollToPage) {
      scrollPageInteView();
    }
  }, [scrollToPage]);
  return (
    <>
      <PageTitle title={"Galéria"} linePosition={150} />

      <Box
        sx={{
          width: "100vw",
          maxHeight: "95vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          overflowY: "scroll",
        }}
        ref={galeryPageRef}
      >
        <Box
          sx={{
            maxHeight: "95%",
            width: "95%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Accordion defaultExpanded={isMobileView ? false : true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h2" fontSize="20px">Képek megtekintése</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                {pictureFileLinks.map((link) => (
                  <Grid
                    item
                    lg={4}
                    xs={6}
                    sx={{
                      ":hover": { transform: "scale(1.1)", cursor: "pointer" },
                    }}
                    onClick={() =>
                      setIsModalOpen({
                        open: true,
                        imgSrc: link,
                      })
                    }
                  >
                    <img width="100%" src={link} alt="" />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={isModalOpen.open}
        onClose={() => {
          setIsModalOpen({ open: false, imgSrc: "" });
        }}
      >
        <img
          alt=""
          style={{
            margin: "auto",
            maxHeight: "80vh",
            maxWidth: "90vw",
            aspectRatio: "auto",
            border: "4px solid white",
          }}
          src={isModalOpen.imgSrc}
        />
      </Modal>
    </>
  );
};
