import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomerDataContext } from "../Context/CustomerContext";
import { IPlayer } from "../Context/Types";
import CharacterCard from "./CharacterCard";
import { defaultUserData } from "../API/DummyData";
import CreateNewPlayer from "./CreateNewPlayer";

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
  const userData = useContext(CustomerDataContext);
  const history = useHistory();
  const classes = useStyle();
  const [inputList, setInputList] = useState<any[]>([
    {
      index: 0,
      characterName: "",
      characterAC: null,
      characterInitative: 0,
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
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>(testList[0]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = (newSelectedPlayer: IPlayer): void => {
    const characterSelected = newSelectedPlayer;
    setSelectedPlayer(characterSelected);
  };

  const createNewCharacterClick = async (): Promise<void> => {
    history.push("/");
  };

  const orderListOnInitative = () => {
    let newList = [] as IPlayer[];
    if (testList.length > 0) {
      newList = testList.slice().sort((a, b) => {
        return (
          parseFloat(b.characterInitative.toString()) -
          parseFloat(a.characterInitative.toString())
        );
      });
    }
    setTestList(newList);
    console.log("testList", newList);
  };

  const turnOver = () => {
    const negativeLength = 0 - (testList.length - 1);
    let newList = [] as IPlayer[];
    if (testList.length > 0) {
      const firstCharacter = testList[0];
      newList = testList.slice(negativeLength);
      newList.push(firstCharacter);
    }
    setTestList(newList);
    setSelectedPlayer(testList[1]);
    console.log("testList", newList);
  };

  return (
    <Box className={classes.root} sx={{ width: "100%" }}>
      {/* <Box sx={{ justifyContent: "center" }}>
        <CharacterInput inputList={inputList} setInputList={setInputList} />
      </Box> */}

      <Box>Characters in Fight:</Box>

      {testList.map((characters) => (
        <Box sx={{ display: "flex" }}>
          <CharacterCard
            data={characters}
            onClick={onClick}
            isSelected={
              characters.characterName === selectedPlayer?.characterName
            }
          />
        </Box>
      ))}
      {/* <Box>{listCharacters()}</Box> */}

      <Box>
        <Button onClick={handleClickOpen}>
          <Typography
            noWrap={true}
            sx={{
              fontFamily: "open sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "16.41px",
              color: "red",
              textDecoration: "underline",
            }}
          >
            New Player
          </Typography>
        </Button>
        <CreateNewPlayer open={open} handleClose={handleClose} />
      </Box>
      <Box>
        <Button onClick={orderListOnInitative}>Start Fight</Button>
      </Box>
      <Box>
        <Button onClick={turnOver}>Next Turn</Button>
      </Box>
    </Box>
  );
};

export default DetailedFight;
