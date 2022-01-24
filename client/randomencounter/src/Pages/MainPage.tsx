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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IMonster, IMonsterDetails, IMonsterList } from "../Context/Types";
import monsterAPIs from "../API/monsterAPI";
import { defaultMonsterDetails } from "../Context/DefaultTypes";

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
    flexDirection: "column",
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
  const [monsterList, setMonsterList] = useState<IMonster[]>([]);
  const [selectedMonster, setSelectedMonster] = useState<IMonster>({
    index: "null",
    name: "null",
    url: "null",
  });
  const [monsterDetails, setMonsterDetails] = useState<IMonsterDetails>(
    defaultMonsterDetails
  );
  //   const [selectedMonster, setSelectedMonster] = useState<IMonster>({
  //     index: "null",
  //     name: "null",
  //     url: "null",
  //   });
  // const { state } = useContext(IdContext);

  const getAllMonsters = async () => {
    const tempList = (await monsterAPIs.getAllMonsterAxios()) as IMonsterList;
    setMonsterList(tempList.results);
  };

  useEffect(() => {
    getAllMonsters();
  }, []);

  const getMonsterDetails = async (monsterName: string) => {
    if (monsterName !== null) {
      const tempList = await monsterAPIs.getSpecificMonsterAxios(monsterName);
      setMonsterDetails(tempList);
      console.log("monster details :", tempList);
    }
  };

  const handleMonsterChange = (event: any) => {
    const tempSelectedMonster = event.target.value;
    console.log("set selected Monster", tempSelectedMonster);
    setSelectedMonster(event.target.value);
    getMonsterDetails(tempSelectedMonster);
  };

  const getMonsterWithRating = async (monsterRating: number) => {
    await monsterAPIs.getMonstersWithRating(monsterRating);
  };

  const handleRatingChange = (event: any) => {
    const tempMonsterRating = event.target.value;
    console.log("Monster Rating Selected", tempMonsterRating);
    const monstersWithCR = getMonsterWithRating(tempMonsterRating);
    console.log("monsterList with CR: ", monstersWithCR);
  };

  getMonsterWithRating(1);

  return (
    <Grid container={true} item={true} className={classes.root}>
      <Box
        sx={{
          display: "block",
          textAlign: "center",
          paddingTop: "40px",
          paddingLeft: "16px",
          width: "200px",
        }}
      >
        <FormControl fullWidth>
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

        <Box sx={{ width: "100%", paddingTop: "16px" }}>
          <Typography>Name = {monsterDetails.name}</Typography>
          <Typography>
            Challenge Rating = {monsterDetails.challenge_rating}
          </Typography>
          <Typography>AC = {monsterDetails.armor_class}</Typography>
          <Typography>HitPoints = {monsterDetails.hit_points}</Typography>
        </Box>
        <Box sx={{ paddingTop: "40px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Monster Rating
            </InputLabel>
            <Select
              fullWidth={true}
              labelId="monster"
              id="monster"
              value={selectedMonster}
              onChange={handleRatingChange}
            >
              {monsterRatings.map((rating) => (
                <MenuItem value={rating}>
                  <Typography>{rating}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Grid>
  );
};

export default MainPage;
