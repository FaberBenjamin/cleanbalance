import {
  Alert,
  Box,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

type TableData = {
  service: string;
  included: boolean;
  isFluidPrice?: boolean;
};

type PricingCardProps = {
  cardPrice: string;
  tableTitle: string;
  tableDescription: string[];
  tableData: [TableData];
};

export const PricingCard = ({
  cardPrice,
  tableTitle,
  tableDescription,
  tableData,
}: PricingCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "20px",
          position: "relative",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
            boxShadow: `5px 5px 5px ${theme.palette.primary.light}`,
          },
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <AttachMoneyIcon
          sx={{
            position: "absolute",
            color: "grey",
            opacity: "0.1",
            fontSize: "100px",
          }}
        />
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ mt: "10px", textAlign: "center" }}
        >
          {tableTitle}
        </Typography>
        <Typography variant="body1" sx={{ mt: "10px" }}>
          {cardPrice}
        </Typography>
        <Typography variant="caption" sx={{ mt: "10px", fontStyle: "italic" }}>
          Részletek
        </Typography>
      </Box>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            backgroundColor: "white",
            width: "80vw",
            height: "80vh",
            m: "auto",
            mt: "10vh",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <IconButton
            aria-label="close"
            onClick={() => setIsModalOpen(false)}
            sx={{
              position: "absolute",
              right: 20,
              top: 10,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h1"
            sx={{
              my: "20px",
              fontSize: "50px",
              [theme.breakpoints.down("md")]: { fontSize: "32px" },
              mt: 5,
              textAlign: "center",
            }}
          >
            {tableTitle}
          </Typography>

          {tableDescription.map((paragraph) => (
            <Typography variant="body1" sx={{ mx: "20px" }}>
              {paragraph}
            </Typography>
          ))}

          {!!tableData.length && (
            <TableContainer
              sx={{
                width: "50%",
                mx: "auto",
                overflow: "visible",
                mt: "20px",
                [theme.breakpoints.down("md")]: { width: "100%" },
              }}
            >
              <Table>
                <TableHead
                  sx={{ backgroundColor: theme.palette.primary.light }}
                >
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Szolgáltalás
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                      {tableTitle} csomag
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {tableData.map((item) => (
                    <TableRow>
                      <TableCell>{item.service}</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.included ? (
                          item.isFluidPrice ? (
                            <Tooltip title={"FELMÉRÉS ALAPJÁN"} placement="top">
                              <InfoIcon color="info" />
                            </Tooltip>
                          ) : (
                            <TaskAltIcon color="success" />
                          )
                        ) : (
                          <CancelIcon color="warning" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Alert sx={{ my: "30px" }} severity="error">
                Éjszaka (22-06 óra között) és vasárnap +30% pótlékot számolunk fel, ünnepnapokon
                +50% pótlékot számolunk fel díjainkra <br /><br />
                <Typography fontWeight="bold">
                  Kedvezményeink nem összevonhatóak
                </Typography>
                <br />
                <Typography >
                 Az első alkalmas/egyszeri megbízások <strong>nem</strong> tartalmazzák: a tisztítószer költségét, a géphasználatot (ha szükséges), a kiszállást (br 3.800 ft / alkalom) és a parkolási díjat.
                </Typography>
              </Alert>
            </TableContainer>
          )}
        </Box>
      </Modal>
    </>
  );
};
