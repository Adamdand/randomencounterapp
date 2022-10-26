import {
  Box,
  Button,
  Card,
  CardMedia,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { IPlayer } from "../Context/Types";
import DeathSaves from "./DeathSaves";
import useResponsiveHelper from "../Hooks/useResponsiveHelper";

interface IProps {
  data: IPlayer;
  onClick: (myCharacter: IPlayer) => void;
  succeedADeathSave: (num: number) => void;
  failADeathSave: (num: number) => void;
  removePlayer: (playerToDelete: string) => void;
  isSelected: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: "8px",
    width: "100%",
    height: "190px",
    fontColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    border: "1px solid maroon",
    backgroundColor: "wheat",
    borderRadius: "4px",
    [theme.breakpoints.only("mobile")]: { marginRight: "0px" },
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: "maroon",
      color: "white",
    },
  },
  selected: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "maroon",
    color: "white",
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
  const {
    data,
    isSelected,
    onClick,
    succeedADeathSave,
    failADeathSave,
    removePlayer,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { isMobile} = useResponsiveHelper();

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
        backgroundColor: isSelected ? "maroon" : "",
        color: isSelected ? "white" : "",
      }}
    >
      <Box
        sx={{ height: "10px" }}
        onClick={() => removePlayer(data.characterName)}
      >
        <ClearIcon
          sx={{
            zIndex: 999,
            position: "relative",
            left: "50%",
            bottom: "0%",
            width: "20px",
            height: "20px",
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ cursor: "pointer" }}
        onClick={() => onClick(data)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80px",
            zindex: 50,
          }}
        >
          <Box sx={{ wordWrap: "break-word", textAlign: "left" }}>
            <Typography>Name</Typography>
            <Typography>AC</Typography>
            <Typography>HP</Typography>
            <Typography>Lvl</Typography>
            <Typography>{`${isMobile? "Init": "Initiative"}`}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "150px" }}>
          <Box sx={{ wordWrap: "break-word", textAlign: "left" }}>
            <Typography
              sx={{ fontWeight: "bolder", textDecoration: "underline" }}
            >
              {data.characterName}
            </Typography>
            <Typography>{data.characterAC}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ color: getHealthColours, fontWeight: "bold" }}>
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
        <Box sx={{ width: "200px" }}>
          {playerDead() && (
            <DeathSaves
              isDead={true}
              successSaves={data.successSaves}
              failSaves={data.failSaves}
              succeedADeathSave={succeedADeathSave}
              failADeathSave={failADeathSave}
            />
          )}
          {(getHealthColours() === "green" ||
            getHealthColours() === "blue") && (
            <Box sx={{}}>
              <CardMedia
                component="img"
                height="100%"
                image={
                  data.type === "human"
                    ? "smilePics/happy.png"
                    : "smilePics/happyMonster.png"
                }
                alt="monster image"
              />
            </Box>
          )}
          {getHealthColours() === "orange" && (
            <Box sx={{}}>
              <CardMedia
                component="img"
                height="100%"
                image={
                  data.type === "human"
                    ? "smilePics/medium.png"
                    : "smilePics/mediumMonster.png"
                }
                alt="monster image"
              />
            </Box>
          )}
          {getHealthColours() === "red" && playerDead() === false && (
            <Box sx={{}}>
              <CardMedia
                component="img"
                height="100%"
                image={
                  data.type === "human"
                    ? "smilePics/sad.png"
                    : "smilePics/sadMonster.png"
                }
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
