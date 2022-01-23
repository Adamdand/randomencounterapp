import React, { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BaseTheme from "./Themes/ThemeProvider";
import Routes from "./Routes/Routes";
import "./App.css";

// import DefaultCustomerProvider from './Context/DefaultCustomerContext';

// pick a date util library

const App: React.FC = () => {
  // const { signInAnon } = useFirebaseAuth();
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <ThemeProvider theme={BaseTheme}>
      <Router>
        <Route component={Routes} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
