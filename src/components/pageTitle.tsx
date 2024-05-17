import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export const PageTitle = ({ title, linePosition }) => {
    const theme = useTheme()
    return (
    <Box sx={{my: "50px", display: "flex", justifyContent: "center"}}>
  <Box sx={{  position: "relative" }}>
    <Typography variant="h1">
      {title}
    </Typography>
    <Box
      sx={{
        width: "100px",
        height: "10px",
        backgroundColor: theme.palette.primary.main,
        position: "absolute",
        left: linePosition
      }}
    />
  </Box>
  </Box>
)};
