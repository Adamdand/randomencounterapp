import React, { useState } from "react";
import { Grid, CircularProgress } from "@mui/material";

interface IUseLoading {
  showLoading: () => void;
  hideLoading: () => void;
  loading: null | JSX.Element;
}

const useLoading = (): IUseLoading => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const showLoading = (): void => {
    setVisible(() => true);
  };
  const hideLoading = (): void => setVisible(() => false);

  const loading = (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item spacing={1}>
        <CircularProgress thickness={7} size={100} />
      </Grid>
    </Grid>
  );

  const loadingIndicator = isVisible ? loading : null;

  return { showLoading, hideLoading, loading: loadingIndicator };
};

export default useLoading;
