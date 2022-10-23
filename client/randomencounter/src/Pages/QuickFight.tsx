import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IMonster, IMonsterDetails, IRandomMonster } from "../Context/Types";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";

interface IProps {
  gameType: string;
}

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
    paddingTop:'40px',
  },
  innerInput: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "21.79px",
    maxLength: 13,
    minLength: 13,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
//   encounterText:{
//     [theme.breakpoints.down("desktop")]: {
//       flexDirection: "row",
// }
//   }
}));

const QuickFight = (props: IProps) => {
  const { gameType } = props;
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const [monsterList, setMonsterList] = useState<IMonster[]>([]);
  const [monsterRatingList, setMonsterRatingList] = useState<IMonster[]>([]);

  const [monsterDetails, setMonsterDetails] = useState<IMonsterDetails>(
    defaultMonsterDetails
  );
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>();
  const [averagePlayerLevel, setAveragePlayerLevel] = useState<number>();
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
  console.log("monsters on main page", monsterList);

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
        console.log("monster details :", tempMonsterDetails);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const selectMonsterFromCRList = (monsterName: string) => {
    const tempSelectedMonster = monsterName;
    console.log("set selected Monster", tempSelectedMonster);
    // setSelectedMonster(event.target.value);
    getMonsterDetails(tempSelectedMonster);
  };

  const getRandomMonsterTypeOne = (monsters: IMonster[]) => {
    console.log("FUNCTION MONSTERS WITH RATING LIST", monsters);
    const monsterIndex = Math.floor(Math.random() * monsters.length);
    let rndInt: number;
    if (twoTypeOfMonsters === true) {
      rndInt = Math.floor(Math.random() * 3) + 1;
    } else {
      rndInt = Math.floor(Math.random() * 6) + 1;
    }
    const monsterObject = monsters[monsterIndex];
    console.log("monsterObject", monsterObject);

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

  console.log("verage player level: ", averagePlayerLevel);

  return (
    <Box
      className={classes.root}
    >
      <TextField
        placeholder="how many players?"
        fullWidth
        variant="outlined"
        value={numberOfPlayers}
        disabled={loading !== null}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => changeNumberOfPlayers(event.target.value)}
        // InputProps={{
        //   classes: {
        //     root: classes.innerInput,
        //   },
        // }}
      />
      <TextField
        placeholder="average player level"
        fullWidth
        variant="outlined"
        value={averagePlayerLevel}
        disabled={loading !== null}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => changeAveragePlayerLevel(event.target.value)}
        // InputProps={{
        //   classes: {
        //     root: classes.innerInput,
        //   },
        // }}
      />
      <Button onClick={getMonsterWithRatingBtn}>
        <Typography>Start Battle</Typography>
      </Button>
      {monsterRatingList.length > 0 && randomMonsterTypeOne !== undefined && (
        <Box sx={{flexDirection:'row',  textAlign: "left",  paddingLeft:'40px', paddingRight:'40px' }}>
          <Box>
            <Typography>
              you have encountered {randomMonsterTypeOne.quantity}
              <span style={{ color: 'red', fontWeight: '600', cursor: 'pointer' }} onClick={() =>  getMonsterDetails(randomMonsterTypeOne.index)}>
              {' '}{randomMonsterTypeOne?.name} {' '}
            </span>
            {twoTypeOfMonsters && randomMonsterTypeTwo.quantity !== 0 && (
                <>
                  and {randomMonsterTypeTwo.quantity}
                  <span style={{ color: 'red', fontWeight: '600', cursor: 'pointer' }} onClick={() =>  getMonsterDetails(randomMonsterTypeTwo.index)}>
                  {' '}{randomMonsterTypeTwo.name} {' '}
                    </span>
                </>
              )}
              {monsterActivities[randomActivityNumber]}.
              </Typography>
          </Box>
        </Box>
      )}
      <Box>
        <Box
          sx={{
            width: "100%",
            paddingTop: "16px",
          }}
        >
          <Typography sx={{ textDecoration: "underline", fontWeight: "bold" }}>
            Stats
          </Typography>
          {monsterDetails.name==="" &&(<Box>
          <Typography>Click on monster name to get details</Typography></Box>)}

          {monsterDetails.name!=="" &&(<Box>
          <Typography>Name = {monsterDetails.name}</Typography>
          <Typography>
            Challenge Rating = {monsterDetails.challenge_rating}
          </Typography>
          <Typography>AC = {monsterDetails.armor_class}</Typography>
          <Typography>HitPoints = {monsterDetails.hit_points}</Typography></Box>)}
        </Box>
      </Box>
    </Box>
  );
};

export default QuickFight;
