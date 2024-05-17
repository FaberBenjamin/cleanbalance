import './App.css';
import { AboutPage } from './components/layouts/aboutPage.tsx';
import { GaleryPage } from './components/layouts/galeryPage.tsx';
import { HomePage } from './components/layouts/homePage.tsx';
import { PricePage } from './components/layouts/pricePage.tsx';
import { ContactPage } from './components/layouts/contactPage.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { NavBar } from './components/navBar.tsx';
import { useRef, useState } from 'react';

function App() {

  const [pageToScroll, setPageToScroll] = useState('')
 
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: "Poetsen One",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: '100px'
      },
      h2: {
        fontFamily: "Poetsen One",
        fontWeight: 200,
        fontStyle: "normal",
        fontSize: '16px'
      }
    },
    palette: {
      primary: {main: "#008DDA", light:  "#A0DEFF"},
      background: {default: "#CAF4FF", paper: "#FFFEF0"}
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <NavBar setPageToScroll={setPageToScroll} />
    <HomePage scrollToPage={pageToScroll === "Kezdőlap"} />
    <AboutPage scrollToPage={pageToScroll === "Rólunk"} />
    <GaleryPage scrollToPage={pageToScroll === "Galéria"}/>
    <PricePage scrollToPage={pageToScroll === "Áraink"}/>
    <ContactPage scrollToPage={pageToScroll === "Kapcsolat"} />
    </ThemeProvider>
  );
}

export default App;
