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

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { authenticate } from "API/firebase";
// import { IMonster, IMonsterDetails, IMonsterList } from "Context/Types";
// import monsterAPIs from "../API/monsterAPI";
// import SiteContent from "../SiteContent/SiteContent";
const monsterRatings = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

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
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const [gameType, setGameType] = useState<string>("Home");
  const [monsterList, setMonsterList] = useState<IMonster[]>([]);
  const [monsterRatingList, setMonsterRatingList] = useState<IMonster[]>([]);
  const [selectedCR, setSelectedCR] = useState<number>();
  const [selectedMonster, setSelectedMonster] = useState<IMonster>({
    index: "null",
    name: "null",
    url: "null",
  });
  const [monsterDetails, setMonsterDetails] = useState<IMonsterDetails>(
    defaultMonsterDetails
  );
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>();
  const [averagePlayerLevel, setAveragePlayerLevel] = useState<number>();
  const [playerName, setPlayerName] = useState<string>("");
  const [randomActivityNumber, setRandomActivityNumber] = useState<number>(0);
  const [randomMonsterTypeOne, setRandomMonsterTypeOne] =
    useState<IRandomMonster>({
      quantity: 0,
      index: "null",
      name: "null",
      url: "null",
    });
  const [randomMonsterTypeTwo, setRandomMonsterTypeTwo] =
    useState<IRandomMonster>({
      quantity: 0,
      index: "null",
      name: "null",
      url: "null",
    });
  const [twoTypeOfMonsters, settwoTypeOfMonsters] = useState<boolean>(false);
  //   const [selectedMonster, setSelectedMonster] = useState<IMonster>({
  //     index: "null",
  //     name: "null",
  //     url: "null",
  //   });
  // const { state } = useContext(IdContext);

  const changeNumberOfPlayers = (playerNumber: string) => {
    setNumberOfPlayers(Number(playerNumber));
  };

  const changeAveragePlayerLevel = (playerLevel: string) => {
    setAveragePlayerLevel(Number(playerLevel));
  };

  const monsterActivities = [
    "playing chess",
    "gossiping about Brenda",
    "planning an attack on a nearby town",
    "playing Dungeons and Dragons",
    "roasting a pig",
    "sleeping",
    "cleaning their teeth after having just eaten",
    "wondering around looking lost",
    "trying on tiny hats",
    "clipping their toe nails",
    "eating a child alive",
    "mumbling to themself",
    "doing just general nasty stuff",
    "planning a birthday party for their grandmother",
    "chasing a lost little boy",
    "mumbling as they walk mindlessly around",
    "jumping unexpectantly out of a bush at you",
  ];

  const setNewMonsterActivity = () =>
    setRandomActivityNumber(
      Math.floor(Math.random() * monsterActivities.length - 1) + 1
    );

  let tempList: IMonster[];
  const getAllMonsters = async () => {
    try {
      tempList = await monsterAPIs.getAllMonsterAxios();
    } catch (error) {
      console.log("error: ", error);
    }
    if (tempList.length > 0) {
      setMonsterList(tempList);
    } else {
      setMonsterList([]);
    }
  };

  useEffect(() => {
    getAllMonsters();
  }, []);

  const getMonsterDetails = async (monsterName: string) => {
    let tempMonsterDetails: IMonsterDetails;
    if (monsterName !== null) {
      try {
        tempMonsterDetails = await monsterAPIs.getSpecificMonsterAxios(
          monsterName
        );
        setMonsterDetails(tempMonsterDetails);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleMonsterChange = (event: any) => {
    const tempSelectedMonster = event.target.value;
    setSelectedMonster(event.target.value);
    getMonsterDetails(tempSelectedMonster);
    setSelectedCR(undefined);
  };

  const selectMonsterFromCRList = (monsterName: string) => {
    const tempSelectedMonster = monsterName;
    // setSelectedMonster(event.target.value);
    getMonsterDetails(tempSelectedMonster);
  };

  const getMonsterWithRating = async (monsterRating: number) => {
    let monstersWithCR: IMonster[];
    monstersWithCR = [];
    try {
      monstersWithCR = await monsterAPIs.getMonstersWithRating(monsterRating);
    } catch (error) {
      console.log("error: ", error);
    }
    if (monstersWithCR.length > 0) {
      setMonsterRatingList(monstersWithCR);
    }
  };

  const getRandomMonsterTypeOne = (monsters: IMonster[]) => {
    const monsterIndex = Math.floor(Math.random() * monsters.length);
    let rndInt: number;
    if (twoTypeOfMonsters === true) {
      rndInt = Math.floor(Math.random() * 3) + 1;
    } else {
      rndInt = Math.floor(Math.random() * 6) + 1;
    }
    const monsterObject = monsters[monsterIndex];

    const newRandomMonster = {
      ...monsterObject,
      quantity: rndInt,
    } as IRandomMonster;
    setRandomMonsterTypeOne(newRandomMonster);
  };
  console.log("1 random monster: ", randomMonsterTypeOne);

  const getRandomMonsterTypeTwo = (monsters: IMonster[]) => {
    if (twoTypeOfMonsters === true && monsters.length > 1) {
      const monsterIndex = Math.floor(Math.random() * monsters.length);
      const rndInt = Math.floor(Math.random() * 3) + 1;
      const monsterObject = monsters[monsterIndex];
      const newRandomMonster = {
        ...monsterObject,
        quantity: rndInt,
      } as IRandomMonster;
      setRandomMonsterTypeTwo(newRandomMonster);
    } else {
      setRandomMonsterTypeTwo({
        quantity: 0,
        index: "null",
        name: "null",
        url: "null",
      });
    }
  };

  const findRandomEncounter = (monsters: IMonster[]) => {
    settwoTypeOfMonsters(Math.random() < 0.5);

    getRandomMonsterTypeOne(monsters);
    getRandomMonsterTypeTwo(monsters);
  };

  const getMonsterWithRatingBtn = async () => {
    if (averagePlayerLevel !== undefined) {
      try {
        const monstersWithCR = await monsterAPIs.getMonstersWithRating(
          averagePlayerLevel
        );
        setMonsterRatingList(monstersWithCR);
        if (monstersWithCR.length > 0) {
          findRandomEncounter(monstersWithCR);
          setNewMonsterActivity();
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleRatingChange = (event: any) => {
    const tempMonsterRating = event.target.value;
    setSelectedCR(tempMonsterRating);
    if (tempMonsterRating !== undefined) {
      const monstersWithCR = getMonsterWithRating(tempMonsterRating);
    }
  };

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
        <Box
          sx={{
            paddingBottom: "20px",
            paddingTop: "40px",
            backgroundColor: "black",
          }}
        >
          <ButtonToggle onClick={handleGameType} gameType={gameType} />
        </Box>
        {gameType === "Home" && (
          <Home gameType={gameType} setGameType={setGameType} />
        )}
        {gameType === "Monster Search" && <MonsterSearch gameType={gameType} />}
        {gameType === "Quick Fight" && <QuickFight gameType={gameType} />}
        {gameType === "Detailed Fight" && <DetailedFight gameType={gameType} />}
      </Box>
    </Box>
  );
};

export default MainPage;
