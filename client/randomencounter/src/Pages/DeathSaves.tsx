import { Box, Radio, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";

interface IProps {
  isDead: boolean;
  successSaves: number;
  failSaves: number;
  succeedADeathSave: (num: number) => void;
  failADeathSave: (num: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const DeathSaves: React.FC<IProps> = (props: IProps) => {
  const { isDead, successSaves, failSaves, succeedADeathSave, failADeathSave } =
    props;
  const classes = useStyles();
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState("a");
  const { isMobile } = useResponsiveHelper();

  const failedSave = (event: React.ChangeEvent<HTMLInputElement>) => {
    failADeathSave(Number(event.target.value));
  };

  const successSave = (event: React.ChangeEvent<HTMLInputElement>) => {
    succeedADeathSave(Number(event.target.value));
  };

  return (
    <Box className={classes.root}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        Saving Throws:
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Box>Save:</Box>
          <Box>
            <Radio
              checked={props.successSaves > 0}
              onChange={successSave}
              value={1}
              name="name3"
              inputProps={{ "aria-label": "1" }}
              sx={{
                padding: "0px",
                color: "white",
                "&.Mui-checked": {
                  color: "green",
                },
              }}
            />
            <Radio
              checked={props.successSaves > 1}
              onChange={successSave}
              value={2}
              name="name2"
              inputProps={{ "aria-label": "2" }}
              sx={{
                color: "white",
                padding: "0px",
                "&.Mui-checked": {
                  color: "green",
                },
              }}
            />
            <Radio
              checked={props.successSaves > 2}
              onChange={successSave}
              value={3}
              name="name1"
              inputProps={{ "aria-label": "2" }}
              sx={{
                color: "white",
                padding: "0px",
                "&.Mui-checked": {
                  color: "green",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Box>Fail:</Box>
          <Box>
            <Radio
              checked={props.failSaves > 0}
              onChange={failedSave}
              value={1}
              name="radio-buttons4"
              inputProps={{ "aria-label": "1" }}
              sx={{
                color: "white",
                padding: "0px",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
            <Radio
              checked={props.failSaves > 1}
              onChange={failedSave}
              value={2}
              name="radio-buttons5"
              inputProps={{ "aria-label": "2" }}
              sx={{
                color: "white",
                padding: "0px",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
            <Radio
              checked={props.failSaves > 2}
              onChange={failedSave}
              value={3}
              name="radio-buttons6"
              inputProps={{ "aria-label": "2" }}
              sx={{
                color: "white",
                padding: "0px",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeathSaves;
