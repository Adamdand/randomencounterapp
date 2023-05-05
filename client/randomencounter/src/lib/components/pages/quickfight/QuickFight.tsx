import MonsterDetails from "@/components/common/MonsterDetails";
import {
  Typography,
  TextField,
  Button,
  Box,
  FormHelperText,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { allMonstersEnv, monsterRegions } from "api/monsterSort";
import { defaultMonsterDetails } from "context/DefaultTypes";
import { IMonster, IMonsterDetails, IRandomMonster } from "context/Types";
import useLoading from "hooks/useLoading";
import {
  getMaxMonsterCR,
  getRandomCR,
  getDifficulty,
} from "hooks/useMonsterCalculations";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import monsterAPIs from "api/monsterAPI";

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
    paddingTop: "40px",
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

const QuickFight = () => {
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const [monsterList, setMonsterList] = useState<IMonster[]>([]);
  const [monsterRatingList, setMonsterRatingList] = useState<IMonster[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

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

  const selectMonsterFromCRList = (monsterName: string) => {
    const tempSelectedMonster = monsterName;
    console.log("set selected Monster", tempSelectedMonster);
    // setSelectedMonster(event.target.value);
    getMonsterDetails(tempSelectedMonster);
  };

  const getRandomMonsterTypeOne = (
    monsters: IMonster[],
    difficulty: string
  ) => {
    const monsterIndex = Math.floor(Math.random() * monsters.length);
    let monsterNum: number;
    let maxMonsters = 1;
    const minMonsters = 1;
    if (difficulty === "Normal" || difficulty === "Hard") {
      maxMonsters = 1;
    }
    if (difficulty === "Easy") {
      maxMonsters = 4;
    }
    if (difficulty === "Very Easy") {
      maxMonsters = 6;
    }
    if (twoTypeOfMonsters === true) {
      monsterNum = Math.floor((Math.random() * maxMonsters) / 2) + minMonsters;
    } else {
      monsterNum = Math.floor(Math.random() * maxMonsters) + minMonsters;
    }
    const monsterObject = monsters[monsterIndex];
    console.log("difficulty: ", difficulty);
    console.log("maxMonsters: ", maxMonsters);
    console.log("minMonsters: ", minMonsters);
    console.log("monsterNum: ", monsterNum);

    const newRandomMonster = {
      ...monsterObject,
      quantity: monsterNum,
    } as IRandomMonster;
    setRandomMonsterTypeOne(newRandomMonster);
  };

  const getRandomMonsterTypeTwo = (
    monsters: IMonster[],
    difficulty: string
  ) => {
    if (twoTypeOfMonsters === true && monsters.length > 1) {
      const monsterIndex = Math.floor(Math.random() * monsters.length);

      let maxMonsters = 1;
      const minMonsters = 1;
      if (difficulty === "Normal" || difficulty === "Hard") {
        maxMonsters = 1;
      }
      if (difficulty === "Easy") {
        maxMonsters = 4;
      }
      if (difficulty === "Very Easy") {
        maxMonsters = 6;
      }
      const monsterNum =
        Math.floor((Math.random() * maxMonsters) / 2) + minMonsters;

      const monsterObject = monsters[monsterIndex];
      const newRandomMonster = {
        ...monsterObject,
        quantity: monsterNum,
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

  const findRandomEncounter = (monsters: IMonster[], difficulty: string) => {
    settwoTypeOfMonsters(
      Math.random() < 0.5 && difficulty !== "Normal" && difficulty !== "Hard"
    );

    getRandomMonsterTypeOne(monsters, difficulty);
    getRandomMonsterTypeTwo(monsters, difficulty);
  };

  const getMonsterWithRatingBtn = async () => {
    if (averagePlayerLevel !== undefined && numberOfPlayers !== undefined) {
      try {
        const maxCR = getMaxMonsterCR(averagePlayerLevel, numberOfPlayers);
        const randomCR = getRandomCR(1, maxCR);
        const fightDifficulty = getDifficulty(randomCR, maxCR);
        const monstersWithCR = await monsterAPIs.getMonstersWithRating(
          randomCR
        );
        setMonsterRatingList(monstersWithCR);
        if (monstersWithCR.length > 0 && selectedRegion === "All") {
          findRandomEncounter(monstersWithCR, fightDifficulty);
          setNewMonsterActivity();
        }
        if (monstersWithCR.length > 0 && selectedRegion !== "All") {
          const tempMonsterList = [] as IMonster[];
          monstersWithCR.map((monster) => {
            if (
              allMonstersEnv.find((element): any => {
                return (
                  element.name === monster.name &&
                  element.environments.indexOf(selectedRegion) > -1
                );
              })
            ) {
              tempMonsterList.push(monster);
              return true;
            }

            return false;
          });
          if (
            tempMonsterList.length > 0 &&
            typeof tempMonsterList === typeof monsterList
          ) {
            await findRandomEncounter(tempMonsterList, fightDifficulty);
            setNewMonsterActivity();
          }
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleRegionChange = (event: any) => {
    const tempRegion = event.target.value;
    setSelectedRegion(tempRegion);
  };
  const resetFilters = (): void => {
    setSelectedRegion("All");
  };

  return (
    <Box
      sx={
        {
          // backgroundColor: "#FFD8D0", height: "100%"
        }
      }
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            backgroundColor: "black",
            paddingBottom: "24px",
            paddingTop: "24px",
          }}
        >
          Quick Fight
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Typography variant="h3">Number Of Players</Typography>
        <TextField
          placeholder="how many players?"
          fullWidth
          variant="outlined"
          value={Number(numberOfPlayers).toString()}
          type="number"
          disabled={loading !== null}
          inputProps={{ min: 1, style: { textAlign: "center" } }}
          onChange={(
            event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => changeNumberOfPlayers(event.target.value)}
          // InputProps={{
          //   classes: {
          //     root: classes.innerInput,
          //   },
          // }}
        />
        <Box sx={{ height: "24px" }}>
          {numberOfPlayers !== undefined && numberOfPlayers < 1 && (
            <FormHelperText id="component-helper-text" sx={{ color: "red" }}>
              Number of players will default to 1
            </FormHelperText>
          )}
        </Box>
        <Typography variant="h3">Average Player Level</Typography>
        <TextField
          placeholder="average player level"
          fullWidth
          variant="outlined"
          type="number"
          value={Number(averagePlayerLevel).toString()}
          disabled={loading !== null}
          inputProps={{ min: 1, style: { textAlign: "center" } }}
          onChange={(
            event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => changeAveragePlayerLevel(event.target.value)}
          // InputProps={{
          //   classes: {
          //     root: classes.innerInput,
          //   },
          // }}
        />
        <Box sx={{ height: "24px" }}>
          {averagePlayerLevel !== undefined && averagePlayerLevel < 1 && (
            <FormHelperText id="component-helper-text" sx={{ color: "red" }}>
              Average player level will default to 1
            </FormHelperText>
          )}
        </Box>
        <Box>
          <FormControl sx={{ width: "250px" }}>
            <Typography variant="h3">Filter By Region</Typography>
            <Typography variant="caption">(optional)</Typography>
            <Select
              fullWidth={true}
              labelId="Region"
              id="Region"
              value={selectedRegion}
              onChange={handleRegionChange}
              defaultValue="All"
            >
              {monsterRegions.map((region) => (
                <MenuItem value={region}>
                  <Typography>{region}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <Button
              sx={{
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "maroon",
                  color: "white",
                },
              }}
              onClick={() => resetFilters()}
            >
              Reset Filter
            </Button>
          </Box>
        </Box>
        <Button
          onClick={getMonsterWithRatingBtn}
          sx={{
            marginTop: "48px",
            "&:hover": {
              borderColor: "black",
              backgroundColor: "maroon",
              color: "white",
            },
          }}
        >
          <Typography sx={{}}>Start Battle</Typography>
        </Button>
        {monsterRatingList.length > 0 && randomMonsterTypeOne !== undefined && (
          <Box
            sx={{
              flexDirection: "row",
              textAlign: "left",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <Box>
              <Typography>
                you have encountered {randomMonsterTypeOne.quantity}
                <Button
                  sx={{
                    color: "maroon",
                    fontWeight: "600",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "maroon",
                      color: "white",
                    },
                  }}
                  onClick={() => getMonsterDetails(randomMonsterTypeOne.index)}
                >
                  {randomMonsterTypeOne?.name}{" "}
                </Button>
                {twoTypeOfMonsters && randomMonsterTypeTwo.quantity !== 0 && (
                  <>
                    and {randomMonsterTypeTwo.quantity}
                    <Button
                      sx={{
                        color: "maroon",
                        fontWeight: "600",
                        cursor: "pointer",
                        "&:hover": {
                          borderColor: "black",
                          backgroundColor: "maroon",
                          color: "white",
                        },
                      }}
                      onClick={() =>
                        getMonsterDetails(randomMonsterTypeTwo.index)
                      }
                    >
                      {" "}
                      {randomMonsterTypeTwo.name}{" "}
                    </Button>
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
            <Typography
              sx={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              Stats
            </Typography>

            <Box>
              <MonsterDetails monsterData={monsterDetails} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuickFight;
