import {
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IMonster, IMonsterDetails } from "../Context/Types";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";
import MonsterDetails from "./Common/MonsterDetails";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";

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
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "40px",
    [theme.breakpoints.down("desktop")]: {
      flexDirection: "column",
      alignItems: "center",
      spacing: "8px",
      flexBasis: "72%",
    },
  },
  innerInput: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "21.79px",
    maxLength: 13,
    minLength: 13,
  },
  scrollBar: {
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  monsterInfo: {
    width: "500px",
    paddingTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyConent: "center",
    alignItems: "center",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },
  },
}));

const MonsterSearch = (props: IProps) => {
  const { gameType } = props;
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const { isMobile, isDesktop } = useResponsiveHelper();
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

  const handleRatingChange = (event: any) => {
    const tempMonsterRating = event.target.value;
    setSelectedCR(tempMonsterRating);
    console.log("Monster Rating Selected", tempMonsterRating);
    if (tempMonsterRating !== undefined) {
      const monstersWithCR = getMonsterWithRating(tempMonsterRating);
      console.log("monsterList with CR: ", monstersWithCR);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
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
          Monster Search
        </Typography>
      </Box>
      <Box className={classes.root}>
        <Box>
          <FormControl sx={{ width: "250px" }}>
            <Typography variant="h3">Search By Monster Name</Typography>
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
        <Box sx={{ paddingTop: isDesktop ? "0px" : "16px" }}>
          <FormControl sx={{ width: "250px" }}>
            <Typography variant="h3">Filter By CR</Typography>
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

              <Box
                sx={{
                  height: "160px",
                  width: "100%",
                  overflowY: "scroll",
                  backgroundColor: "rgba(0,0,0,.05)",
                }}
                className={classes.scrollBar}
              >
                {monsterRatingList.map(
                  (monstersWithRating) => {
                    const forestMonsters = [
                      "Animated Armor",
                      "Brown Bear",
                      "Bugbear",
                    ] as string[];
                    // if (forestMonsters.includes(monstersWithRating.name)) {
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
                  }
                  //   return <></>;
                  // }
                )}
              </Box>
            </Box>
          )}
        </Box>
        <Box>
          <Box className={classes.monsterInfo}>
            <Typography
              sx={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              Stats
            </Typography>
            {monsterDetails.name !== "" && (
              <MonsterDetails monsterData={monsterDetails} />
            )}
            {monsterDetails.name === "" && (
              <Typography>No Monster Selected</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MonsterSearch;
