import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomerDataContext } from "../Context/CustomerContext";
import {
  IMonster,
  IMonsterDetails,
  IPlayer,
  IRandomMonster,
} from "../Context/Types";
import CharacterCard from "./CharacterCard";
import { defaultUserData } from "../API/DummyData";
import CreateNewPlayer from "./CreateNewPlayer";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";

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
  textField: {
    marginLeft: "8px",
    marginRight: "8px",
    width: 200,
  },
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
      characterHealth: 20,
      characterMaxHealth: 100,
      characterLevel: 3,
      type: "human",
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
    },
  ]);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>(testList[0]);
  const [damageHealth, setDamageHealth] = useState<number>();
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
          return {
            ...player,
            characterHealth: player.characterHealth - damageHealth,
          };
        }

        return player;
      });
      console.log(newArr);
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
          return {
            ...player,
            characterHealth: player.characterHealth + damageHealth,
          };
        }

        return player;
      });
      console.log(newArr);
      setTestList(newArr);
    }
  };

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
  //   const [selectedMonster, setSelectedMonster] = useState<IMonster>({
  //     index: "null",
  //     name: "null",
  //     url: "null",
  //   });
  // const { state } = useContext(IdContext);
  console.log("monsters on main page", monsterList);

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

  const getRandomMonsterTypeOne = async (monsters: IMonster[]) => {
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
    try {
      const tempMonsterDetails = await monsterAPIs.getSpecificMonsterAxios(
        newRandomMonster.index
      );
      let monsterCount = 0;
      while (monsterCount < rndInt) {
        testList.push({
          characterName: tempMonsterDetails.name,
          characterAC: tempMonsterDetails.armor_class,
          characterHealth: tempMonsterDetails.hit_points,
          characterInitative: Math.ceil(
            Math.round((tempMonsterDetails.dexterity - 10) / 2) +
              (Math.random() * (20 - 1) + 1)
          ),
          characterLevel: tempMonsterDetails.challenge_rating,
          characterMaxHealth: tempMonsterDetails.hit_points,
          type: "npc",
        });
        setRandomMonsterTypeOne(newRandomMonster);
        monsterCount += 1;
      }
    } catch (error) {
      console.log(error);
    }
    console.log("1 random monster: ", randomMonsterTypeOne);
  };

  const getRandomMonsterTypeTwo = async (monsters: IMonster[]) => {
    if (twoTypeOfMonsters === true && monsters.length > 1) {
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
            characterName: tempMonsterDetails.name,
            characterAC: tempMonsterDetails.armor_class,
            characterHealth: tempMonsterDetails.hit_points,
            characterInitative: Math.ceil(
              Math.round((tempMonsterDetails.dexterity - 10) / 2) +
                (Math.random() * (20 - 1) + 1)
            ),
            characterLevel: tempMonsterDetails.challenge_rating,
            characterMaxHealth: tempMonsterDetails.hit_points,
            type: "npc",
          });
          monsterCount += 1;
        }
      } catch (error) {
        console.log(error);
      }
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

  return (
    <Box
      className={classes.root}
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Box sx={{ width: "50%" }}>
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
          <Button onClick={orderListOnInitative}>Order List</Button>
        </Box>
        <Box>
          <Button onClick={turnOver}>Next Turn</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <Box>
          <Box>
            {" "}
            <TextField
              id="standard-name"
              label="value"
              className={classes.textField}
              value={damageHealth}
              onChange={changeValue}
              margin="normal"
            />
          </Box>
          <Box>
            <Button
              onClick={() => {
                damagePlayer();
              }}
            >
              damage
            </Button>
            <Button
              onClick={() => {
                healPlayer();
              }}
            >
              heal
            </Button>
          </Box>
        </Box>

        <Box>
          <Button onClick={getMonsterWithRatingBtn}>
            <Typography>Get Monsters</Typography>
          </Button>
          {monsterRatingList.length > 0 && randomMonsterTypeOne !== undefined && (
            <Box>
              <Box>
                <Typography
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
                  {twoTypeOfMonsters && randomMonsterTypeTwo.quantity !== 0 && (
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
        </Box>
      </Box>
    </Box>
  );
};

export default DetailedFight;
