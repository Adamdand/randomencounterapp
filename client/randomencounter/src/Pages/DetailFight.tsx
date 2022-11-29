import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import { CustomerDataContext } from "../Context/CustomerContext";
import {
  IMonster,
  IMonsterDetails,
  IPlayer,
  IRandomMonster,
} from "../Context/Types";
import CharacterCard from "./CharacterCard";
import CreateNewPlayer from "./CreateNewPlayer";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";
import MonsterDetails from "./Common/MonsterDetails";
import ActionsInfo from "./InfoPages/ActionsInfo";
import SetUpInfo from "./InfoPages/SetUpInfo";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";
import { allMonstersEnv, monsterRegions } from "../API/monsterSort";

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
    paddingTop: "40px",
  },
  innerInput: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "21.79px",
    maxLength: 13,
    minLength: 13,
  },
  textField: {
    marginLeft: "8px",
    marginRight: "8px",
    width: "50%",
  },
  controls: {
    display: "flex",
    right: 0,
    top: 0,
    position: "sticky",
    flexDirection: "column",
    width: "40%",
    paddingLeft: "0px",
    [theme.breakpoints.down("desktop")]: {
      width: "40%",
    },

    [theme.breakpoints.down("tablet")]: {
      width: "40%",
    },
  },
  CharactersInFight: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
}));

const damageLines = [
  "Ouch!",
  "Stop that!",
  "Hey!",
  "Uuug!",
  "Stop!",
  "I'll get you for that!",
  "I'll remember this!",
];
const healingLines = [
  "Thank you!",
  "Thanks friend",
  "Apreciated!",
  "I feel better now!",
  "Right on!",
  "Hell yah!",
];

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
      characterHealth: 20,
      characterMaxHealth: 100,
      characterLevel: 3,
      type: "human",
      successSaves: 0,
      failSaves: 0,
    },
    {
      index: 1,
      characterName: "test2",
      characterAC: 2,
      characterInitative: 2,
      characterHealth: 25,
      characterMaxHealth: 50,
      characterLevel: 2,
      type: "human",
      successSaves: 0,
      failSaves: 0,
    },
    {
      index: 2,
      characterName: "test3",
      characterAC: 3,
      characterInitative: 55,
      characterHealth: 100,
      characterMaxHealth: 100,
      characterLevel: 3,
      type: "human",
      successSaves: 0,
      failSaves: 0,
    },
  ]);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>(testList[0]);
  const [damageHealth, setDamageHealth] = useState<number>();
  const [open, setOpen] = React.useState(false);
  const { isMobile } = useResponsiveHelper();
  const [openSetUp, setUpOpen] = React.useState(false);
  const [openActionsInfo, setActionsOpen] = React.useState(false);
  const [hoveredPlayer, setHoveredPlayer] = useState<IPlayer>();
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const [isDamageOneVisible, setDamageOneVisible] = React.useState(false);
  const [isDamageTwoVisible, setDamageTwoVisible] = React.useState(false);
  const [isHealingOneVisible, setHealingOneVisible] = React.useState(false);
  const [isHealingTwoVisible, setHealingTwoVisible] = React.useState(false);

  const [monsterList, setMonsterList] = useState<IMonster[]>([]);
  const [monsterRatingList, setMonsterRatingList] = useState<IMonster[]>([]);

  const [monsterDetails, setMonsterDetails] = useState<IMonsterDetails>(
    defaultMonsterDetails
  );
  const [averagePlayerLevel, setAveragePlayerLevel] = useState<number>(3);
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

  const showDamageOne = () => {
    setDamageOneVisible(true);
    setTimeout(() => {
      setDamageOneVisible(false);
    }, 250);
  };
  const showDamageTwo = () => {
    setDamageTwoVisible(true);
    setTimeout(() => {
      setDamageTwoVisible(false);
    }, 250);
  };
  const getRandomText = (lineOptions: string[]): string => {
    const numOptions = lineOptions.length - 1;
    return lineOptions[Math.floor(Math.random() * (numOptions + 1))];
  };
  const showHealingOne = () => {
    setHealingOneVisible(true);
    setTimeout(() => {
      setHealingOneVisible(false);
    }, 250);
  };
  const showHealingTwo = () => {
    setHealingTwoVisible(true);
    setTimeout(() => {
      setHealingTwoVisible(false);
    }, 250);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenSetUpInfo = () => {
    setUpOpen(true);
  };
  const handleCloseSetUpInfo = () => {
    setUpOpen(false);
  };

  const handleClickOpenActionsInfo = () => {
    setActionsOpen(true);
  };
  const handleCloseActionsInfo = () => {
    setActionsOpen(false);
  };

  const onClick = (newSelectedPlayer: IPlayer): void => {
    const characterSelected = newSelectedPlayer;
    setSelectedPlayer(characterSelected);
  };

  const addPlayer = (newPlayerData: IPlayer) => {
    testList.push(newPlayerData);
  };
  const removePlayer = (playerToDelete: string) => {
    const newList = testList.filter((player) => {
      return player.characterName !== playerToDelete;
    });
    setTestList(newList);
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
  };

  const changeValue = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value !== undefined) {
      setDamageHealth(Number(event.target.value));
    }
  };

  const damagePlayer = () => {
    if (damageHealth !== undefined && damageHealth !== null) {
      const newArr = testList.map((player) => {
        if (
          player.characterName === selectedPlayer.characterName &&
          player.characterHealth !== null
        ) {
          showDamageOne();
          setTimeout(showDamageTwo, 250);
          return {
            ...player,
            characterHealth: player.characterHealth - damageHealth,
          };
        }

        return player;
      });
      setTestList(newArr);
    }
  };
  const healPlayer = () => {
    if (damageHealth !== undefined && damageHealth !== null) {
      const newArr = testList.map((player) => {
        if (
          player.characterName === selectedPlayer.characterName &&
          player.characterHealth !== null
        ) {
          showHealingOne();
          setTimeout(showHealingTwo, 250);
          return {
            ...player,
            characterHealth: player.characterHealth + damageHealth,
          };
        }

        return player;
      });
      setTestList(newArr);
    }
  };

  const failADeathSave = (num: number) => {
    const myPlayer =
      hoveredPlayer !== undefined ? hoveredPlayer : selectedPlayer;
    const newArr = testList.map((player) => {
      if (
        player.characterName === myPlayer.characterName &&
        player.characterHealth !== null &&
        player.characterHealth <= 0
      ) {
        return {
          ...player,
          failSaves: num,
        };
      }

      return player;
    });
    setTestList(newArr);
  };

  const succeedADeathSave = (num: number) => {
    const myPlayer =
      hoveredPlayer !== undefined ? hoveredPlayer : selectedPlayer;
    const newArr = testList.map((player) => {
      if (
        player.characterName === myPlayer.characterName &&
        player.characterHealth !== null &&
        player.characterHealth <= 0
      ) {
        if (player.successSaves === 2) {
          return {
            ...player,
            successSaves: 0,
            failSaves: 0,
            characterHealth: 1,
          };
        }
        return {
          ...player,
          successSaves: num,
        };
      }

      return player;
    });
    setTestList(newArr);
  };

  const changeAveragePlayerLevel = (): void => {
    let levelSum = 0;
    let count = 0;

    testList.forEach((element) => {
      if (element.characterLevel !== null && element.type === "human") {
        levelSum += element.characterLevel;
        count += 1;
      }
    });

    const averageLevel = Math.trunc(levelSum / count);
    setAveragePlayerLevel(averageLevel);
  };

  useEffect(() => {
    changeAveragePlayerLevel();
  }, [testList]);

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

  const getRandomMonsterTypeOne = async (
    monsters: IMonster[],
    makeTwoMonsters: boolean
  ) => {
    const monsterIndex = Math.floor(Math.random() * monsters.length);
    let rndInt: number;
    if (makeTwoMonsters === true) {
      rndInt = Math.floor(Math.random() * 3) + 1;
    } else {
      rndInt = Math.floor(Math.random() * 6) + 1;
    }
    const monsterObject = monsters[monsterIndex];

    const newRandomMonster = {
      ...monsterObject,
      quantity: rndInt,
    } as IRandomMonster;
    try {
      const tempMonsterDetails = await monsterAPIs.getSpecificMonsterAxios(
        newRandomMonster.index
      );
      let monsterCount = 0;
      while (monsterCount < rndInt) {
        testList.push({
          characterName: `${tempMonsterDetails.name}${monsterCount + 1}`,
          characterAC: tempMonsterDetails.armor_class,
          characterHealth: tempMonsterDetails.hit_points,
          characterInitative: Math.ceil(
            Math.round((tempMonsterDetails.dexterity - 10) / 2) +
              (Math.random() * (20 - 1) + 1)
          ),
          characterLevel: tempMonsterDetails.challenge_rating,
          characterMaxHealth: tempMonsterDetails.hit_points,
          type: "npc",
          successSaves: 0,
          failSaves: 0,
        });
        setRandomMonsterTypeOne(newRandomMonster);
        monsterCount += 1;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomMonsterTypeTwo = async (
    monsters: IMonster[],
    makeTwoMonsters: boolean
  ) => {
    if (makeTwoMonsters === true && monsters.length > 1) {
      const monsterIndex = Math.floor(Math.random() * monsters.length);
      const rndInt = Math.floor(Math.random() * 3) + 1;
      const monsterObject = monsters[monsterIndex];
      const newRandomMonster = {
        ...monsterObject,
        quantity: rndInt,
      } as IRandomMonster;
      try {
        const tempMonsterDetails = await monsterAPIs.getSpecificMonsterAxios(
          newRandomMonster.index
        );
        let monsterCount = 0;
        while (monsterCount < rndInt) {
          testList.push({
            characterName: `${tempMonsterDetails.name}${monsterCount + 1}`,
            characterAC: tempMonsterDetails.armor_class,
            characterHealth: tempMonsterDetails.hit_points,
            characterInitative: Math.ceil(
              Math.round((tempMonsterDetails.dexterity - 10) / 2) +
                (Math.random() * (20 - 1) + 1)
            ),
            characterLevel: tempMonsterDetails.challenge_rating,
            characterMaxHealth: tempMonsterDetails.hit_points,
            type: "npc",
            successSaves: 0,
            failSaves: 0,
          });
          setRandomMonsterTypeTwo(newRandomMonster);
          monsterCount += 1;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createTwoMonsters = (): boolean => {
    const randomChance = Math.random() < 0.5;
    if (randomChance) {
      settwoTypeOfMonsters(true);
      return true;
    }
    settwoTypeOfMonsters(false);
    return false;
  };

  const findRandomEncounter = async (monsters: IMonster[]) => {
    const makeTwoMonsters = await createTwoMonsters();

    if (makeTwoMonsters) {
      getRandomMonsterTypeOne(monsters, makeTwoMonsters);
      getRandomMonsterTypeTwo(monsters, makeTwoMonsters);
    } else {
      getRandomMonsterTypeOne(monsters, makeTwoMonsters);
    }
  };

  const getMonsterWithRatingBtn = async () => {
    if (averagePlayerLevel !== undefined) {
      try {
        const monstersWithCR = await monsterAPIs.getMonstersWithRating(
          averagePlayerLevel
        );
        setMonsterRatingList(monstersWithCR);
        if (monstersWithCR.length > 0 && selectedRegion === "All") {
          await findRandomEncounter(monstersWithCR);
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
            await findRandomEncounter(tempMonsterList);
            setNewMonsterActivity();
          }
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const removeMonsters = () => {
    let updatePlayerList = [] as IPlayer[];
    if (testList.length > 0) {
      updatePlayerList = testList.filter((player) => player.type === "human");
    }

    setTestList(updatePlayerList);
  };

  const handleRegionChange = (event: any) => {
    const tempRegion = event.target.value;
    setSelectedRegion(tempRegion);
  };
  const resetFilters = (): void => {
    setSelectedRegion("All");
  };

  return (
    <>
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
          Detailed Fight
        </Typography>
      </Box>
      <Box
        className={classes.root}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        {isHealingTwoVisible && (
          <Box
            sx={{
              display: "flex",
              position: "fixed",
              top: "50%",
              left: "45%",
              justifyContent: "space-around",
              zIndex: 90,
            }}
          >
            {/* <Box>
            <FavoriteIcon fontSize="large" sx={{ color: "red" }} />
          </Box> */}
            <Box
              sx={{
                color: "green",
                fontSize: isMobile ? "24px" : "50px",
                fontWeight: "bold",
              }}
            >
              {/* {getRandomText(healingLines)} */}
            </Box>
          </Box>
        )}
        {isDamageTwoVisible && (
          <Box
            sx={{
              display: "flex",
              position: "fixed",
              top: "50%",
              left: "45%",
              justifyContent: "space-around",
              zIndex: 90,
            }}
          >
            {/* <Box>
            <FavoriteIcon fontSize="large" sx={{ color: "blue" }} />
          </Box> */}
            <Box
              sx={{
                color: "red",
                fontSize: isMobile ? "24px" : "50px",
                fontWeight: "bold",
              }}
            >
              {/* {getRandomText(damageLines)} */}
            </Box>
          </Box>
        )}
        <Box className={classes.CharactersInFight}>
          <Box sx={{ height: "32px" }}>
            <Typography variant="h2">
              {isMobile ? "Characters" : "Characters in Fight"}
            </Typography>
          </Box>

          {testList.map((characters) => (
            <Box sx={{}} onMouseOver={() => setHoveredPlayer(characters)}>
              <CharacterCard
                data={characters}
                onClick={onClick}
                succeedADeathSave={succeedADeathSave}
                failADeathSave={failADeathSave}
                removePlayer={removePlayer}
                isSelected={
                  characters.characterName === selectedPlayer?.characterName
                }
                isHealedOne={isHealingOneVisible}
                isHealedTwo={isHealingTwoVisible}
                isDamagedOne={isDamageOneVisible}
                isDamagedTwo={isDamageTwoVisible}
              />
            </Box>
          ))}
          {/* <Box>{listCharacters()}</Box> */}

          <Box>
            <Button
              sx={{
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "maroon",
                  color: "white",
                },
              }}
              onClick={handleClickOpen}
            >
              <Box sx={{ flexDirection: "column" }}>
                <Box sx={{ height: "20px" }}>
                  <KeyboardDoubleArrowDownIcon width="200px" />
                </Box>
                <Box sx={{}}>Add Player</Box>
              </Box>
            </Button>
            <CreateNewPlayer
              open={open}
              handleClose={handleClose}
              addPlayer={addPlayer}
            />
          </Box>
        </Box>
        <Box className={classes.controls}>
          <Box sx={{ height: "32px" }}>
            <Typography variant="h2">Controls</Typography>
          </Box>
          <Box sx={{ boxShadow: 8, backgroundColor: "#EBEBEB" }}>
            <Box sx={{ border: "1px dashed grey" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ paddingLeft: "32px" }} variant="h3">
                  Set Up
                </Typography>
                <InfoOutlinedIcon
                  sx={{
                    paddingLeft: "16px",
                    color: "#B3B3B3",
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpenSetUpInfo}
                />
              </Box>
              <SetUpInfo open={openSetUp} handleClose={handleCloseSetUpInfo} />
              <Box>
                <FormControl
                  sx={{
                    width: "250px",
                    paddingTop: "16px",
                  }}
                >
                  <Typography variant="body1">Filter By Region</Typography>
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
                <Box sx={{ paddingBottom: "16px" }}>
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
                sx={{
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "maroon",
                    color: "white",
                  },
                }}
                onClick={getMonsterWithRatingBtn}
              >
                Get Monsters
              </Button>
              <Button
                sx={{
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "maroon",
                    color: "white",
                  },
                }}
                onClick={removeMonsters}
              >
                Remove Monsters
              </Button>
              <Box>
                <Button
                  sx={{
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "maroon",
                      color: "white",
                    },
                  }}
                  onClick={orderListOnInitative}
                >
                  Order List Based On Initiative
                </Button>
              </Box>
            </Box>
            <Box sx={{ border: "1px dashed grey" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ paddingLeft: "32px" }} variant="h3">
                  Actions
                </Typography>
                <InfoOutlinedIcon
                  sx={{
                    paddingLeft: "16px",
                    color: "#B3B3B3",
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpenActionsInfo}
                />
              </Box>
              <ActionsInfo
                open={openActionsInfo}
                handleClose={handleCloseActionsInfo}
              />

              <Box>
                <TextField
                  id="damageOrHealValue"
                  label="value"
                  type="tel"
                  className={classes.textField}
                  value={damageHealth}
                  onChange={changeValue}
                  margin="normal"
                  inputProps={{
                    pattern: "[0-9]*",
                  }}
                />
              </Box>
              <Box>
                <Button
                  sx={{
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "maroon",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    damagePlayer();
                  }}
                >
                  damage
                  <ArrowDownwardIcon sx={{ color: "red" }} />
                </Button>
                <Button
                  sx={{
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "maroon",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    healPlayer();
                  }}
                >
                  heal
                  <ArrowUpwardIcon sx={{ color: "green" }} />
                </Button>

                <Button
                  sx={{
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "maroon",
                      color: "white",
                    },
                  }}
                  onClick={turnOver}
                >
                  Next Turn
                  <ArrowForwardIosIcon sx={{ color: "black" }} />
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px dashed grey",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h3">Monster Info</Typography>
              </Box>

              {monsterRatingList.length > 0 &&
                randomMonsterTypeOne !== undefined && (
                  <Box>
                    <Box>
                      <Typography flexDirection="row" alignItems="center">
                        you have encountered {randomMonsterTypeOne.quantity}
                        <Button
                          sx={{
                            fontWeight: "600",
                            cursor: "pointer",
                            "&:hover": {
                              borderColor: "black",
                              backgroundColor: "maroon",
                              color: "white",
                            },
                          }}
                          onClick={() => {
                            getMonsterDetails(randomMonsterTypeOne.index);
                          }}
                        >
                          {randomMonsterTypeOne?.name}
                        </Button>
                        {twoTypeOfMonsters &&
                          randomMonsterTypeTwo.quantity !== 0 && (
                            <Typography>
                              and {randomMonsterTypeTwo.quantity}
                              <Button
                                sx={{
                                  cursor: "pointer",
                                  fontWeight: "600",
                                  "&:hover": {
                                    borderColor: "black",
                                    backgroundColor: "maroon",
                                    color: "white",
                                  },
                                }}
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
              <Box>
                <MonsterDetails monsterData={monsterDetails} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DetailedFight;
