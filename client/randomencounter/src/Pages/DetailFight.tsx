import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import CharacterInput from "./CharacterInput";

interface IProps {
  gameType: string;
}

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    spacing: "8px",
    flexBasis: "72%",
  },
  innerInput: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "21.79px",
    maxLength: 13,
    minLength: 13,
  },
  emailAndPassword: {},
  email: {},
  password: {},
}));

const DetailedFight = (props: IProps) => {
  const { gameType } = props;
  const history = useHistory();
  const classes = useStyle();

  const [playerName, setPlayerName] = useState<string>("");

  const onNameChange = (name: string) => {
    setPlayerName(name);
  };

  return (
    <Box className={classes.root} sx={{ width: "100%" }}>
      <Box sx={{ justifyContent: "center" }}>
        <CharacterInput />
      </Box>

      <Box>{playerName}</Box>
    </Box>
  );
};

export default DetailedFight;
