import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IMonster, IMonsterDetails, IRandomMonster } from "../Context/Types";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";
import ButtonToggle from "./ButtonToggle";
import MonsterSearch from "./MonsterSearch";
import QuickFight from "./QuickFight";
import DetailedFight from "./DetailFight";
import Home from "./Home";
import ItemSearch from "./ItemSearch";
import RandomItem from "./RandomItem";

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

const MainPage: React.FC = () => {
  const history = useHistory();
  const classes = useStyle();

  const [gameType, setGameType] = useState<string>("Home");

  const handleGameType = (
    event: any,
    newGameType: React.SetStateAction<string>
  ) => {
    if (newGameType !== null) {
      setGameType(newGameType);
    }
  };

  return (
    <Box className={classes.root} sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "block",
          textAlign: "center",
          paddingLeft: "0px",
          width: "100%",
        }}
      >
        <Box>
          <ButtonToggle onClick={handleGameType} gameType={gameType} />
        </Box>
        {gameType === "Home" && (
          <Home gameType={gameType} setGameType={setGameType} />
        )}
        {gameType === "Monster Search" && <MonsterSearch gameType={gameType} />}
        {gameType === "Item Search" && <ItemSearch gameType={gameType} />}
        {gameType === "Random Item" && <RandomItem gameType={gameType} />}
        {gameType === "Quick Fight" && <QuickFight gameType={gameType} />}
        {gameType === "Detailed Fight" && <DetailedFight gameType={gameType} />}
      </Box>
    </Box>
  );
};

export default MainPage;
