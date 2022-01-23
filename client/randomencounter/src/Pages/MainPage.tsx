import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { getDatabase, ref, onValue } from "firebase/database";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import { IMonster, IMonsterList } from "../Context/Types";
import monsterAPIs from "../API/monsterAPI";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { authenticate } from "API/firebase";
// import { IMonster, IMonsterDetails, IMonsterList } from "Context/Types";
// import monsterAPIs from "../API/monsterAPI";
// import SiteContent from "../SiteContent/SiteContent";

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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const classes = useStyle();
  // const { searchemail } = useHomeInspection();
  const { showLoading, hideLoading, loading } = useLoading();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [monsterList, setMonsterList] = useState<IMonster[]>([]);
  const [selectedMonster, setSelectedMonster] = useState<IMonster>({
    index: "null",
    name: "null",
    url: "null",
  });
  //   const [selectedMonster, setSelectedMonster] = useState<IMonster>({
  //     index: "null",
  //     name: "null",
  //     url: "null",
  //   });
  // const { state } = useContext(IdContext);

  const getAllMonsters = async () => {
    const tempList = (await monsterAPIs.getAllMonsterAxios()) as IMonsterList;
    setMonsterList(tempList.results);
    console.log(tempList.results);
  };

  const getMonsterDetails = async () => {
    if (selectedMonster !== null) {
      const tempString = String(selectedMonster);
      const tempList = await monsterAPIs.getSpecificMonsterAxios(tempString);
      console.log(tempList);
    }
  };

  const handleMonsterChange = (e: any) => {
    const tempSelectedMonster = e.target.value;
    console.log("tempSelectedMonster", tempSelectedMonster);
    setSelectedMonster(tempSelectedMonster);
  };

  return (
    <Grid container={true} item={true} className={classes.root}>
      <Box sx={{ display: "block", textAlign: "center" }}>
        <Box>
          <Box sx={{ paddingLeft: "16px" }}>
            <Button
              variant="main"
              sx={{ width: "150px" }}
              onClick={getAllMonsters}
            >
              {loading === null && (
                <Typography variant="h2">getMonsters</Typography>
              )}
              {loading !== null && (
                <CircularProgress color="secondary" size={24} />
              )}
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "250px" }}>
          <Select
            fullWidth={true}
            labelId="monster"
            id="monster"
            value={selectedMonster.name}
            onChange={handleMonsterChange}
            defaultValue={selectedMonster.name}
          >
            {monsterList.map((monster) => (
              <MenuItem key={monster.index} value={monster.index}>
                <Typography>{monster.name}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ paddingLeft: "16px" }}>
          <Button
            variant="main"
            sx={{ width: "150px" }}
            onClick={getMonsterDetails}
          >
            {loading === null && (
              <Typography variant="h2">find monster</Typography>
            )}
            {loading !== null && (
              <CircularProgress color="secondary" size={24} />
            )}
          </Button>
        </Box>
        <Box sx={{ height: "500px", width: "100%" }}>
          <Typography>{selectedMonster.index}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default MainPage;
