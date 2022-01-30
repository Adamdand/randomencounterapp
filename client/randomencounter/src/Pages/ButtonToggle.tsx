import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";

interface IProps {
  onClick: (event: any, newGameType: string) => void;
  gameType: string;
}

const ButtonToggle = (props: IProps) => {
  const { onClick, gameType } = props;

  return (
    <ToggleButtonGroup
      value={gameType}
      exclusive
      onChange={onClick}
      aria-label="text alignment"
    >
      <ToggleButton value="Monster Search" aria-label="monster search">
        <Typography>Monster Search</Typography>
      </ToggleButton>
      <ToggleButton value="Quick Fight" aria-label="quick fight">
        <Typography>Quick Fight</Typography>
      </ToggleButton>
      <ToggleButton value="Detailed Fight" aria-label="detailed fight">
        <Typography>Detailed Fight</Typography>
      </ToggleButton>
      <ToggleButton value="extra" aria-label="extra" disabled>
        <Typography>extra</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
export default ButtonToggle;
