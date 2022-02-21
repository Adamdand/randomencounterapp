import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IPlayer } from "../Context/Types";

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
  const [inputList, setInputList] = useState<any[]>([
    {
      index: 0,
      characterName: "",
      characterAC: null,
      characterInitative: null,
      characterHealth: null,
      characterLevel: null,
    },
  ]);

  const [playerName, setPlayerName] = useState<string>("");

  const onNameChange = (name: string) => {
    setPlayerName(name);
  };

  const [testList, setTestList] = useState<IPlayer[]>([
    {
      index: 0,
      characterName: "test1",
      characterAC: 2,
      characterInitative: 90,
      characterHealth: 2,
      characterLevel: 3,
    },
    {
      index: 1,
      characterName: "test2",
      characterAC: 2,
      characterInitative: 2,
      characterHealth: 2,
      characterLevel: 2,
    },
    {
      index: 2,
      characterName: "test3",
      characterAC: 3,
      characterInitative: 55,
      characterHealth: 3,
      characterLevel: 3,
    },
  ]);

  const arrayMove = (arr: IPlayer[], fromIndex: number, toIndex: number) => {
    if (arr.length > 0) {
      const element = arr[fromIndex];
      arr.splice(fromIndex, 0);
      arr.splice(toIndex, 3, element);
    }
  };

  const turnOver = () => {
    if (testList.length > 0) {
      setTestList(
        testList.sort((a, b) =>
          a.characterInitative > b.characterInitative ? 1 : -1
        )
      );
    }
    console.log("testList", testList);
  };

  return (
    <Box className={classes.root} sx={{ width: "100%" }}>
      <Box sx={{ justifyContent: "center" }}>
        <CharacterInput inputList={inputList} setInputList={setInputList} />
      </Box>

      <Box>{playerName}</Box>
      <Box>
        {testList.map((playerCharacter, i) => {
          return <Box>{playerCharacter.characterName}</Box>;
        })}
      </Box>
      <Box>
        <Button onClick={turnOver}>Next Turn</Button>
      </Box>
    </Box>
  );
};

export default DetailedFight;
