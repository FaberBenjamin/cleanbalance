import { useTheme } from "@emotion/react";
import { Theme, useMediaQuery } from "@mui/material";

export const useIsMobileView = () => {
    // const theme = useTheme()
    const isMobileView = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("sm")
      );
    return {isMobileView}
}