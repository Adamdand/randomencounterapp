import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BaseTheme from "./themes/ThemeProvider";
import Routes from "./lib/routes/Routes";
import "./App.css";

// import DefaultCustomerProvider from './Context/DefaultCustomerContext';

// pick a date util library

const App: React.FC = () => {
  // const { signInAnon } = useFirebaseAuth();
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <ThemeProvider theme={BaseTheme}>
      <ParallaxProvider>
        <Router>
          <Route component={Routes} />
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
