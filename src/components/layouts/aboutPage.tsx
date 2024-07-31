import {
  Box,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { AboutCard } from "../pricing/aboutCard.tsx";
import { AboutTextTokens } from "../../textTokens/aboutTextTokens.ts";
import { PageTitle } from "../pageTitle.tsx";

export const AboutPage = ({ scrollToPage }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const aboutPageRef = useRef(null);
  const scrollPageInteView = () => {
    if (aboutPageRef !== null && aboutPageRef !== undefined) {
      // @ts-ignore
      aboutPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (scrollToPage) {
      scrollPageInteView();
    }
  }, [scrollToPage]);
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
      <Box
        sx={{
          fontSize: isMobileView ? "18px" : "30px",
          px: isMobileView ? "15px" : "35px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          fontWeight="23px"
          variant="h2"
          fontSize="35px"
          sx={{ textAlign: "center", mb: "35px" }}
        >
          Üdvözöljük a Clean Balance-nál
        </Typography>
        <Typography fontSize={isMobileView ? "16px" : "20px"}>
          Engedje meg, hogy bemutassuk a Clean Balance-t, családi takarító
          vállalkozásunkat. Célunk, hogy az otthonok és munkahelyek tisztaságát
          biztosítsuk, és hozzájáruljunk a családok és vállalkozások
          nyugalmához. Komplex takarítási szolgáltatásainkkal álunk
          rendelkezésére napi, heti, havi, általános vagy akár nagytakarításról
          legyen szó.
        </Typography>
        <Typography
          fontWeight="23px"
          variant="h2"
          fontSize="35px"
          sx={{ textAlign: "center", mb: "35px" }}
        >
          Szolgáltatásaink
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "70%",
            justifyContent: "center",
            margin: "auto",
            backgroundColor: "white",
            p: "30px",
            borderRadius: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Általános takarítás:{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              Napi vagy heti takarítási szolgáltatásaink segítenek fenntartani
              otthona vagy irodája tisztaságát.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Nagytakarítás:{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              Alapos és részletes nagytakarítás, amely magában foglalja az olyan
              területek tisztítását, amelyeket a mindennapi takarítás során
              gyakran kihagynak.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Felújítás utáni takarítás:{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              Ha felújítás után szüksége van a por- és törmelékmaradványoktól
              mentes környezetre, mi gyorsan és alaposan megoldjuk.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Festés utáni takarítás:{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              A festés után maradt foltok és szennyeződések eltüntetése, hogy
              otthona azonnal lakható legyen.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Szőnyegtisztítás és Gépi gőztisztítás{" "}
            </Typography>
            <Typography></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Irodaházak{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              napi takarítása és nagytakarítása.
            </Typography>
          </Box>
        </Box>
        <Typography variant="h2" fontSize="25px" sx={{ mt: "35px" }}>
          Személyre szabott takarítási szolgáltatások
        </Typography>
        <Typography
          fontSize={isMobileView ? "16px" : "20px"}
          sx={{ mb: "35px" }}
        >
          Az elmúlt években cégeknél szerzett tapasztalatunkat most a Clean
          Balance-nál kamatoztatjuk. Büszkék vagyunk arra, hogy családi
          vállalkozásként működünk, és minden ügyféllel személyes kapcsolatot
          építünk ki. Legyen szó általános takarításról, nagytakarításról, vagy
          felújítás utáni takarításról, biztosak vagyunk benne, hogy megtalálja
          nálunk az ideális takarítási megoldást.
        </Typography>

        <Typography
          fontWeight="bold"
          variant="h2"
          fontSize="35px"
          sx={{ mb: "35px", textAlign: "center" }}
        >
          Miért válassza a Clean Balance-t?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "70%",
            justifyContent: "center",
            margin: "auto",
            backgroundColor: "white",
            p: "30px",
            borderRadius: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Személyre szabott szolgáltatás:{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              Minden ügyfelünkkel egyedi igényeiknek megfelelően dolgozunk. Akár
              napi, heti, vagy alkalmi takarításra van szüksége, rugalmasan
              alkalmazkodunk az Ön időbeosztásához és elvárásaihoz.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Tapasztalat és szakértelem:{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              Multinacionális cégeknél szerzett tapasztalatunkat most a családi
              vállalkozásunkban kamatoztatjuk. Tudjuk, hogyan kell hatékonyan és
              alaposan dolgozni.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBottom: "2px solid gray",
              pb: "5px",
            }}
          >
            <Typography variant="h2" fontSize="20px">
              Megbízhatóság és elkötelezettség:{" "}
            </Typography>
            <Typography fontSize={isMobileView ? "16px" : "20px"}>
              Büszkék vagyunk arra, hogy megbízhatóak vagyunk, és minden
              ügyféllel hosszú távú, személyes kapcsolatot építünk ki.
            </Typography>
          </Box>
        </Box>

        <Typography
          fontWeight="bold"
          variant="h2"
          fontSize="25px"
          sx={{ mt: "35px" }}
        >
          Takarítási szolgáltatások vállalkozásoknak
        </Typography>
        <Typography fontSize={isMobileView ? "16px" : "20px"}>
          A Clean Balance nemcsak otthonok, hanem irodák és vállalkozások
          számára is kínál takarítási szolgáltatásokat. Kiemelt figyelmet
          fordítunk az irodatakarításra, hogy Ön és munkatársai tiszta és
          rendezett környezetben dolgozhassanak.
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h2"
          fontSize="25px"
          sx={{ mt: "35px" }}
        >
          Árajánlat és Kapcsolat
        </Typography>
        <Typography fontSize={isMobileView ? "16px" : "20px"}>
          Vegye fel velünk a kapcsolatot most, és kérjen egyedi árajánlatot
          takarítási szolgáltatásainkra! Örömmel válaszolunk minden kérdésére,
          és segítünk kiválasztani a legmegfelelőbb takarítási megoldást az Ön
          számára.
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ [theme.breakpoints.down("md")]: { justifyContent: "center" } }}
      >
        {AboutTextTokens[0].aboutCard.map((text, index) => (
          <Grid item lg={3}>
            <AboutCard
              cardText={text}
              cardIndex={index}
              iconOrientation={
                isMobileView ? "top" : index % 2 ? "top" : "down"
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
