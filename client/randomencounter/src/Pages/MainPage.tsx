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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IMonster, IMonsterDetails, IMonsterList } from "../Context/Types";
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

  const getMonsterWithRatingBtn = async () => {
    if (averagePlayerLevel !== undefined) {
      let monstersWithCR: IMonster[];
      monstersWithCR = [];
      try {
        monstersWithCR = await monsterAPIs.getMonstersWithRating(
          averagePlayerLevel
        );
      } catch (error) {
        console.log("error: ", error);
      }
      if (monstersWithCR.length > 0) {
        setMonsterRatingList(monstersWithCR);
      }
    }
  };

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

  console.log(gameType);

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
                  <Typography>
                    HitPoints = {monsterDetails.hit_points}
                  </Typography>
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
            {monsterRatingList.length > 0 && (
              <Box>
                <Box>
                  <Typography
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    you have encountered {Math.floor(Math.random() * 4) + 1}
                    <Box sx={{ paddingLeft: "4px" }}>
                      {monsterRatingList[0].name}
                    </Box>
                    {monsterRatingList.length > 1 && (
                      <Typography>
                        , and {Math.floor(Math.random() * 4) + 1}{" "}
                        {monsterRatingList[1].name} .
                      </Typography>
                    )}
                  </Typography>
                </Box>
              </Box>
            )}
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
