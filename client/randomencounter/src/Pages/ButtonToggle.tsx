import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface IProps {
  onClick: (event: any, newGameType: string) => void;
  gameType: string;
}

const useStyles = makeStyles((theme) => ({
  toggleButton: {
  },
}));

const ButtonToggle = (props: IProps) => {
  const { onClick, gameType } = props;
  const classes = useStyles();

  return (
    <Box sx={{backgroundColor:"maroon"}}>
    <ToggleButtonGroup
      value={gameType}
      exclusive
      onChange={onClick}
      aria-label="text alignment"
    >
      <ToggleButton value="Home" className={classes.toggleButton} aria-label="home">
        <Typography color="white" >Home</Typography>
      </ToggleButton>
      <ToggleButton value="Monster Search" aria-label="monster search">
        <Typography color="white" >Monster Search</Typography>
      </ToggleButton>
      <ToggleButton value="Quick Fight" aria-label="quick fight">
        <Typography color="white" >Quick Fight</Typography>
      </ToggleButton>
      <ToggleButton value="Detailed Fight" aria-label="detailed fight">
        <Typography color="white" >Detailed Fight</Typography>
      </ToggleButton>
      <ToggleButton value="extra" aria-label="extra" disabled>
        <Typography color="white">extra</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
    </Box>
  );
};
export default ButtonToggle;
