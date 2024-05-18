import { Alert, Box, Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { PricingCard } from "../pricing/pricingCard.tsx";
import { PriceTextTokens } from "../../textTokens/priceTextTokens.ts";
import { PageTitle } from "../pageTitle.tsx";

export const PricePage = ({scrollToPage}) => {
  const theme = useTheme();

  const pricesRef = useRef(null);
  const scrollPageInteView = () => {
    if (pricesRef !== null && pricesRef !== undefined) {
      // @ts-ignore
      pricesRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  };

  const isMobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

 useEffect(() => {
  if (scrollToPage) {
    scrollPageInteView()
  }
 }, [scrollToPage])

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
            <Grid item xs={12} md={4} lg={2} >
              <PricingCard
                tableTitle={item.tableTitle}
                tableDescription={item.tableDescription || ""}
                tableData={item.tableData || []}
                cardPrice={item.cardPrice}
              />
            </Grid>
          ))}
        </Grid>
        <Alert sx={{ my: "30px" }} severity="info">
          Áraink forintban értendőek és az ÁFÁ-t tartalmazzák. Folyamatos
          megbízásnál kedvezményes áron dolgozunk (m^2 árakon számlázunk)*.
          <br /> <strong>XVIII.kerületi kártya</strong> magánszemélyek esetén felhasználható <strong>10%
          kedvezmény</strong>re.
          <br />
          <strong>Nyugdíjasoknak 10% kedvezmény</strong>t biztosítunk.{" "}
          <br />
          <br />
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>* napi, heti, havi rendszerességgel egyedi árajánlat az alábbi termékekre:</Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>Általános takarítás (napi, heti rendszerességgel): br. 250ft - 450ft / m^2</Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>Nagytakarítás (havi, kéthavi rendszerességgel): br. 510ft - 640ft / m^2</Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "14px" }}>A folyamatos megbízás tartalmazza a tisztítószer-költséget, a kiszállási díjat, illetve a géphasználati díjat. A parkolási díjat viszont <strong>nem</strong> tartalmazza!</Typography>
        </Alert>
      </Box>
    </Box>
  );
};
