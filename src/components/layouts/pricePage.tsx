import {
  Alert,
  Box,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { PricingCard } from "../pricing/pricingCard.tsx";
import { PriceTextTokens } from "../../textTokens/priceTextTokens.ts";
import { PageTitle } from "../pageTitle.tsx";

export const PricePage = ({ scrollToPage }) => {
  const theme = useTheme();

  const pricesRef = useRef(null);
  const scrollPageInteView = () => {
    if (pricesRef !== null && pricesRef !== undefined) {
      // @ts-ignore
      pricesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  useEffect(() => {
    if (scrollToPage) {
      scrollPageInteView();
    }
  }, [scrollToPage]);

  return (
    <Box
      ref={pricesRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        mt: "50px",
      }}
    >
      <PageTitle title={"Áraink"} linePosition={200} />
      <Box sx={{ width: "90%" }}>
        <Grid container spacing={2}>
          {PriceTextTokens.map((item) => (
            <Grid item xs={12} md={4} lg={2}>
              <PricingCard
                tableTitle={item.tableTitle}
                tableDescription={item.tableDescription || ""}
                tableData={item.tableData || []}
                cardPrice={item.cardPrice}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ width: "100%", my: 4 }}>
          <Typography textAlign="center" fontSize="20px">
            Tisztaság, minőség, kedvező árak! Cégünk takarító szolgáltatásai
            minden igényt kielégítenek. Minél nagyobb területet kell
            tisztítanunk és minél sűrűbb a megrendelés, annál jobb árat tudunk
            biztosítani.
          </Typography>
          <Typography
            fontWeight="bold"
            textAlign="center"
            variant="h2"
            sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 0.5, [theme.breakpoints.down("md")]: {
              display: "flex", flexDirection: "column"
            } }}
          >
            Kérjen egyedi, kedvezményes, személyre szabott árajánlatot bármelyik
            <Typography
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              variant="h2"
              sx={{
                textDecoration: "underline",
                ":hover": { color: "blue", cursor: "pointer" },
              }}
            >
              {" "}
              elérhetőségünkön
            </Typography>
            !
          </Typography>
        </Box>
        <Alert sx={{ my: "30px" }} severity="info">
          Áraink forintban értendőek és az ÁFÁ-t tartalmazzák.
          <br /> Folyamatos megbízásnál kedvezményes áron dolgozunk (m^2 árakon
          számlázunk)*.
          <br /> <strong>18. kerületi Város kártya</strong> magánszemélyek
          esetén felhasználható <strong>10% kedvezmény</strong>re.
          <br />
          <strong>Nyugdíjasoknak 10% kedvezmény</strong>t biztosítunk. <br />A
          kedvezmények <strong>nem</strong> összevonhatóak!
          <br />
          <br />
          Az árváltozás jogát fenntartjuk. Az áraink bruttó árak és tájékoztató
          jellegűek. Az árak Budapest területén belülre érvényesek.
          <br />
          <br />
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>
            * napi, heti, havi rendszerességgel egyedi árajánlat az alábbi
            termékekre:
          </Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>
            Általános takarítás (napi, heti rendszerességgel. Pl.: Átalános
            takarítás heti 1 vagy több alkalom.)
          </Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>
            Nagytakarítás (havi, kéthavi rendszerességgel. Pl.: Nagytakarítás
            folyamatos általános takarítás mellet 3 havonta 1 alkalom.)
          </Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>
            Áraink folyamatos megbízás esetén <strong>sem tartalmazzák</strong>{" "}
            a parkolási díjat! (pl.: belváros esetén)
          </Typography>
        </Alert>
      </Box>
    </Box>
  );
};
