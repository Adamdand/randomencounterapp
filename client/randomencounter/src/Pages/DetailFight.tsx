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
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>(
    defaultUserData[0]
  );
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = (setCharacter: IPlayer): void => {
    const characterSelected = setCharacter;
    setSelectedPlayer(selectedPlayer);
  };

  const createNewCharacterClick = async (): Promise<void> => {
    history.push("/");
  };

  const orderListOnInitative = () => {
    if (userData.length > 0) {
      userData.sort((a, b) => b.characterInitative - a.characterInitative);
    }
    setTestList(inputList);
    console.log("testList", inputList);
  };

  const turnOver = () => {
    if (userData.length > 0) {
      userData.push(userData.splice(0, 1)[0]);
    }
    setTestList(inputList);
    console.log("testList", inputList);
  };

  return (
    <Box className={classes.root} sx={{ width: "100%" }}>
      {/* <Box sx={{ justifyContent: "center" }}>
        <CharacterInput inputList={inputList} setInputList={setInputList} />
      </Box> */}

      <Box>{playerName}</Box>
      <Box>Characters in Fight:</Box>
      <Box>
        {userData.map((characters) => (
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
      </Box>
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
