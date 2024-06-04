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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

type TableData = {
  service: string;
  additionalInfo?: string;
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

  const getMaterialCost = (service: string) => {
    switch (service) {
      case "Általános takarítás":
        return (
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                Tisztítószerek megtekintése
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  1 db általános felület és padlótisztító folyadék
                </ListItem>
                <ListItem>1 db hideg zsíroldó</ListItem>
                <ListItem>1 db vízkőoldó</ListItem>

                <ListItem>1 db WC tisztító folyadék</ListItem>

                <ListItem>1 db papírtörlő</ListItem>
                <ListItem>2 db törlőkendő</ListItem>
                <ListItem>2 db mosogatószivacs</ListItem>
                <ListItem>szemeteszsák</ListItem>
              </List>
              <Typography>
                A csomag ára bruttó 5000Ft (az ár tájékoztató jellegü, a csomag
                árváltozás jogát fenntartjuk!)
              </Typography>
              <Typography>
                A csomag ára változhat 100m^2 feletti terület esetén a szükséges
                mennyiségtől függően és a terület nagyságától!
              </Typography>
              <Typography>
                Tisztítószer csomag abban az esetben szükséges, ha nem áll
                rendelkezésre Önnek, a megmaradt szereket otthagyjuk.
              </Typography>
              <Typography fontWeight="bold" sx={{ mt: 2 }}>
                Tisztítószereket megbeszélés alapján is ki lehet választani,
                miket használjunk ( környezetkímélő-bio, márka, stb.)
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      case "Nagytakarítás":
        return (
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                Tisztítószerek megtekintése
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  1 db általános felület és padlótisztító folyadék
                </ListItem>
                <ListItem>1 db üvegtisztító folyadék</ListItem>
                <ListItem>1 db bútor ápolószer</ListItem>

                <ListItem>1 db hideg zsíroldó</ListItem>
                <ListItem>1 db vízkőoldó</ListItem>

                <ListItem>1 db WC tisztító folyadék</ListItem>

                <ListItem>2-3 db papírtörlő</ListItem>
                <ListItem>4 db törlőkendő</ListItem>
                <ListItem>2 db mosogatószivacs</ListItem>
                <ListItem>szemeteszsák</ListItem>
              </List>
              <Typography>
                A csomag ára bruttó 8000Ft (az ár tájékoztató jellegü, a csomag
                árváltozás jogát fenntartjuk!)
              </Typography>
              <Typography>
                A csomag ára változhat 100m^2 feletti terület esetén a szükséges
                mennyiségtől függően és a terület nagyságától!
              </Typography>
              <Typography>
                Tisztítószer csomag abban az esetben szükséges, ha nem áll
                rendelkezésre Önnek, a megmaradt szereket otthagyjuk.
              </Typography>
              <Typography fontWeight="bold" sx={{ mt: 2 }}>
                Tisztítószereket megbeszélés alapján is ki lehet választani,
                miket használjunk ( környezetkímélő-bio, márka, stb.)
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      case "Extrém nagytakarítás":
        return (
          <Typography sx={{ mt: 3 }}>
            A tisztítószerek ára extrém takarítás esetében egyedi megbeszélés és
            számítás, a felmerülő tisztítószerek/eszközök szükségességéről,
            mennyiségéről és a terület nagysága alapján.
          </Typography>
        );
      case "Felújítás utáni nagytakarítás":
        return (
          <Typography sx={{ mt: 3 }}>
            A tisztítószerek ára felújítás utána nagytakarítás esetében egyedi
            megbeszélés és számítás, a felmerülő tisztítószerek/eszközök
            szükségességéről, mennyiségéről és a terület nagysága alapján.
          </Typography>
        );
      case "Szőnyegtisztítás":
        return (
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                Tisztítószerek megtekintése
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>Szőnyegtisztító szer </ListItem>
              </List>
              <Typography>
                A csomag ára bruttó 2000Ft (az ár tájékoztató jellegü, a csomag
                árváltozás jogát fenntartjuk!)
              </Typography>
              <Typography>
                A csomag ára változhat 100m^2 feletti terület esetén a szükséges
                mennyiségtől függően és a terület nagyságától!
              </Typography>
              <Typography>
                Tisztítószer csomag abban az esetben szükséges, ha nem áll
                rendelkezésre Önnek, a megmaradt szereket otthagyjuk.
              </Typography>
              <Typography fontWeight="bold" sx={{ mt: 2 }}>
                Tisztítószereket megbeszélés alapján is ki lehet választani,
                miket használjunk ( környezetkímélő-bio, márka, stb.)
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
        case "Gépi gőztisztítás":
        return (
          <Accordion
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                Tisztítószerek megtekintése
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>Desztillált víz</ListItem>
              </List>
              <Typography>
                A csomag ára bruttó 1000Ft (az ár tájékoztató jellegü, a csomag
                árváltozás jogát fenntartjuk!)
              </Typography>
              <Typography>
                A csomag ára változhat 100m^2 feletti terület esetén a szükséges
                mennyiségtől függően és a terület nagyságától!
              </Typography>
              <Typography>
                Tisztítószer csomag abban az esetben szükséges, ha nem áll
                rendelkezésre Önnek, a megmaradt szereket otthagyjuk.
              </Typography>
              <Typography fontWeight="bold" sx={{ mt: 2 }}>
                Tisztítószereket megbeszélés alapján is ki lehet választani,
                miket használjunk ( környezetkímélő-bio, márka, stb.)
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      default:
        break;
    }
  };

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
                      <TableCell>
                        {item.service}
                        {item.additionalInfo && (
                          <Typography fontSize="12px" fontStyle="italic">
                            {item.additionalInfo}
                          </Typography>
                        )}
                      </TableCell>
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
                Éjszaka (22-06 óra között) és vasárnap +30% pótlékot számolunk
                fel, ünnepnapokon +50% pótlékot számolunk fel díjainkra <br />
                <br />
                <Typography fontWeight="bold">
                  Kedvezményeink nem összevonhatóak
                </Typography>
                <br />
                <Typography>
                  A megbízások <strong>nem</strong>{" "}
                  tartalmazzák: a tisztítószer költségét, a géphasználatot (ha
                  szükséges), a kiszállást (br 3.800 ft / alkalom) és a
                  parkolási díjat.
                </Typography>
                {getMaterialCost(tableTitle)}
              </Alert>
            </TableContainer>
          )}
        </Box>
      </Modal>
    </>
  );
};
