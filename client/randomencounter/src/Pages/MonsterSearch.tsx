import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CardMedia,
  Card,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IMonster, IMonsterDetails } from "../Context/Types";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";
import MonsterDetails from "./Common/MonsterDetails";

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
          [theme.breakpoints.down("desktop")]: {
            flexDirection: "column",
            alignItems: "center",
            spacing: "8px",
            flexBasis: "72%",
    }
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
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
}));

const MonsterSearch = (props: IProps) => {
  const { gameType } = props;
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
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
    <Box>
      <Box
      className={classes.root}
        // sx={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "center",
        // }}
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

<Box sx={{height: '160px', width:'100%', overflowY: "scroll", backgroundColor:'rgba(0,0,0,.05)'}} className={classes.scrollBar}>
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
            </Box>
          )}
        </Box>
        {/* <Box
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
                > */}
        <Box>
          <Box
            sx={{
              width: "500px",
              paddingTop: "16px",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyConent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
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
