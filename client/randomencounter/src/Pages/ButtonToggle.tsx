import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";

export default function ToggleButtons() {
  const [gameType, setGameType] = React.useState("monster search");

  const handleAlignment = (
    event: any,
    newGameType: React.SetStateAction<string>
  ) => {
    setGameType(newGameType);
  };

  return (
    <ToggleButtonGroup
      value={gameType}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="monster search">
        <Typography>Monster Search</Typography>
      </ToggleButton>
      <ToggleButton value="center" aria-label="quick fight">
        <Typography>Quick Fight</Typography>
      </ToggleButton>
      <ToggleButton value="right" aria-label="detailed fight">
        <Typography>Detailed Fight</Typography>
      </ToggleButton>
      <ToggleButton value="justify" aria-label="extra" disabled>
        <Typography>extra</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
