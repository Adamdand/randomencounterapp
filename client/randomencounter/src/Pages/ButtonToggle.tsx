import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "200px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  toggleButton: {
    backgroundColor: "maroon",
    boxShadow:
      "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px red, inset 0 -2px 1px black",
  },
  buttonGroup: {
    diaplay: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "indianred",
  },
}));

interface IProps {
  onClick: (event: any, newGameType: string) => void;
  gameType: string;
}

const ButtonToggle = (props: IProps) => {
  const { onClick, gameType } = props;
  const { isMobile } = useResponsiveHelper();
  const classes = useStyles();

  return (
    <Box className={classes.buttonGroup}>
      <ToggleButtonGroup
        value={gameType}
        exclusive
        onChange={onClick}
        aria-label="text alignment"
      >
        <ToggleButton
          value="Home"
          aria-label="home"
          className={classes.toggleButton}
        >
          <Typography color="white">Home</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <FormControl className={classes.buttonGroup} sx={{ width: "120px" }}>
        <InputLabel id="searches-id">Search</InputLabel>
        <Select>
          <Box className={classes.buttonGroup}>
            <ToggleButtonGroup
              value={gameType}
              exclusive
              onChange={onClick}
              aria-label="text alignment"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <ToggleButton
                value="Monster Search"
                aria-label="monster search"
                className={classes.toggleButton}
              >
                <Typography color="white">
                  {isMobile ? "Monster Search" : "Monster Search"}
                </Typography>
              </ToggleButton>
              <ToggleButton
                value="Item Search"
                aria-label="item search"
                className={classes.toggleButton}
              >
                <Typography color="white">
                  {isMobile ? "Item Search" : "Item Search"}
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Select>
      </FormControl>
      <FormControl className={classes.buttonGroup} sx={{ width: "120px" }}>
        <InputLabel id="fights-id">Fights</InputLabel>

        <Select>
          <Box className={classes.buttonGroup}>
            <ToggleButtonGroup
              value={gameType}
              exclusive
              onChange={onClick}
              aria-label="text alignment"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <ToggleButton
                value="Quick Fight"
                aria-label="quick fight"
                className={classes.toggleButton}
              >
                <Typography color="white">Quick Fight</Typography>
              </ToggleButton>
              <ToggleButton
                value="Detailed Fight"
                aria-label="detailed fight"
                className={classes.toggleButton}
              >
                <Typography color="white">Detailed Fight</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Select>
      </FormControl>
    </Box>
  );
};
export default ButtonToggle;
