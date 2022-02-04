import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  AppBar,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import {
  IMonster,
  IMonsterDetails,
  IMonsterList,
  IRandomMonster,
} from "../Context/Types";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";
import CharacterInput from "./CharacterInput";
import ButtonToggle from "./ButtonToggle";

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
  const [gameType, setGameType] = useState<string>("monster search");
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
  console.log("monsters on main page", monsterList);

  const changeNumberOfPlayers = (playerNumber: string) => {
    setNumberOfPlayers(Number(playerNumber));
  };

  const changeAveragePlayerLevel = (playerLevel: string) => {
    setAveragePlayerLevel(Number(playerLevel));
  };

  const onNameChange = (name: string) => {
    setPlayerName(name);
  };

  const monsterActivities = [
    "playing chess",
    "gossiping about Brenda",
    "planning an attack",
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

  const handleMonsterChange = (event: any) => {
    const tempSelectedMonster = event.target.value;
    console.log("set selected Monster", tempSelectedMonster);
    setSelectedMonster(event.target.value);
    getMonsterDetails(tempSelectedMonster);
    setSelectedCR(undefined);
  };

  const selectMonsterFromCRList = (monsterName: string) => {
    const tempSelectedMonster = monsterName;
    console.log("set selected Monster", tempSelectedMonster);
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

  const getRandomMonsterTypeOne = (twoMonsters: boolean) => {
    console.log("FUNCTION MONSTERS WITH RATING LIST", monsterRatingList);
    const monsterIndex = Math.floor(Math.random() * monsterRatingList.length);
    let rndInt: number;
    if (twoMonsters === true) {
      rndInt = Math.floor(Math.random() * 3) + 1;
    } else {
      rndInt = Math.floor(Math.random() * 6) + 1;
    }
    const monsterObject = monsterRatingList[monsterIndex];
    console.log("monsterObject", monsterObject);

    const newRandomMonster = {
      ...monsterObject,
      quantity: rndInt,
    } as IRandomMonster;
    setRandomMonsterTypeOne(newRandomMonster);
  };
  console.log("1 random monster: ", randomMonsterTypeOne);

  const getRandomMonsterTypeTwo = (moreThanOneMonster: boolean) => {
    if (moreThanOneMonster === true && monsterRatingList.length > 1) {
      const monsterIndex = Math.floor(Math.random() * monsterRatingList.length);
      const rndInt = Math.floor(Math.random() * 3) + 1;
      const monsterObject = monsterRatingList[monsterIndex];
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

  const findRandomEncounter = () => {
    settwoTypeOfMonsters(Math.random() < 0.5);
    getRandomMonsterTypeOne(twoTypeOfMonsters);
    getRandomMonsterTypeTwo(twoTypeOfMonsters);
  };

  const getMonsterWithRatingBtn = async () => {
    if (averagePlayerLevel !== undefined) {
      try {
        const monstersWithCR = await monsterAPIs.getMonstersWithRating(
          averagePlayerLevel
        );
        setMonsterRatingList(monstersWithCR);
        if (monsterRatingList.length > 0) {
          findRandomEncounter();
          setNewMonsterActivity();
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  console.log("verage player level: ", averagePlayerLevel);

  const handleRatingChange = (event: any) => {
    const tempMonsterRating = event.target.value;
    setSelectedCR(tempMonsterRating);
    console.log("Monster Rating Selected", tempMonsterRating);
    if (tempMonsterRating !== undefined) {
      const monstersWithCR = getMonsterWithRating(tempMonsterRating);
      console.log("monsterList with CR: ", monstersWithCR);
    }
  };

  const handleGameType = (
    event: any,
    newGameType: React.SetStateAction<string>
  ) => {
    setGameType(newGameType);
  };

  return (
    <Box className={classes.root} sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "block",
          textAlign: "center",
          paddingTop: "40px",
          paddingLeft: "16px",
          width: "100%",
        }}
      >
        <Box sx={{ paddingBottom: "40px" }}>
          <ButtonToggle onClick={handleGameType} gameType={gameType} />
        </Box>
        {gameType === "Monster Search" && (
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box>
                <FormControl sx={{ width: "250px" }}>
                  <InputLabel id="demo-simple-select-label">Monster</InputLabel>
                  <Select
                    fullWidth={true}
                    labelId="monster"
                    id="monster"
                    value={selectedMonster}
                    onChange={handleMonsterChange}
                  >
                    {monsterList.map((monster) => (
                      <MenuItem value={monster.index}>
                        <Typography>{monster.name}</Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl sx={{ width: "250px" }}>
                  <InputLabel id="demo-simple-select-label">
                    Monster Rating
                  </InputLabel>
                  <Select
                    fullWidth={true}
                    labelId="monster"
                    id="monster"
                    value={selectedCR}
                    onChange={handleRatingChange}
                  >
                    {monsterRatings.map((rating) => (
                      <MenuItem value={rating}>
                        <Typography>{rating}</Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {selectedCR && (
                  <Box sx={{ width: "100%", paddingTop: "16px" }}>
                    <Typography
                      sx={{ textDecoration: "underline", fontWeight: "bold" }}
                    >
                      Monster Options with CR {selectedCR}
                    </Typography>

                    {monsterRatingList.map((monstersWithRating) => {
                      return (
                        <Box>
                          <Button
                            onClick={() =>
                              getMonsterDetails(monstersWithRating.index)
                            }
                          >
                            <Typography
                              display="flex"
                              flexDirection="row"
                              justifyContent="space-evenly"
                              alignItems="center"
                              style={{ cursor: "pointer" }}
                            >
                              <Box>{monstersWithRating.name}</Box>
                            </Typography>
                          </Button>
                        </Box>
                      );
                    })}
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  position: "fixed",
                  right: "0px",
                  bottom: "25%",
                  backgroundColor: "#E5BBBB",
                  height: "300px",
                  border: "1px solid red",
                  borderRadius: "5px",
                  overflow: "scroll",
                }}
              >
                <Box
                  sx={{
                    width: "600px",
                    paddingTop: "16px",
                  }}
                >
                  <Typography
                    sx={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    Stats
                  </Typography>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography>Name = {monsterDetails.name}</Typography>
                    <Card sx={{ margin: "32px" }}>
                      <CardMedia
                        component="img"
                        height="max"
                        image={`dndMonsterPics/${monsterDetails.index}.jpeg`}
                        alt="monster image"
                      />
                      {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          monster picture
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          data
                        </Typography>
                      </CardContent> */}
                    </Card>
                    <Typography>
                      Challenge Rating = {monsterDetails.challenge_rating}
                    </Typography>
                    <Typography>AC = {monsterDetails.armor_class}</Typography>
                    <Typography>
                      HitPoints = {monsterDetails.hit_points}
                    </Typography>
                    <Typography>
                      Alignment = {monsterDetails.alignment}
                    </Typography>

                    <Typography>
                      Speed-walkwalk = {monsterDetails.speed.walk}
                    </Typography>
                    <Typography>
                      Speed-swim= {monsterDetails.speed.swim}
                    </Typography>

                    <Typography>Size = {monsterDetails.size}</Typography>

                    {monsterDetails.actions.map((action) => {
                      return (
                        <Box>
                          <Typography>Action Name = {action.name}</Typography>
                          <Typography>Action Desc = {action.desc}</Typography>
                        </Box>
                      );
                    })}

                    <Typography>
                      Damage Resistances = {monsterDetails.damage_immunities}
                    </Typography>
                    <Typography>
                      Damage Resistances = {monsterDetails.damage_resistances}
                    </Typography>
                    <Typography>
                      Damage Vulnerabilities =
                      {monsterDetails.damage_vulnerabilities}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {/* <Box>
          <TextField
            placeholder="how many players?"
            fullWidth
            variant="outlined"
            value={numberOfPlayers}
            disabled={loading !== null}
            onChange={(
              event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => changeNumberOfPlayers(event.target.value)}
            InputProps={{
              classes: {
                root: classes.innerInput,
              },
            }}
          />
        </Box> */}
        {gameType === "Quick Fight" && (
          <Box sx={{ justifyContent: "center" }}>
            <TextField
              placeholder="how many players?"
              fullWidth
              variant="outlined"
              value={numberOfPlayers}
              disabled={loading !== null}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => changeNumberOfPlayers(event.target.value)}
              InputProps={{
                classes: {
                  root: classes.innerInput,
                },
              }}
            />
            <TextField
              placeholder="average player level"
              fullWidth
              variant="outlined"
              value={averagePlayerLevel}
              disabled={loading !== null}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => changeAveragePlayerLevel(event.target.value)}
              InputProps={{
                classes: {
                  root: classes.innerInput,
                },
              }}
            />
            <Button onClick={getMonsterWithRatingBtn}>
              <Typography>Start Battle</Typography>
            </Button>
            {monsterRatingList.length > 0 &&
              randomMonsterTypeOne !== undefined && (
                <Box>
                  <Box>
                    <Typography
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      style={{ cursor: "pointer" }}
                    >
                      you have encountered {randomMonsterTypeOne.quantity}
                      <Box>
                        <Button
                          onClick={() => {
                            getMonsterDetails(randomMonsterTypeOne.index);
                          }}
                        >
                          {randomMonsterTypeOne?.name}
                        </Button>
                      </Box>
                      {twoTypeOfMonsters &&
                        randomMonsterTypeTwo.quantity !== 0 && (
                          <Typography>
                            and {randomMonsterTypeTwo.quantity}
                            <Button
                              onClick={() => {
                                getMonsterDetails(randomMonsterTypeTwo.index);
                              }}
                            >
                              {randomMonsterTypeTwo.name}
                            </Button>
                          </Typography>
                        )}
                      {monsterActivities[randomActivityNumber]}.
                    </Typography>
                  </Box>
                </Box>
              )}
            <Box
              sx={{
                position: "fixed",
                right: "0px",
                bottom: "50%",
                backgroundColor: "#E5BBBB",
                height: "250px",
                border: "1px solid red",
                borderRadius: "5px",
                overflow: "scroll",
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  paddingTop: "16px",
                }}
              >
                <Typography
                  sx={{ textDecoration: "underline", fontWeight: "bold" }}
                >
                  Stats
                </Typography>
                <Typography>Name = {monsterDetails.name}</Typography>
                <Typography>
                  Challenge Rating = {monsterDetails.challenge_rating}
                </Typography>
                <Typography>AC = {monsterDetails.armor_class}</Typography>
                <Typography>HitPoints = {monsterDetails.hit_points}</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {gameType === "Detailed Fight" && (
          <Box sx={{ justifyContent: "center" }}>
            <CharacterInput />
          </Box>
        )}
        <Box>{playerName}</Box>
      </Box>
    </Box>
  );
};

export default MainPage;
