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
// import useHomeInspection from "Hooks/useDnDApp";

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
  //   const [monsterList, setMonsterList] = useState<IMonster[]>([]);
  //   const [selectedMonster, setSelectedMonster] = useState<IMonster>({
  //     index: "null",
  //     name: "null",
  //     url: "null",
  //   });
  // const { state } = useContext(IdContext);

  const newAccountClick = async (): Promise<void> => {
    // for test purposes make into an async function when have real endpoints
    // const emailResponseData = InspectionAPI.getemail();
    // const data = { email } as Iemail;
    // console.log('ID Data sent to fireBase: ', GetStatus);
    showLoading();
  };

  return (
    <Grid container={true} item={true} className={classes.root}>
      <Box sx={{ display: "block", textAlign: "center" }}>
        <Box>
          <Typography variant="h1">Hello</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default MainPage;
