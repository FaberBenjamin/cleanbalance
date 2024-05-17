import { Box, Typography, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import DiamondIcon from "@mui/icons-material/Diamond";
import FactoryIcon from "@mui/icons-material/Factory";
import React from "react";

type AboutCardProps = {
  cardText: string;
  iconOrientation: "top" | "down";
  cardIndex: number;
};

export const AboutCard = ({
  cardText,
  iconOrientation,
  cardIndex,
}: AboutCardProps) => {
  const theme = useTheme();

  const getBackgroundIcon = () => {
    const ICON_SIZE = "65px";
    switch (cardIndex) {
      case 0:
        return <FavoriteIcon sx={{ fontSize: ICON_SIZE, color: "red" }} />;

      case 1:
        return <HomeIcon sx={{ fontSize: ICON_SIZE, color: "brown" }} />;

      case 2:
        return <DiamondIcon sx={{ fontSize: ICON_SIZE, color: "aqua" }} />;

      case 3:
        return <FactoryIcon sx={{ fontSize: ICON_SIZE }} />;

      default:
        return <FavoriteIcon sx={{ fontSize: ICON_SIZE, color: "red" }} />;
    }
  };

  return (
    <Box
      sx={{
        width: "300px",
        // @ts-ignore
        height: "300px",
        backgroundColor: theme.palette.primary.light,
        m: "auto",
        mt: "100px",
        position: "relative",
        ":hover": {
          transform: "scale(1.1, 1.1)",
        },
      }}
    >
      <Box
        sx={{
          width: "290px",
          height: "300px",
          backgroundColor: theme.palette.primary.main,
          position: "absolute",
          bottom: -10,
          right: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: "50px",
            color: "white",
            textAlign: "center",
            mx: "10px",
          }}
        >
          {cardText}
        </Typography>
        <Box
          sx={{
            width: "75px",
            height: "75px",
            backgroundColor: "white",
            borderRadius: "50%",
            position: "absolute",
            top: iconOrientation === "top" ? -50 : "85%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {getBackgroundIcon()}
        </Box>
      </Box>
    </Box>
  );
};
