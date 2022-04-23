import {
  Box,
  Card,
  CardMedia,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

import React from "react";
import { IPlayer } from "../Context/Types";
import DeathSaves from "./DeathSaves";

interface IProps {
  data: IPlayer;
  onClick: (myCharacter: IPlayer) => void;
  isSelected: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: "8px",
    width: "100%",
    height: "100%",
    fontColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    [theme.breakpoints.only("mobile")]: { marginRight: "0px" },
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primaryHover,
      color: theme.palette.primary.main,
    },
  },
  selected: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primaryHover,
    color: theme.palette.primary.main,
  },
  classIcon: {
    width: "50px",
  },
  media: {
    // this is the`className` passed to `CardMedia` later
    height: 100, // as an example I am modifying width and height
    width: "33%",
  },
}));

const CharacterCard: React.FC<IProps> = (props: IProps) => {
  const { data, isSelected, onClick } = props;
  const classes = useStyles();
  const theme = useTheme();

  const playerDead = (): boolean => {
    if (data.characterHealth !== null && data.characterMaxHealth !== null) {
      if ((data.characterHealth / data.characterMaxHealth) * 100 <= 0) {
        return true;
      }
      return false;
    }
    return false;
  };

  const getHealthColours = (): string => {
    if (data.characterHealth !== null && data.characterMaxHealth !== null) {
      if ((data.characterHealth / data.characterMaxHealth) * 100 > 100) {
        return "blue";
      }
      if ((data.characterHealth / data.characterMaxHealth) * 100 > 50) {
        return "green";
      }
      if ((data.characterHealth / data.characterMaxHealth) * 100 > 25) {
        return "orange";
      }
      if ((data.characterHealth / data.characterMaxHealth) * 100 <= 25) {
        return "red";
      }
    }
    return "black";
  };

  return (
    <Box
      className={classes.root}
      style={{
        cursor: "pointer",
        borderColor: isSelected
          ? theme.palette.primary.main
          : data.characterHealth !== null && data.characterHealth <= 0
          ? "red"
          : "",
        backgroundColor: isSelected ? theme.palette.primaryHover : "",
        color: isSelected ? theme.palette.primary.main : "",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ cursor: "pointer" }}
        onClick={() => onClick(data)}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ wordWrap: "break-word", textAlign: "left" }}>
            <Typography>Name</Typography>
            <Typography>AC</Typography>
            <Typography>HP</Typography>
            <Typography>Lvl</Typography>
            <Typography>Initiative</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ wordWrap: "break-word", textAlign: "left" }}>
            <Typography
              sx={{ fontWeight: "bolder", textDecoration: "underline" }}
            >
              {data.characterName}
            </Typography>
            <Typography>{data.characterAC}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ color: getHealthColours }}>
                {data.characterHealth}
              </Typography>
              <Typography sx={{ paddingLeft: "4px" }}>
                / {data.characterMaxHealth}
              </Typography>
            </Box>

            <Typography>{data.characterLevel}</Typography>
            <Typography>{data.characterInitative}</Typography>
          </Box>
        </Box>
        <Box sx={{ width: playerDead() ? "200px" : "200px" }}>
          {playerDead() && <DeathSaves isDead={true} />}
          {(getHealthColours() === "green" ||
            getHealthColours() === "blue") && (
            <Box
              sx={{
                paddingLeft: "45%",
                width: "50%",
              }}
            >
              <CardMedia
                component="img"
                height="max"
                image="smilePics/happy.png"
                alt="monster image"
              />
            </Box>
          )}
          {getHealthColours() === "orange" && (
            <Box
              sx={{
                paddingLeft: "45%",
                width: "50%",
              }}
            >
              <CardMedia
                component="img"
                height="max"
                image="smilePics/medium.png"
                alt="monster image"
              />
            </Box>
          )}
          {getHealthColours() === "red" && playerDead() === false && (
            <Box
              sx={{
                paddingLeft: "45%",
                width: "50%",
              }}
            >
              <CardMedia
                component="img"
                height="max"
                image="smilePics/sad.png"
                alt="monster image"
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterCard;
