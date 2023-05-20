import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";

interface IProps {
  onClick: (event: any, newGameType: string) => void;
  gameType: string;
}

const useStyles = makeStyles((theme) => ({
  toggleButton: {},
}));

const ButtonToggle = (props: IProps) => {
  const { onClick, gameType } = props;
  const { isMobile } = useResponsiveHelper();
  const classes = useStyles();

  return (
    <Box
      sx={{
        diaplay: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "indianred",
        overflowX: "auto",
      }}
    >
      <ToggleButtonGroup
        value={gameType}
        exclusive
        onChange={onClick}
        aria-label="text alignment"
      >
        <ToggleButton
          value="Home"
          aria-label="home"
          sx={{
            backgroundColor: "maroon",
            boxShadow:
              "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px red, inset 0 -2px 1px black",
          }}
        >
          <Typography color="white">Home</Typography>
        </ToggleButton>
        <ToggleButton
          value="Monster Search"
          aria-label="monster search"
          sx={{
            backgroundColor: "maroon",
            boxShadow:
              "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px red, inset 0 -2px 1px black",
          }}
        >
          <Typography color="white">
            {isMobile ? "Monster Search" : "Monster Search"}
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="Item Search"
          aria-label="item search"
          sx={{
            backgroundColor: "maroon",
            boxShadow:
              "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px red, inset 0 -2px 1px black",
          }}
        >
          <Typography color="white">
            {isMobile ? "Item Search" : "Item Search"}
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="Random Item"
          aria-label="random item"
          sx={{
            backgroundColor: "maroon",
            boxShadow:
              "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px red, inset 0 -2px 1px black",
          }}
        >
          <Typography color="white">
            {isMobile ? "Random Item" : "Random Item"}
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="Quick Fight"
          aria-label="quick fight"
          sx={{
            backgroundColor: "maroon",
            boxShadow:
              "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px red, inset 0 -2px 1px black",
          }}
        >
          <Typography color="white">Quick Fight</Typography>
        </ToggleButton>
        <ToggleButton
          value="Detailed Fight"
          aria-label="detailed fight"
          sx={{
            backgroundColor: "maroon",
            boxShadow:
              "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px red, inset 0 -2px 1px black",
          }}
        >
          <Typography color="white">Detailed Fight</Typography>
        </ToggleButton>
        {/* <ToggleButton value="extra" aria-label="extra" disabled>
          <Typography color="white">extra</Typography>
        </ToggleButton> */}
      </ToggleButtonGroup>
    </Box>
  );
};
export default ButtonToggle;
