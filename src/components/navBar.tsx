import { Box, Typography, useMediaQuery, useTheme, Theme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HomeTextTokens } from "../textTokens/homeTextTokens.ts";
import MenuIcon from "@mui/icons-material/Menu";

export const NAV_BAR_HEIGHT = 75;

const COMMON_SX = {
  position: "absolute",
  height: "100%",
  borderTopRightRadius: "1050px",
  borderBottomRightRadius: "1050px",
};

export const NavBar = ({ setPageToScroll }) => {
  const theme = useTheme();
  const handleNavAction = (item: string) => {
    setPageToScroll(item);
  };
  const isMobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: `${NAV_BAR_HEIGHT}px`,
        position: "sticky",
        zIndex: 1000,
        top: 0,
      }}
    >
      <Box sx={{ position: "relative", display: "flex", height: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "white",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            borderTopRightRadius: "1050px",
            borderBottomRightRadius: "1050px",
            zIndex: 5,
          }}
        >
          <Typography>
            <img
              width={"75px"}
              src={require("../images/clean-balance.jpg")}
              alt="logo"
            />
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "lightgray",
            width: "175px",
            zIndex: 4,
            ...COMMON_SX,
          }}
        />
        <Box
          sx={{
            backgroundColor: "gray",
            width: "200px",
            zIndex: 3,
            ...COMMON_SX,
          }}
        />
      </Box>
      {!isMobileView ? (
        <Box sx={{ display: "flex", gap: "20px", mr: "20px" }}>
          {HomeTextTokens[0].navbar.map((item) => (
            <Typography
              variant="h2"
              sx={{
                color: "white",
                ":hover": { fontWeight: "bold", cursor: "pointer" },
              }}
              onClick={() => {
                handleNavAction(item);
                setIsNavMenuOpen(false);
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      ) : (
        <MenuIcon
          sx={{ color: "white", position: "absolute", right: 20, zIndex: 5000 }}
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
        />
      )}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          opacity: 0.9,
          display: isNavMenuOpen ? "flex" : "none",
          position: "absolute",
          zIndex: 4999,
          justifyContent: "center",
          top: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            p: "20px",
          }}
        >
          {HomeTextTokens[0].navbar.map((item) => (
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textAlign: "center",
                ":hover": { fontWeight: "bold", cursor: "pointer" },
              }}
              onClick={() => handleNavAction(item)}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
