import { Box, Radio, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useState } from "react";
import { IPlayer } from "../Context/Types";

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
          paddingRight: "10px",
        }}
      >
        Saving Throws
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
          <Box>Success:</Box>
          <Box>
            <Radio
              checked={props.successSaves > 0}
              onChange={successSave}
              value={1}
              name="name3"
              inputProps={{ "aria-label": "1" }}
              sx={{
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
                "&.Mui-checked": {
                  color: "green",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Box>Failed:</Box>
          <Box>
            <Radio
              checked={props.failSaves > 0}
              onChange={failedSave}
              value={1}
              name="radio-buttons4"
              inputProps={{ "aria-label": "1" }}
              sx={{
                color: "white",
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
